import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.noahlaake.com'),
  title: {
    default: 'Noah Raphael Laake — BMX U23',
    template: '%s | Noah Raphael Laake',
  },
  description:
    'Official sponsor microsite for Noah Raphael Laake — U23 BMX athlete, Latvian National Team & Olympic Unit.',
  openGraph: {
    title: 'Noah Raphael Laake — BMX U23',
    description:
      'Sponsor microsite for Noah Raphael Laake — U23 BMX athlete, Latvian National Team & Olympic Unit.',
    url: 'https://www.noahlaake.com',
    siteName: 'Noah Raphael Laake',
    images: ['/og.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og.jpg'],
  },
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
