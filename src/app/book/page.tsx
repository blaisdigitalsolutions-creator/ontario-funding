import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BookingForm from './BookingForm'
import BookingWidget from './BookingWidget'

export const metadata: Metadata = {
  title: 'Book a Free Consultation — Ontario Business Funding',
  description: 'Schedule a free 20-minute call with our team.',
  alternates: { canonical: '/book' },
}

export default function BookPage() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDVLY_URL ?? ''
  const calUsername = process.env.NEXT_PUBLIC_CAL_USERNAME ?? ''
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'hello@ontariofunding.ca'
  const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE ?? ''
  const useEmbed = !!(calendlyUrl || calUsername)
  return (<><Header/><main className="min-h-screen pt-16 pb-24 px-4"><div className="max-w-2xl mx-auto"><div className="text-center mb-10 pt-8"><h1 className="font-display text-display-xl text-cream-50 mb-4">Book a 20-Minute Call</h1><p className="text-[0.9375rem] text-brand-muted leading-relaxed max-w-lg mx-auto">Tell us when you're available and we'll confirm a time within 1 business day.</p></div>{useEmbed?(<BookingWidget calendlyUrl={calendlyUrl} calUsername={calUsername} contactEmail={contactEmail} contactPhone={contactPhone}/>):(BookingForm&&<div className="bg-navy-800 border border-white/[0.07] rounded-2xl p-6 sm:p-8"><BookingForm/></div>)]}</div></main><Footer/></>)
}
