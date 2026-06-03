// GET /api/admin/leads - Paginated lead list with filters
// PATCH /api/admin/leads - Update status, notes, or commission

import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase/server'

export async function GET(req: NextRequest) {
  const supabase = createServerClient()
  const { searchParams } = new URL(req.url)
  const page = Math.max(1, parseInt(searchParams.get('page') ?? '1'))
  const tier = searchParams.get('tier') ?? ''
  const status = searchParams.get('status') ?? ''
  const industry = searchParams.get('industry') ?? ''
  const search = (searchParams.get('search') ?? '').trim()
  const pageSize = 25
  const from = (page - 1) * pageSize
  const to = from + pageSize - 1
  let query = supabase.from('leads')
    .select('id,created_at,full_name,email,phone,company_name,industry,revenue_range,employee_count,timeline,interest_areas,qualification_score,qualification_tier,status,notes,utm_source,utm_campaign,outreach_source,commission_amount',{count:'exact'})
    .order('created_at',{ascending:false}).range(from,to)
  if(tier) query=query.eq('qualification_tier',tier)
  if(status) query=query.eq('status',status)
  if(industry) query=query.eq('industry',industry)
  if(search) query=query.or(`company_name.ilike.%${search}%,email.ilike.%${search}%,full_name.ilike.%${search}%`)
  const{data,error,count}=await query
  if(error) return NextResponse.json({error:error.message},{status:500})
  return NextResponse.json({leads:data,total:count??0,page,pageSize})
}
export async function PATCH(req: NextRequest) {
  const supabase = createServerClient()
  const body = await req.json() as {id:string;status?:string;notes?:string;commission_amount?:number;outreach_source?:string}
  if(!body.id) return NextResponse.json({error:'Lead ID required'},{status:400})
  const updates:Record<string,unknown>={}
  if(body.status!==undefined) updates.status=body.status
  if(body.notes!==undefined) updates.notes=body.notes
  if(body.commission_amount!==undefined) updates.commission_amount=body.commission_amount
  if(body.outreach_source!==undefined) updates.outreach_source=body.outreach_source
  const{error}=await supabase.from('leads').update(updates).eq('id',body.id)
  if(error) return NextResponse.json({error:error.message},{status:500})
  const eventType=body.status!==undefined?'status_changed':body.notes!==undefined?'note_added':'score_updated'
  await supabase.from('lead_events').insert({lead_id:body.id,event_type:eventType,metadata:updates})
  return NextResponse.json({success:true})
}
