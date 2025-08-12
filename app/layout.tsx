import type { Metadata } from 'next'
import { IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex-mono',
})

export const metadata: Metadata = {
  title: 'the agency - high-end italian fabrics',
  description: 'the agency verkoopt hoogwaardige italiaanse stoffen voor heren- en damesmode. ejr beheer b.v.',
  keywords: 'italian fabrics, stoffen, herenmode, damesmode, luxury textiles, the agency',
  authors: [{ name: 'the agency' }],
  creator: 'the agency',
  publisher: 'ejr beheer b.v.',
  metadataBase: new URL('https://www.the-agency.nl'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'the agency - high-end italian fabrics',
    description: 'hoogwaardige italiaanse stoffen voor heren- en damesmode',
    url: 'https://www.the-agency.nl',
    siteName: 'the agency',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'the agency logo',
      },
    ],
    locale: 'nl_NL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'the agency - high-end italian fabrics',
    description: 'hoogwaardige italiaanse stoffen voor heren- en damesmode',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/android-chrome-512x512.png',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" suppressHydrationWarning={true}>
      <body className={`${ibmPlexMono.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}