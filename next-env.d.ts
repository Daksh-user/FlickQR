"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Crown } from "lucide-react"
import { usePro } from "@/contexts/pro-context"

export function Hero() {
  const { isPro, openModal } = usePro()

  const scrollToGenerator = () => {
    document.getElementById("generator")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(56,189,248,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-primary font-medium">Free Forever • No Signup • No Watermark</span>
        </div>

        {/* Main Headline — specific and differentiated */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight text-balance">
          The Fastest Free{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
            QR Code Generator
          </span>{" "}
          Online
        </h1>

        {/* Subtext — specific value prop, not generic bullets */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 text-pretty">
          No account. No watermark. No limits. Generate QR codes for URLs, WiFi, WhatsApp, and business cards — all processed privately in your browser.
        </p>

        {/* Use-case chips for SEO + clarity */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {["URL / Links", "WiFi Passwords", "WhatsApp", "Business Cards", "Plain Text"].map((tag) => (
            <span key={tag} className="px-3 py-1 text-xs rounded-full bg-secondary/60 border border-border text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            onClick={scrollToGenerator}
            className="w-full sm:w-auto px-8 py-6 text-base bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_30px_rgba(56,189,248,0.4)] transition-all hover:shadow-[0_0_40px_rgba(56,189,248,0.6)] group"
          >
            Generate QR Code — It's Free
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          {isPro ? (
            <div className="flex items-center gap-2 px-8 py-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400">
              <Crown className="w-4 h-4" />
              <span className="font-medium">PRO Active</span>
            </div>
          ) : (
            <Button
              size="lg"
              variant="outline"
              onClick={openModal}
              className="w-full sm:w-auto px-8 py-6 text-base border-border hover:bg-secondary/50"
            >
              Unlock Pro Features
            </Button>
          )}
        </div>

        {/* Social proof — honest framing */}
        <div className="mt-16 flex flex-col items-center gap-3">
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <svg key={i} className="w-4 h-4 fill-primary text-primary" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            Loved by <span className="text-foreground font-semibold">thousands of users</span> — restaurants, freelancers, and businesses worldwide
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  )
}
