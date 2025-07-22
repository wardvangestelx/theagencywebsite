import type { Metadata } from 'next'
import { IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex-mono',
})

export const metadata: Metadata = {
  title: 'The Agency - High-end Italian Fabrics',
  description: 'The Agency verkoopt hoogwaardige Italiaanse stoffen voor heren- en damesmode.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className={`${ibmPlexMono.variable} font-mono`}>
        {children}
      </body>
    </html>
  )
}