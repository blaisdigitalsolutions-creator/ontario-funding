// /funding hub page
import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { PROGRAMS, INDUSTRIES } from '@/content/programs'

export const metadata: Metadata = {
  title: 'Ontario Modernization Funding Programs',
  description: 'Browse available government funding programs for Ontario businesses.',
  alternates: { canonical: '/funding' },
}

export default function FundingHubPage() {
  return (<><Header/><main className="min-h-screen pt-20"><div className="bg-navy-900 border-b border-white/[0.06]"><div className="section-padding section-max py-16"><h1 className="font-display text-display-xl text-cream-50 mb-4">Ontario modernization funding programs</h1></div></div><div className="section-padding section-max py-14 space-y-14"><section><h2 className="font-display text-display-md text-cream-100 mb-6">Funding programs</h2><div className="grid grid-cols-1 sm:grid-cols-2 gap-4">{PROGRAMS.filter(p=>p.active).map(p=>(<Link key={p.slug} href={`/funding/${p.slug}`} className="group p-5 bg-navy-700 border border-white/[0.08] rounded-card hover:border-brand-green/30 transition-all"><div className="flex items-start justify-between gap-3 mb-3"><h3 className="text-base font-body font-medium text-cream-100 group-hover:text-brand-green transition-colors">{p.shortName}</h3><span className="text-xs font-body text-brand-amber bg-brand-amber/10 border border-brand-amber/25 px-2.5 py-1 rounded-full shrink-0">{p.fundingRange}</span></div><p className="text-sm text-brand-muted leading-relaxed">{p.tagline}</p></Link>))}</div></section><section><h2 className="font-display text-display-md text-cream-100 mb-6">By industry</h2><div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">{INDUSTRIES.map(ind=>(<Link key={ind.slug} href={`/funding/${ind.slug}`} className="group flex items-center gap-3 p-4 bg-navy-700/60 border border-white/[0.07] rounded-card hover:border-brand-green/30 transition-all"><span className="text-xl" aria-hidden="true">{ind.icon}</span><span className="text-sm font-body text-cream-200 group-hover:text-brand-green transition-colors">{ind.label}</span></Link>))}</div></section></div></main><Footer/></>)
}
