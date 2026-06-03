// GET /api/admin/stats
import { NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase/server'
export async function GET() {
  const supabase = createServerClient()
  const { data: allLeads } = await supabase.from('leads').select('qualification_tier,status,industry,commission_amount')
  const rows = allLeads ?? []
  const tierCounts: Record<string,number> = { hot:0, warm:0, cold:0, disqualified:0 }
  for(const r of rows) if(r.qualification_tier in tierCounts) tierCounts[r.qualification_tier]++
  const statusCounts: Record<string,number> = { new:0, contacted:0, replied:0, qualified:0, booked:0, sent_to_provider:0, closed_won:0, closed_lost:0 }
  for(const r of rows) if(r.status in statusCounts) statusCounts[r.status]++
  const industryCounts: Record<string,number> = {}
  for(const r of rows) industryCounts[r.industry]=(industryCounts[r.industry]??0)+1
  const byIndustry=Object.entries(industryCounts).sort((a,b)=>b[1]-a[1]).slice(0,8).map(([name,count])=>({name,count}))
  const commissionTotal=rows.filter(r=>r.status==='closed_won'&&r.commission_amount).reduce((sum,r)=>sum+(r.commission_amount??0),0)
  const total=rows.length
  const since=new Date();since.setDate(since.getDate()-29);since.setHours(0,0,0,0)
  const {data:dailyData}=await supabase.from('leads').select('created_at').gte('created_at',since.toISOString()).order('created_at',{ascending:true})
  const dayMap:Record<string,number>={};for(let i=0;i<30;i++){const d=new Date(since);d.setDate(d.getDate()+i);dayMap[d.toISOString().slice(0,10)]=0}
  for(const row of dailyData??[]){const day=(row.created_at as string).slice(0,10);if(day in dayMap)dayMap[day]++}
  const byDay=Object.entries(dayMap).map(([date,count])=>({date,count}))
  const now=new Date();const thisMonday=new Date(now);thisMonday.setDate(now.getDate()-((now.getDay()+6)%7));thisMonday.setHours(0,0,0,0)
  const lastMonday=new Date(thisMonday);lastMonday.setDate(lastMonday.getDate()-7)
  const {count:thisWeekCount}=await supabase.from('leads').select('id',{count:'exact',head:true}).gte('created_at',thisMonday.toISOString())
  const {count:lastWeekCount}=await supabase.from('leads').select('id',{count:'exact',head:true}).gte('created_at',lastMonday.toISOString()).lt('created_at',thisMonday.toISOString())
  const {data:recentEvents}=await supabase.from('lead_events').select('id,created_at,lead_id,event_type,metadata').order('created_at',{ascending:false}).limit(50)
  const leadIds=[...new Set((recentEvents??[]).map(e=>e.lead_id))]
  const {data:leadNames}=leadIds.length?await supabase.from('leads').select('id,company_name,full_name').in('id',leadIds):{data:[]}
  const nameMap:Record<string,{company_name:string;full_name:string}>={};for(const l of leadNames??[])nameMap[l.id]=l
  const activity=(recentEvents??[]).map(e=>({...e,company_name:nameMap[e.lead_id]?.company_name??'Unknown',full_name:nameMap[e.lead_id]?.full_name??''}))
  return NextResponse.json({total,thisWeek:thisWeekCount??0,lastWeek:lastWeekCount??0,commissionTotal,tierCounts,statusCounts,byIndustry,byDay,activity})
}
