const ITEMS = [
  { text: 'Free to check eligibility' },
  { text: 'No obligation to proceed' },
  { text: 'Response within 1 business day' },
  { text: 'We do not share your information' },
]

function Check() {
  return (
    <svg className="w-4 h-4 text-brand-green shrink-0" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3.5 8.5l3 3 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function TrustBar() {
  return (
    <div className="bg-navy-900/80 border-b border-white/[0.07]">
      <div className="section-padding section-max py-4">
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:gap-x-8">
          {ITEMS.map((item, i) => (
            <li key={item.text} className="flex items-center gap-2">
              {i > 0 && <span className="w-px h-4 bg-white/10 mr-2 hidden sm:block" aria-hidden="true" />}
              <Check />
              <span className="text-[0.8125rem] font-body text-cream-200/70">{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
