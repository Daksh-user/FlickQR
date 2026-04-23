"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

interface ProContextType {
  isPro: boolean
  setIsPro: (value: boolean) => void
  isModalOpen: boolean
  openModal: () => void
  closeModal: () => void
}

const ProContext = createContext<ProContextType | undefined>(undefined)

const PRO_STORAGE_KEY = "flickqr_pro"
const PRO_SECRET_KEY = "Hx972"

export function ProProvider({ children }: { children: ReactNode }) {
  const [isPro, setIsProState] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)

  // Load PRO status from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(PRO_STORAGE_KEY)
    if (stored === "true") {
      setIsProState(true)
    }
    setIsInitialized(true)
  }, [])

  const setIsPro = (value: boolean) => {
    setIsProState(value)
    localStorage.setItem(PRO_STORAGE_KEY, value.toString())
  }

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  // Prevent hydration mismatch
  if (!isInitialized) {
    return null
  }

  return (
    <ProContext.Provider value={{ isPro, setIsPro, isModalOpen, openModal, closeModal }}>
      {children}
    </ProContext.Provider>
  )
}

export function usePro() {
  const context = useContext(ProContext)
  if (context === undefined) {
    throw new Error("usePro must be used within a ProProvider")
  }
  return context
}

export { PRO_SECRET_KEY }
