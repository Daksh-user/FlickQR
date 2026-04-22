"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, Sparkles, MessageCircle, Check, AlertCircle } from "lucide-react"
import { usePro, PRO_SECRET_KEY } from "@/contexts/pro-context"
import { toast } from "sonner"

export function ProModal() {
  const { isPro, setIsPro, isModalOpen, closeModal } = usePro()
  const [key, setKey] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  // Reset state when modal opens
  useEffect(() => {
    if (isModalOpen) {
      setKey("")
      setError("")
      setSuccess(false)
      setIsAnimating(true)
    }
  }, [isModalOpen])

  const handleUnlock = () => {
    if (key === PRO_SECRET_KEY) {
      setError("")
      setSuccess(true)
      setIsPro(true)
      
      // Show success toast
      toast.success("PRO Unlocked! All premium features are now available.", {
        duration: 4000,
        icon: "🎉",
      })
      
      // Close modal after success animation
      setTimeout(() => {
        closeModal()
        setSuccess(false)
      }, 1500)
    } else {
      setError("Invalid key")
      setSuccess(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleUnlock()
    }
  }

  if (!isModalOpen) return null

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal()
      }}
    >
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-background/80 backdrop-blur-sm transition-opacity duration-300 ${
          isAnimating ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Modal */}
      <div 
        className={`relative w-full max-w-md rounded-2xl border border-border bg-card p-6 shadow-2xl transition-all duration-300 ${
          isAnimating ? "opacity-100 scale-100" : "opacity-0 scale-95"
        } ${success ? "border-green-500/50 shadow-[0_0_40px_rgba(34,197,94,0.3)]" : ""}`}
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 p-1 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Success State */}
        {success ? (
          <div className="flex flex-col items-center py-8">
            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4 animate-pulse">
              <Check className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">PRO Unlocked!</h3>
            <p className="text-muted-foreground text-center">
              Enjoy all premium features
            </p>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Unlock FlickQR Pro</h3>
                <p className="text-sm text-muted-foreground">Enter your PRO key to unlock all features</p>
              </div>
            </div>

            {/* Input */}
            <div className="space-y-2 mb-4">
              <Input
                type="text"
                value={key}
                onChange={(e) => {
                  setKey(e.target.value)
                  setError("")
                }}
                onKeyDown={handleKeyDown}
                placeholder="Enter your PRO key"
                className={`bg-input border-border focus:border-primary focus:ring-primary ${
                  error ? "border-red-500/50 focus:border-red-500 focus:ring-red-500" : ""
                }`}
              />
              {error && (
                <div className="flex items-center gap-2 text-sm text-red-400">
                  <AlertCircle className="w-4 h-4" />
                  {error}
                </div>
              )}
            </div>

            {/* Unlock Button */}
            <Button
              onClick={handleUnlock}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(56,189,248,0.3)] mb-4"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Unlock
            </Button>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">Don&apos;t have a key?</span>
              </div>
            </div>

            {/* WhatsApp Button */}
            <Button
              asChild
              variant="outline"
              className="w-full border-green-500/30 text-green-400 hover:bg-green-500/10 hover:border-green-500/50"
            >
              <a
                href="https://wa.me/918076720669?text=I%20want%20PRO"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Get Pro on WhatsApp
              </a>
            </Button>
          </>
        )}
      </div>
    </div>
  )
}
