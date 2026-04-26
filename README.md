"use client"

import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { QRGenerator } from "@/components/qr-generator"
import { Features } from "@/components/features"
import { ProSection } from "@/components/pro-section"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"
import { ProProvider } from "@/contexts/pro-context"
import { ProModal } from "@/components/pro-modal"
import { ProWall } from "@/components/pro-wall"

export default function Home() {
  return (
    <ProProvider>
      <main className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <QRGenerator />
        <Features />
        <ProSection />
        <Testimonials />
        <ProWall />
        <FAQ />
        <Footer />
        <ProModal />
      </main>
    </ProProvider>
  )
}
