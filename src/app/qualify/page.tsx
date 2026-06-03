import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import QualifyForm from '@/components/home/QualifyForm'

export const metadata: Metadata = {
  title: 'Check Your Eligibility — Ontario Business Funding',
  description: 'Find out if your Ontario business qualifies for government modernization funding. Free 5-minute eligibility check — no obligation.',
  robots: { index: true, follow: true },
  alternates: { canonical: '/qualify' },
}

export default function QualifyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 pb-16">
        <div className="section-padding section-max pt-12 pb-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-green/10 border border-brand-green/25 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
              <span className="text-xs font-body text-brand-green tracking-wide uppercase">Free Eligibility Check</span>
            </div>
            <h1 className="font-display text-display-xl text-cream-50 mb-4">Does your business qualify for Ontario modernization funding?</h1>
            <p className="text-base text-brand-muted leading-relaxed">Answer a few questions about your business. Our team reviews every submission personally and responds within 1 business day.</p>
          </div>
        </div>
        <QualifyForm />
      </main>
      <Footer />
    </>
  )
}
