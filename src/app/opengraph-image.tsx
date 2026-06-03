import { ImageResponse } from 'next/og'
export const runtime = 'edge'
export const alt = 'Ontario Business Funding - Check Your Eligibility'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export default function OgImage() {
  return new ImageResponse((
    <div style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'flex-start',padding:'72px 80px',background:'#0B1224',fontFamily:'sans-serif',position:'relative',overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse 80% 60% at 110% 110%, rgba(14,164,114,0.18) 0%, transparent 65%)'}}/>
      <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:40}}>
        <div style={{width:48,height:48,borderRadius:12,background:'#0EA472',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 20V9L12 3l8 6v11H4z" stroke="white" strokeWidth="2" strokeLinejoin="round"/><path d="M9 20V13h6v7" stroke="white" strokeWidth="2" strokeLinejoin="round"/></svg>
        </div>
        <span style={{fontSize:22,fontWeight:600,color:'#E8E3D5',letterSpacing:'-0.01em'}}>Ontario Business Funding</span>
      </div>
      <div style={{fontSize:64,fontWeight:700,lineHeight:1.1,color:'#F5F0E8',letterSpacing:'-0.03em',maxWidth:820,marginBottom:24}}>Government Funding for Ontario Businesses</div>
      <div style={{fontSize:26,color:'#7A8196',lineHeight:1.4,maxWidth:680,marginBottom:52}}>AI · Automation · Digital Transformation · Modernization Grants</div>
      <div style={{display:'flex',alignItems:'center',gap:12,background:'rgba(14,164,114,0.15)',border:'1px solid rgba(14,164,114,0.35)',borderRadius:100,padding:'14px 28px'}}>
        <div style={{width:10,height:10,borderRadius:999,background:'#0EA472'}}/>
        <span style={{fontSize:20,color:'#0EA472',fontWeight:600}}>Free eligibility check - no commitment</span>
      </div>
      <div style={{position:'absolute',bottom:72,right:80,display:'flex',flexDirection:'column',alignItems:'flex-end',gap:4}}>
        <span style={{fontSize:48,fontWeight:700,color:'#F5F0E8',letterSpacing:'-0.03em'}}>Up to $165K</span>
        <span style={{fontSize:18,color:'#7A8196'}}>in available grants per business</span>
      </div>
    </div>
  ), { ...size })
}
