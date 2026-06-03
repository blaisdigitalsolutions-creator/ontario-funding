import Link from 'next/link'
import { INDUSTRIES } from '@/content/programs'
export default function Industries() {
  return (
    <div className="section-padding section-max">
      <div className="mb-12 max-w-2xl">
        <p className="text-xs uppercase tracking-widest text-brand-green font-body mb-3">Industries We Serve</p>
        <h2 className="font-display text-display-xl text-cream-50 mb-4">Built for Ontario's industrial and operational businesses</h2>
        <p className="text-base text-brand-muted leading-relaxed">Government modernization programs prioritize businesses in these sectors.</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {INDUSTRIES.map(industry => (
          <Link key={industry.slug} href={`/funding/${industry.slug}`}
            className="group flex flex-col gap-3 p-4 md:p-5 bg-navy-700 border border-white/[0.07] rounded-card hover:border-brand-green/30 hover:bg-navy-700/70 transition-all duration-200">
            <span className="text-2xl" role="img" aria-hidden="true">{industry.icon}</span>
            <div>
              <p className="text-sm font-body font-medium text-cream-100 mb-1 group-hover:text-brand-green transition-colors">{industry.label}</p>
              <p className="text-xs font-body text-brand-muted leading-relaxed hidden sm:block">{industry.description}</p>
            </div>
          </Link>
        ))}
      </div>
      <p className="mt-8 text-sm text-brand-muted text-center">Don't see your industry?{' '}<a href="#qualify" className="text-brand-green hover:text-brand-amber transition-colors underline underline-offset-2">Submit your details</a>{' '}and we'll assess your eligibility directly.</p>
    </div>
  )
}
