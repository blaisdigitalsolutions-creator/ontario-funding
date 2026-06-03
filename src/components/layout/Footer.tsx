import Link from 'next/link'

const FOOTER_LINKS = [
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Programs',     href: '/#programs'     },
  { label: 'Industries',   href: '/#industries'   },
  { label: 'Check Eligibility', href: '/#qualify' },
  { label: 'Book a Call',  href: '/book'          },
  { label: 'Contact',      href: '/contact'       },
  { label: 'Privacy Policy', href: '/privacy'     },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-900 border-t border-white/[0.06]">
      <div className="section-padding section-max py-12 md:py-16">

        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">

          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-brand-green flex items-center justify-center shrink-0">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 13V6l5-4 5 4v7H3z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M6 13V9h4v4" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="font-display text-lg text-cream-100">Ontario Funding</span>
            </div>
            <p className="text-sm text-brand-muted leading-relaxed">
              Connecting Ontario businesses with modernization funding and qualified implementation support.
            </p>
          </div>

          {/* Nav */}
          <nav aria-label="Footer navigation">
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-3">
              {FOOTER_LINKS.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-muted hover:text-cream-100 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-white/[0.06]" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-brand-muted">
          <p>© {year} Ontario Business Funding. All rights reserved.</p>
          <p>
            We do not guarantee funding approvals. Results depend on program availability and eligibility.
          </p>
        </div>
      </div>
    </footer>
  )
}
