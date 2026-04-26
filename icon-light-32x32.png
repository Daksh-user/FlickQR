"use client"

import { Gift, Ban, Palette, Shield } from "lucide-react"

const features = [
  {
    icon: Gift,
    title: "100% Free",
    description: "No hidden costs, no premium walls for basic features. Generate unlimited QR codes without paying a dime.",
  },
  {
    icon: Ban,
    title: "No Watermark",
    description: "Download clean, professional QR codes without any branding or watermarks cluttering your designs.",
  },
  {
    icon: Palette,
    title: "Fully Customizable",
    description: "Choose your colors, styles, and formats. Make QR codes that match your brand perfectly.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "All processing happens in your browser. We never store or track your QR code content.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why Choose FlickQR?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Built with simplicity and privacy in mind. No compromises.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.1)]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              
              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
