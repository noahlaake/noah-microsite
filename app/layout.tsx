import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Noah Raphael Laake — BMX U23',
  description: 'Official sponsor microsite for Noah Raphael Laake — U23 BMX athlete, Latvian National Team & Olympic Unit.',
  openGraph: {
    title: 'Noah Raphael Laake — BMX U23',
    description: 'Sponsor microsite for Noah Raphael Laake.',
    images: ['/og.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og.jpg'],
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
