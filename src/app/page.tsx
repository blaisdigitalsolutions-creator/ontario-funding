import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/home/Hero'
import TrustBar from '@/components/home/TrustBar'
import FundingPrograms from '@/components/home/FundingPrograms'
import Industries from '@/components/home/Industries'
import HowItWorks from '@/components/home/HowItWorks'
import Benefits from '@/components/home/Benefits'
import QualifyForm from '@/components/home/QualifyForm'
import FAQ from '@/components/home/FAQ'
import BookCall from '@/components/home/BookCall'
import SEOBlock from '@/components/home/SEOBlock'
import { FAQ_ITEMS } from '@/content/programs'

export const metadata: Metadata = {
  title: 'Ontario Business Modernization Funding — Check Your Eligibility',
  description: 'Ontario businesses may qualify for government funding to modernize operations, implement AI, and improve efficiency. Free eligibility check — no obligation.',
  alternates: { canonical: '/' },
}

const localBusinessSchema = {
  '@context': 'https://schema.org', '@type': 'LocalBusiness',
  name: 'Ontario Business Funding',
  description: 'We connect Ontario businesses with government modernization funding for AI, automation, and digital transformation.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ontariofunding.ca',
  areaServed: { '@type': 'State', name: 'Ontario' },
  serviceType: 'Business Funding Qualification', priceRange: 'Free to qualify',
}

export default function HomePage() {
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQ_ITEMS.map(item => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main id="main">
        <Hero />
        <TrustBar />
        <section id="programs" className="py-section section-divider"><FundingPrograms /></section>
        <section id="industries" className="py-section section-divider"><Industries /></section>
        <section id="how-it-works" className="py-section section-divider"><HowItWorks /></section>
        <section id="benefits" className="py-section section-divider"><Benefits /></section>
        <section id="qualify" className="py-section-lg section-divider"><QualifyForm /></section>
        <section id="faq" className="py-section section-divider"><FAQ /></section>
        <section id="book" className="py-section section-divider"><BookCall /></section>
        <section className="py-section section-divider"><SEOBlock /></section>
      </main>
      <Footer />
    </>
  )
}
