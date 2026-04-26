"use client"

import { Button } from "@/components/ui/button"
import { Check, Sparkles, Zap, Image, Shapes, FileImage, Palette, Crown } from "lucide-react"
import { usePro } from "@/contexts/pro-context"

const proFeatures = [
  {
    icon: Palette,
    title: "Gradient QR Colors",
    description: "Create stunning gradients for your QR codes that stand out",
  },
  {
    icon: Image,
    title: "Logo Embedding",
    description: "Add your brand logo to the center of any QR code",
  },
  {
    icon: Shapes,
    title: "Designer Styles",
    description: "Choose from dots, rounded, classy, and more unique patterns",
  },
  {
    icon: FileImage,
    title: "High-Res Export",
    description: "Download in SVG, PDF, and ultra-high resolution PNG formats",
  },
]

const benefits = [
  "Unlimited high-quality exports",
  "Priority support",
  "Early access to new features",
  "Commercial usage rights",
]

export function ProSection() {
  const { isPro, openModal } = usePro()

  return (
    <section id="pro" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 ${
            isPro 
              ? "bg-green-500/10 border border-green-500/20" 
              : "bg-primary/10 border border-primary/20"
          }`}>
            <Crown className={`w-4 h-4 ${isPro ? "text-green-400" : "text-primary"}`} />
            <span className={`text-sm font-medium ${isPro ? "text-green-400" : "text-primary"}`}>
              {isPro ? "PRO Active" : "Unlock Premium"}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            {isPro ? (
              <>
                Welcome to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-primary">
                  FlickQR Pro
                </span>
              </>
            ) : (
              <>
                Upgrade to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
                  FlickQR Pro
                </span>
              </>
            )}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-pretty">
            {isPro 
              ? "You have access to all premium features. Enjoy creating stunning QR codes!"
              : "Take your QR codes to the next level with advanced customization and professional export options."
            }
          </p>
        </div>

        {/* Pro Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {proFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className="relative p-6 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent backdrop-blur-sm group hover:border-primary/40 transition-all duration-300"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-primary/10 to-transparent" />
              
              {/* Icon */}
              <div className="relative w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-shadow">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              
              {/* Content */}
              <h3 className="relative text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="relative text-sm text-muted-foreground">
                {feature.description}
              </p>

              {/* PRO Badge */}
              <div className="absolute top-4 right-4">
                {isPro ? (
                  <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded bg-green-500/20 text-green-400 flex items-center gap-1">
                    <Check className="w-3 h-3" />
                    ACTIVE
                  </span>
                ) : (
                  <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded bg-gradient-to-r from-primary to-primary/60 text-primary-foreground shadow-[0_0_15px_rgba(56,189,248,0.4)]">
                    PRO
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Card */}
        <div className="max-w-2xl mx-auto">
          <div className="relative p-8 sm:p-10 rounded-3xl border border-primary/30 bg-gradient-to-br from-card to-card/50 backdrop-blur-xl shadow-2xl overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Go Pro Today</h3>
              </div>

              {/* Benefits List */}
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              {isPro ? (
                <div className="w-full py-6 text-base rounded-lg bg-gradient-to-r from-green-500/20 to-green-500/10 border border-green-500/30 flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-green-400 font-semibold">PRO Features Unlocked</span>
                </div>
              ) : (
                <Button
                  onClick={openModal}
                  size="lg"
                  className="w-full py-6 text-base bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:from-primary/90 hover:to-primary/70 shadow-[0_0_30px_rgba(56,189,248,0.4)] transition-all hover:shadow-[0_0_40px_rgba(56,189,248,0.6)] group"
                >
                  <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Get Pro Now
                </Button>
              )}

              <p className="text-center text-sm text-muted-foreground mt-4">
                {isPro 
                  ? "Thank you for being a PRO member!"
                  : "Contact us on WhatsApp for pricing and details"
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
