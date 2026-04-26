"use client"

import { QrCode } from "lucide-react"

export function Footer() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="border-t border-border bg-card/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                <QrCode className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xl font-semibold text-foreground">FlickQR</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              The fastest free QR code generator online. No signup, no watermark, fully private.
            </p>
            <p className="text-xs text-muted-foreground">
              Built with ❤️ in India
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection("generator")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  QR Generator
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("features")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Features
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("pro")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Pro Version
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("faq")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Use Cases */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Use Cases</h4>
            <ul className="space-y-3">
              {[
                { label: "URL QR Codes", id: "generator" },
                { label: "WiFi QR Codes", id: "generator" },
                { label: "Business Card QR", id: "generator" },
                { label: "WhatsApp QR Code", id: "generator" },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support + Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/918076720669?text=I%20need%20help%20with%20FlickQR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact via WhatsApp
                </a>
              </li>
              <li>
                <button onClick={() => scrollToSection("faq")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </button>
              </li>
              <li>
                <a href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} FlickQR. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            All QR generation is processed locally in your browser. Your data never leaves your device.
          </p>
        </div>
      </div>
    </footer>
  )
}
