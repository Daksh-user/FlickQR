import type { Metadata } from 'next'
import Link from 'next/link'
import { QrCode } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'FlickQR Privacy Policy — how we handle your data when you use our free QR code generator.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border px-6 py-4">
        <Link href="/" className="flex items-center gap-2 w-fit">
          <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
            <QrCode className="w-5 h-5 text-primary" />
          </div>
          <span className="text-xl font-semibold text-foreground">FlickQR</span>
        </Link>
      </nav>
      <main className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-foreground mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground mb-10 text-sm">Last updated: April 2025</p>

        <div className="space-y-8 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">The short version</h2>
            <p>FlickQR generates QR codes entirely in your browser. The content you encode — URLs, WiFi passwords, contact details — is never sent to our servers, stored, or accessed by us. We can&apos;t read your QR codes because they never leave your device.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">What data we collect</h2>
            <p className="mb-3">We collect minimal, anonymous usage data via Vercel Analytics:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Page views and session counts</li>
              <li>Country-level location (not city or IP)</li>
              <li>Browser type and device category</li>
              <li>Referral source (how you found us)</li>
            </ul>
            <p className="mt-3">This data is aggregated and anonymous. We cannot identify individual users from it.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">What we do NOT collect</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>The content of your QR codes</li>
              <li>Your name, email, or any personal information</li>
              <li>WiFi passwords, URLs, or contact details you encode</li>
              <li>Cookies for tracking or advertising</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">Cookies</h2>
            <p>We do not use tracking or advertising cookies. We use only essential technical cookies required to serve the web application.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">Third-party services</h2>
            <p>We use Vercel Analytics for privacy-friendly, cookieless analytics. Vercel&apos;s privacy policy applies to this data. We do not use Google Analytics, Facebook Pixel, or any advertising trackers.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">Contact</h2>
            <p>Questions about privacy? Reach us on WhatsApp: <a href="https://wa.me/918076720669" className="text-primary hover:underline">+91 80767 20669</a></p>
          </section>
        </div>

        <div className="mt-12">
          <Link href="/" className="text-primary hover:underline text-sm">← Back to FlickQR</Link>
        </div>
      </main>
    </div>
  )
}
