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
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
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
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-primary font-medium">Free Forever • No Signup Required</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight text-balance">
          Create Stunning{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
            QR Codes
          </span>{" "}
          Instantly
        </h1>

        {/* Subtext */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty">
          Free forever. No signup. Unlimited. Fully customizable.
          <br className="hidden sm:block" />
          Create beautiful QR codes for URLs, text, WiFi, and more.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            onClick={scrollToGenerator}
            className="w-full sm:w-auto px-8 py-6 text-base bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_30px_rgba(56,189,248,0.4)] transition-all hover:shadow-[0_0_40px_rgba(56,189,248,0.6)] group"
          >
            Generate QR Code
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
              Get Pro
            </Button>
          )}
        </div>

        {/* Trust Indicator */}
        <div className="mt-16 flex flex-col items-center gap-4">
          <div className="flex -space-x-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-muted border-2 border-background flex items-center justify-center text-xs font-medium text-muted-foreground"
              >
                {String.fromCharCode(64 + i)}
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            Trusted by <span className="text-foreground font-semibold">10,000+</span> users worldwide
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
