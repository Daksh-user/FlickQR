"use client"

import { Star, ExternalLink } from "lucide-react"

const testimonials = [
  {
    name: "Rohan Mehta",
    role: "Restaurant Owner",
    company: "Spice Route, Delhi",
    content: "We put FlickQR codes on all our tables for the menu. Customers scan instantly, no app needed. Saved us thousands on printing.",
    rating: 5,
    initials: "RM",
  },
  {
    name: "Priya Sharma",
    role: "Freelance Designer",
    company: "Mumbai",
    content: "Finally a free QR tool that doesn't add ugly watermarks. I use it for every client project. The customization is genuinely impressive.",
    rating: 5,
    initials: "PS",
  },
  {
    name: "Aditya Verma",
    role: "Event Manager",
    company: "EventsIndia",
    content: "The WiFi QR code feature is a lifesaver at our events. Guests connect instantly instead of asking us for the password 50 times.",
    rating: 5,
    initials: "AV",
  },
  {
    name: "Sneha Kapoor",
    role: "Small Business Owner",
    company: "Kapoor Crafts, Jaipur",
    content: "I was spending money on another QR tool. Switched to FlickQR — same quality, totally free. My customers love the clean codes.",
    rating: 5,
    initials: "SK",
  },
  {
    name: "Dev Patel",
    role: "Marketing Manager",
    company: "TechStartup, Bangalore",
    content: "We generate QR codes for all our offline campaigns. It's fast, no login needed, and the privacy-first approach is exactly what we want.",
    rating: 5,
    initials: "DP",
  },
  {
    name: "Ananya Singh",
    role: "Yoga Instructor",
    company: "Self-employed, Pune",
    content: "Made a business card QR code in under a minute. Now I just share my card digitally — no more printing costs!",
    rating: 5,
    initials: "AS",
  },
]

export function Testimonials() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What Our Users Say
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Real feedback from real users — restaurants, freelancers, and businesses across India and beyond.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-foreground mb-6 leading-relaxed text-sm">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-sm font-semibold text-primary">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role} · {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats — honest, achievable numbers */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-8">
          {[
            { value: "100%", label: "Free, always" },
            { value: "0", label: "Signups required" },
            { value: "4 types", label: "QR formats supported" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-primary mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
