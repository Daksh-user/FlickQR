import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from 'sonner'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://flickqr.netlify.app'),
  title: {
    default: 'FlickQR – Free QR Code Generator | No Signup, No Watermark',
    template: '%s | FlickQR',
  },
  description: 'Create stunning, customizable QR codes instantly — 100% free, no signup required, no watermark. Generate QR codes for URLs, WiFi, WhatsApp, business cards, and more.',
  keywords: [
    'free qr code generator',
    'qr code generator no watermark',
    'qr code generator no signup',
    'wifi qr code generator',
    'vcard qr code generator',
    'qr code maker free',
    'custom qr code',
    'qr code generator india',
    'free qr code maker online',
    'whatsapp qr code generator',
  ],
  authors: [{ name: 'FlickQR' }],
  creator: 'FlickQR',
  publisher: 'FlickQR',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://flickqr.netlify.app',
    siteName: 'FlickQR',
    title: 'FlickQR – Free QR Code Generator | No Signup, No Watermark',
    description: 'Create stunning, customizable QR codes instantly — 100% free, no signup required, no watermark.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'FlickQR – Free QR Code Generator' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FlickQR – Free QR Code Generator | No Signup, No Watermark',
    description: 'Create stunning, customizable QR codes instantly — 100% free, no signup required, no watermark.',
    images: ['/og-image.png'],
  },
  verification: {
    google: 'CyK1jpPDLjLlSWeoZ3fUloV4ghjnak43wwLyqfna1II',
  },
  alternates: {
    canonical: 'https://flickqr.netlify.app',
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      name: 'FlickQR',
      url: 'https://flickqr.netlify.app',
      description: 'Free QR code generator. No signup required. Unlimited. Fully customizable.',
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      featureList: ['URL QR codes', 'WiFi QR codes', 'Business card QR codes (vCard)', 'Text QR codes', 'Custom colors', 'No watermark', 'No signup required', 'PNG download'],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Is FlickQR really free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes! FlickQR is 100% free. Generate unlimited QR codes with no watermark and no signup.' } },
        { '@type': 'Question', name: 'Do I need to create an account?', acceptedAnswer: { '@type': 'Answer', text: 'No account needed. Simply visit the website and start creating QR codes immediately.' } },
        { '@type': 'Question', name: 'Is my data safe and private?', acceptedAnswer: { '@type': 'Answer', text: 'All QR code generation happens directly in your browser. We never store or track your content.' } },
        { '@type': 'Question', name: 'What types of QR codes can I create?', acceptedAnswer: { '@type': 'Answer', text: 'FlickQR supports URL, text, WiFi, and vCard (business card) QR codes.' } },
      ],
    },
  ],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Toaster theme="dark" position="top-center" toastOptions={{ style: { background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', color: 'hsl(var(--foreground))' } }} />
        <Analytics />
      </body>
    </html>
  )
}
