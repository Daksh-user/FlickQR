"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, QrCode, Crown } from "lucide-react"
import { usePro } from "@/contexts/pro-context"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { isPro, openModal } = usePro()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                <QrCode className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xl font-semibold text-foreground">FlickQR</span>
            </div>
            {isPro && (
              <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded bg-gradient-to-r from-primary to-primary/60 text-primary-foreground shadow-[0_0_15px_rgba(56,189,248,0.4)] flex items-center gap-1">
                <Crown className="w-3 h-3" />
                PRO
              </span>
            )}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("generator")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Generator
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("pro")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Pro
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              FAQ
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              onClick={() => scrollToSection("generator")}
              className="text-sm"
            >
              Get Started
            </Button>
            {!isPro && (
              <Button
                onClick={openModal}
                className="text-sm bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(56,189,248,0.3)]"
              >
                Get Pro
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("generator")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Generator
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("pro")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Pro
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                FAQ
              </button>
              <div className="flex gap-3 pt-2">
                <Button
                  variant="outline"
                  onClick={() => scrollToSection("generator")}
                  className="flex-1 text-sm"
                >
                  Get Started
                </Button>
                {!isPro && (
                  <Button
                    onClick={() => {
                      setIsOpen(false)
                      openModal()
                    }}
                    className="flex-1 text-sm bg-primary text-primary-foreground"
                  >
                    Get Pro
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
