import type { Metadata, Viewport } from 'next'
import { DM_Serif_Display, Jost } from 'next/font/google'
import './globals.css'

const dmSerifDisplay = DM_Serif_Display({ weight: ['400'], style: ['normal','italic'], subsets: ['latin'], variable: '--font-display', display: 'swap' })
const jost = Jost({ weight: ['300','400','500','600'], subsets: ['latin'], variable: '--font-body', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://ontariofunding.ca'),
  title: { default: 'Ontario Business Funding | Modernization & AI Grants', template: '%s | Ontario Business Funding' },
  description: 'Ontario businesses may qualify for government funding to modernize operations, implement AI, and improve efficiency. Check your eligibility for free.',
  keywords: ['Ontario AI funding','Ontario automation grants','digital modernization grants Ontario','OCI funding Ontario','manufacturing modernization Ontario','AI implementation funding Ontario','Ontario business grants 2025','CDAP Ontario'],
  openGraph: { type: 'website', locale: 'en_CA', siteName: 'Ontario Business Funding', title: 'Ontario Business Modernization Funding - Check Eligibility', description: 'We connect Ontario businesses with government modernization funding.', images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Ontario Business Funding' }] },
  twitter: { card: 'summary_large_image', title: 'Ontario Business Modernization Funding', description: 'Check if your Ontario business qualifies for AI, automation, and digital modernization funding.', images: ['/opengraph-image'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: '/' },
}

export const viewport: Viewport = { themeColor: '#0B1525', width: 'device-width', initialScale: 1, maximumScale: 5 }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA" className={`${dmSerifDisplay.variable} ${jost.variable}`}>
      <body className="bg-navy-800 text-cream-100 font-body antialiased">
        {children}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <><script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}/><script dangerouslySetInnerHTML={{__html:`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config','${process.env.NEXT_PUBLIC_GA_ID}',{page_path:window.location.pathname});`}}/></>)}
      </body>
    </html>
  )
}
