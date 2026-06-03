import Link from 'next/link'
import { PROGRAMS } from '@/content/programs'
export default function FundingPrograms() {
  const active = PROGRAMS.filter(p => p.active)
  return (
    <div className="section-padding section-max">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
        <div className="max-w-xl">
          <p className="text-[0.7rem] font-body font-semibold text-brand-green tracking-[0.12em] uppercase mb-3">Available Programs</p>
          <h2 className="font-display text-display-xl text-cream-50">Ontario funding programs for modernization</h2>
        </div>
        <p className="text-sm text-brand-muted max-w-xs leading-relaxed shrink-0">Multiple provincial and federal programs are currently accepting applications.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {active.map((program, i) => (
          <Link key={program.slug} href={"/funding/" + program.slug}
            className="group relative flex flex-col bg-navy-700/70 border border-white/[0.08] rounded-2xl p-6 hover:border-brand-green/30 hover:bg-navy-700 transition-all duration-200">
            <div className="flex items-start justify-between gap-3 mb-5">
              <span className="text-[0.65rem] font-body font-semibold text-brand-muted/60 tracking-widest uppercase">{String(i+1).padStart(2,'0')}</span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-brand-amber/10 border border-brand-amber/20 text-[0.7rem] font-body font-semibold text-brand-amber shrink-0">{program.fundingRange}</span>
            </div>
            <h3 className="font-display text-display-md text-cream-100 mb-1 group-hover:text-white transition-colors">{program.shortName}</h3>
            <p className="text-[0.7rem] font-body text-brand-muted/70 mb-4 leading-relaxed">{program.name}</p>
            <p className="text-sm font-body text-cream-200/80 leading-relaxed mb-6 flex-1">{program.tagline}</p>
            <ul className="space-y-2 mb-6">
              {program.whoQualifies.slice(0,3).map(q => (
                <li key={q} className="flex items-start gap-2.5 text-xs font-body text-brand-muted">
                  <svg className="w-3.5 h-3.5 text-brand-green/70 mt-0.5 shrink-0" viewBox="0 0 14 14" fill="none"><path d="M2.5 7l2.5 2.5 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  {q}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-1.5 text-xs font-body font-medium text-brand-green group-hover:text-brand-amber transition-colors">View program details
              <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" viewBox="0 0 14 14" fill="none"><path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-8 text-center">
        <a href="#qualify" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 hover:border-brand-green/30 text-sm font-body text-brand-muted hover:text-cream-100 bg-white/[0.02] hover:bg-brand-green/[0.04] transition-all duration-200">
          Check which programs you qualify for
          <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none"><path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </a>
      </div>
    </div>
  )
}
