"use client"

import { useState, useEffect } from "react"
import { usePro } from "@/contexts/pro-context"
import { Crown, Plus, X, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"

const WALL_STORAGE_KEY = "flickqr_pro_wall"

const SEED_MEMBERS = [
  { name: "Rohan M.", tag: "Delhi" },
  { name: "Priya S.", tag: "Mumbai" },
  { name: "Dev K.", tag: "Bangalore" },
  { name: "Sneha R.", tag: "Pune" },
  { name: "Aditya V.", tag: "Hyderabad" },
  { name: "Ananya T.", tag: "Chennai" },
]

interface Member {
  name: string
  tag: string
  joined: string
}

export function ProWall() {
  const { isPro } = usePro()
  const [members, setMembers] = useState<Member[]>([])
  const [showForm, setShowForm] = useState(false)
  const [name, setName] = useState("")
  const [tag, setTag] = useState("")
  const [userAdded, setUserAdded] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(WALL_STORAGE_KEY)
    const userMembers: Member[] = stored ? JSON.parse(stored) : []
    const seeded: Member[] = SEED_MEMBERS.map((m, i) => ({
      ...m,
      joined: `Apr ${10 + i}, 2025`,
    }))
    setMembers([...seeded, ...userMembers])

    if (stored) {
      const parsed: Member[] = JSON.parse(stored)
      if (parsed.some(m => m.joined.includes("you"))) setUserAdded(true)
    }
  }, [])

  const handleAdd = () => {
    if (!name.trim()) {
      toast.error("Please enter your name")
      return
    }
    const newMember: Member = {
      name: name.trim(),
      tag: tag.trim() || "Pro Member",
      joined: new Date().toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }),
    }
    const stored = localStorage.getItem(WALL_STORAGE_KEY)
    const existing: Member[] = stored ? JSON.parse(stored) : []
    const updated = [...existing, newMember]
    localStorage.setItem(WALL_STORAGE_KEY, JSON.stringify(updated))

    const seeded: Member[] = SEED_MEMBERS.map((m, i) => ({ ...m, joined: `Apr ${10 + i}, 2025` }))
    setMembers([...seeded, ...updated])
    setUserAdded(true)
    setShowForm(false)
    setName("")
    setTag("")
    toast.success("You're on the wall! Welcome to FlickQR Pro 🎉")
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/10 to-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Crown className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Pro Members</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            The FlickQR Pro Wall
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            These are the people who believe in FlickQR. Pro members get gradient colors, logo embedding, SVG export, and a spot right here.
          </p>
        </div>

        {/* Members grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-10">
          {members.map((member, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-3 rounded-xl border border-border bg-card/50 hover:border-primary/30 transition-all"
            >
              <div className="w-9 h-9 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-sm font-bold text-primary flex-shrink-0">
                {member.name.charAt(0).toUpperCase()}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium text-foreground truncate">{member.name}</p>
                <p className="text-xs text-muted-foreground truncate">{member.tag}</p>
              </div>
            </div>
          ))}

          {/* Add yourself slot */}
          {isPro && !userAdded && (
            <button
              onClick={() => setShowForm(true)}
              className="flex items-center gap-3 p-3 rounded-xl border border-dashed border-primary/40 bg-primary/5 hover:bg-primary/10 hover:border-primary/60 transition-all group"
            >
              <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20">
                <Plus className="w-4 h-4 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium text-primary">Add yourself</p>
                <p className="text-xs text-muted-foreground">You're Pro!</p>
              </div>
            </button>
          )}
        </div>

        {/* Add name form */}
        {showForm && isPro && (
          <div className="max-w-sm mx-auto p-6 rounded-2xl border border-primary/30 bg-card shadow-xl mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                <h3 className="font-semibold text-foreground">Join the wall</h3>
              </div>
              <button onClick={() => setShowForm(false)} className="text-muted-foreground hover:text-foreground">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-3">
              <Input
                placeholder="Your name (e.g. Rohan M.)"
                value={name}
                onChange={e => setName(e.target.value)}
                className="bg-input border-border"
                maxLength={30}
              />
              <Input
                placeholder="Your city or role (e.g. Delhi, Designer)"
                value={tag}
                onChange={e => setTag(e.target.value)}
                className="bg-input border-border"
                maxLength={30}
              />
              <Button onClick={handleAdd} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <Crown className="w-4 h-4 mr-2" />
                Add me to the wall
              </Button>
            </div>
          </div>
        )}

        {/* CTA for non-pro */}
        {!isPro && (
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Get FlickQR Pro to join the wall and unlock all premium features.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
