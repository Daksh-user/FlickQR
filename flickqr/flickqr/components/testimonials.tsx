"use client"

import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Marketing Manager",
    company: "TechFlow",
    content: "FlickQR has become our go-to tool for all marketing campaigns. The quality is incredible and it&apos;s completely free!",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "Restaurant Owner",
    company: "Bella Vista",
    content: "We use FlickQR for our digital menus. Customers love how easy it is to scan, and the customization options are fantastic.",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "Event Coordinator",
    company: "EventPro",
    content: "The WiFi QR code feature alone saved us hours of work at our events. Absolutely recommend FlickQR to everyone!",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Freelance Designer",
    company: "Self-employed",
    content: "Finally a QR generator that doesn&apos;t add ugly watermarks. The Pro features are worth every penny for professional work.",
    rating: 5,
  },
  {
    name: "Lisa Thompson",
    role: "Small Business Owner",
    company: "Craft & Co",
    content: "I was skeptical about a free tool being this good, but FlickQR exceeded all my expectations. Clean, fast, and reliable.",
    rating: 5,
  },
  {
    name: "James Park",
    role: "Product Manager",
    company: "StartupXYZ",
    content: "The business card QR feature helped us go paperless at conferences. Love how it runs locally for privacy.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Loved by Thousands
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Join over 10,000+ users who trust FlickQR for their QR code needs
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 group"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-6 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-secondary flex items-center justify-center text-sm font-semibold text-foreground">
                  {testimonial.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {[
            { value: "10K+", label: "Active Users" },
            { value: "500K+", label: "QR Codes Generated" },
            { value: "4.9", label: "Average Rating" },
            { value: "99.9%", label: "Uptime" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-primary mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
