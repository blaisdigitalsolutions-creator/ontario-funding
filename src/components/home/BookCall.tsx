export default function BookCall() {
  return (
    <div className="section-padding section-max">
      <div className="bg-navy-900 border border-white/[0.08] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div className="max-w-xl">
          <p className="text-xs uppercase tracking-widest text-brand-green font-body mb-3">Free Consultation</p>
          <h2 className="font-display text-display-lg text-cream-50 mb-3">Prefer to talk first?</h2>
          <p className="text-base text-brand-muted leading-relaxed">Book a free 20-minute call with our team. We'll review your situation and tell you exactly which programs you may qualify for — no commitment required.</p>
        </div>
        <div className="flex flex-col gap-3 shrink-0">
          <a href="/book" className="btn-primary px-8 py-4 text-base">Book a Free Call</a>
          <p className="text-xs text-brand-muted text-center">Confirmed within 1 business day</p>
        </div>
      </div>
    </div>
  )
}
