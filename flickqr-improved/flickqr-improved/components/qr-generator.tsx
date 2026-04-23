"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import {
  Link2,
  Type,
  Wifi,
  User,
  Download,
  RefreshCw,
  Lock,
  Sparkles,
  Image as ImageIcon,
  Shapes,
  FileImage,
  Check,
  Upload,
  X,
  Crown,
  Maximize2,
  Shield,
  Square,
} from "lucide-react"
import { usePro } from "@/contexts/pro-context"
import { toast } from "sonner"

type QRMode = "url" | "text" | "wifi" | "vcard"
type DotStyle = "square" | "dots" | "rounded" | "extra-rounded" | "classy" | "classy-rounded"
type CornerStyle = "square" | "dot" | "extra-rounded"
type ErrorCorrectionLevel = "L" | "M" | "Q" | "H"

const modes: { id: QRMode; label: string; icon: React.ElementType; placeholder: string }[] = [
  { id: "url", label: "URL", icon: Link2, placeholder: "https://example.com" },
  { id: "text", label: "Text", icon: Type, placeholder: "Enter your text here..." },
  { id: "wifi", label: "WiFi", icon: Wifi, placeholder: "Network name" },
  { id: "vcard", label: "Business Card", icon: User, placeholder: "John Doe" },
]

const dotStyles: { id: DotStyle; label: string }[] = [
  { id: "square", label: "Square" },
  { id: "dots", label: "Dots" },
  { id: "rounded", label: "Rounded" },
  { id: "extra-rounded", label: "Pill" },
  { id: "classy", label: "Classy" },
  { id: "classy-rounded", label: "Elegant" },
]

const errorLevels: { id: ErrorCorrectionLevel; label: string; desc: string }[] = [
  { id: "L", label: "Low", desc: "7%" },
  { id: "M", label: "Medium", desc: "15%" },
  { id: "Q", label: "Quartile", desc: "25%" },
  { id: "H", label: "High", desc: "30%" },
]

export function QRGenerator() {
  const { isPro, openModal } = usePro()
  const qrRef = useRef<HTMLDivElement>(null)
  const qrCodeInstance = useRef<any>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Basic settings (FREE)
  const [mode, setMode] = useState<QRMode>("url")
  const [input, setInput] = useState("")
  const [wifiPassword, setWifiPassword] = useState("")
  const [wifiSecurity, setWifiSecurity] = useState("WPA")
  const [vcardEmail, setVcardEmail] = useState("")
  const [vcardPhone, setVcardPhone] = useState("")
  const [fgColor, setFgColor] = useState("#38bdf8")
  const [bgColor, setBgColor] = useState("#0a0a1a")

  // PRO settings
  const [useGradient, setUseGradient] = useState(false)
  const [gradientColor1, setGradientColor1] = useState("#38bdf8")
  const [gradientColor2, setGradientColor2] = useState("#a855f7")
  const [logoImage, setLogoImage] = useState<string | null>(null)
  const [dotStyle, setDotStyle] = useState<DotStyle>("square")
  const [cornerStyle, setCornerStyle] = useState<CornerStyle>("square")
  const [qrSize, setQrSize] = useState(300)
  const [errorLevel, setErrorLevel] = useState<ErrorCorrectionLevel>("H")
  const [margin, setMargin] = useState(10)
  const [customFilename, setCustomFilename] = useState("flickqr-code")

  const generateQRData = useCallback((): string => {
    switch (mode) {
      case "url":
        return input || "https://flickqr.app"
      case "text":
        return input || "Hello from FlickQR!"
      case "wifi":
        return `WIFI:T:${wifiSecurity};S:${input};P:${wifiPassword};;`
      case "vcard":
        return `BEGIN:VCARD\nVERSION:3.0\nFN:${input}\nEMAIL:${vcardEmail}\nTEL:${vcardPhone}\nEND:VCARD`
      default:
        return input
    }
  }, [mode, input, wifiPassword, wifiSecurity, vcardEmail, vcardPhone])

  const generateQR = useCallback(async () => {
    if (!qrRef.current) return

    // Dynamically import qr-code-styling (client-side only)
    const QRCodeStyling = (await import("qr-code-styling")).default

    // Clear previous QR code
    if (qrRef.current.firstChild) {
      qrRef.current.innerHTML = ""
    }

    const data = generateQRData()

    // Build options based on PRO status
    const options: any = {
      width: isPro ? qrSize : 300,
      height: isPro ? qrSize : 300,
      data,
      margin: isPro ? margin : 10,
      qrOptions: {
        errorCorrectionLevel: isPro ? errorLevel : "H",
      },
      dotsOptions: {
        type: isPro ? dotStyle : "square",
        ...(isPro && useGradient
          ? {
              gradient: {
                type: "linear",
                rotation: 45,
                colorStops: [
                  { offset: 0, color: gradientColor1 },
                  { offset: 1, color: gradientColor2 },
                ],
              },
            }
          : { color: fgColor }),
      },
      cornersSquareOptions: {
        type: isPro ? cornerStyle : "square",
        ...(isPro && useGradient
          ? {
              gradient: {
                type: "linear",
                rotation: 45,
                colorStops: [
                  { offset: 0, color: gradientColor1 },
                  { offset: 1, color: gradientColor2 },
                ],
              },
            }
          : { color: fgColor }),
      },
      cornersDotOptions: {
        type: isPro ? (cornerStyle === "extra-rounded" ? "dot" : cornerStyle) : "square",
        ...(isPro && useGradient
          ? {
              gradient: {
                type: "linear",
                rotation: 45,
                colorStops: [
                  { offset: 0, color: gradientColor1 },
                  { offset: 1, color: gradientColor2 },
                ],
              },
            }
          : { color: fgColor }),
      },
      backgroundOptions: {
        color: bgColor,
      },
      imageOptions: {
        crossOrigin: "anonymous",
        margin: 5,
        imageSize: 0.4,
        hideBackgroundDots: true,
      },
    }

    // Add logo if PRO and logo exists
    if (isPro && logoImage) {
      options.image = logoImage
    }

    qrCodeInstance.current = new QRCodeStyling(options)
    qrCodeInstance.current.append(qrRef.current)
  }, [
    generateQRData,
    isPro,
    qrSize,
    margin,
    errorLevel,
    dotStyle,
    cornerStyle,
    useGradient,
    gradientColor1,
    gradientColor2,
    fgColor,
    bgColor,
    logoImage,
  ])

  useEffect(() => {
    generateQR()
  }, [generateQR])

  // Show toast when PRO is unlocked
  useEffect(() => {
    if (isPro) {
      // Regenerate QR with PRO features enabled
      generateQR()
    }
  }, [isPro])

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setLogoImage(event.target?.result as string)
        toast.success("Logo uploaded successfully!")
      }
      reader.readAsDataURL(file)
    }
  }

  const removeLogo = () => {
    setLogoImage(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
    toast.success("Logo removed")
  }

  const downloadQR = async (format: "png" | "svg" | "pdf" = "png") => {
    if (!qrCodeInstance.current) return

    const filename = isPro && customFilename ? customFilename : "flickqr-code"

    if (format === "png") {
      qrCodeInstance.current.download({ name: filename, extension: "png" })
      toast.success("PNG downloaded!")
    } else if (format === "svg" && isPro) {
      qrCodeInstance.current.download({ name: filename, extension: "svg" })
      toast.success("SVG downloaded!")
    } else if (format === "pdf" && isPro) {
      // For PDF, we'll download as SVG (qr-code-styling doesn't support PDF directly)
      // Users can convert SVG to PDF easily
      qrCodeInstance.current.download({ name: filename, extension: "svg" })
      toast.success("SVG downloaded! Convert to PDF using any online tool.")
    }
  }

  const currentMode = modes.find((m) => m.id === mode)!

  const ProBadge = ({ small = false }: { small?: boolean }) => (
    <span
      className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded bg-gradient-to-r from-primary to-primary/60 text-primary-foreground shadow-[0_0_10px_rgba(56,189,248,0.3)] ${small ? "text-[8px] px-1.5" : ""}`}
    >
      PRO
    </span>
  )

  const FreeBadge = () => (
    <span className="px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider rounded bg-muted text-muted-foreground">
      FREE
    </span>
  )

  const LockedOverlay = ({ onClick }: { onClick: () => void }) => (
    <div
      onClick={onClick}
      className="absolute inset-0 backdrop-blur-[3px] bg-background/40 flex items-center justify-center cursor-pointer z-10 rounded-lg transition-all hover:bg-background/50"
    >
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 border border-primary/30">
        <Lock className="w-3 h-3 text-primary" />
        <span className="text-xs font-medium text-primary">Unlock PRO</span>
      </div>
    </div>
  )

  return (
    <section id="generator" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            QR Code Generator
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Create customizable QR codes instantly. Choose your mode, customize colors, and download.
          </p>
        </div>

        {/* Generator Card */}
        <div className="rounded-2xl border border-border bg-card/50 backdrop-blur-xl shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-[1fr,400px] divide-y lg:divide-y-0 lg:divide-x divide-border">
            {/* Controls Panel */}
            <div className="p-6 sm:p-8 space-y-6 overflow-y-auto max-h-[800px]">
              {/* Mode Selector */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Label className="text-sm font-medium text-foreground">Mode</Label>
                  <FreeBadge />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {modes.map((m) => (
                    <button
                      key={m.id}
                      onClick={() => setMode(m.id)}
                      className={`flex flex-col items-center gap-2 p-3 rounded-lg border transition-all ${
                        mode === m.id
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border bg-secondary/30 text-muted-foreground hover:border-primary/50 hover:bg-secondary/50"
                      }`}
                    >
                      <m.icon className="w-5 h-5" />
                      <span className="text-xs font-medium">{m.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Input Field */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Label className="text-sm font-medium text-foreground">
                    {mode === "wifi" ? "Network Name" : mode === "vcard" ? "Full Name" : "Content"}
                  </Label>
                  <FreeBadge />
                </div>
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={currentMode.placeholder}
                  className="bg-input border-border focus:border-primary focus:ring-primary"
                />
              </div>

              {/* WiFi Additional Fields */}
              {mode === "wifi" && (
                <div className="space-y-3">
                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-foreground">Password</Label>
                    <Input
                      type="password"
                      value={wifiPassword}
                      onChange={(e) => setWifiPassword(e.target.value)}
                      placeholder="WiFi password"
                      className="bg-input border-border focus:border-primary focus:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-foreground">Security</Label>
                    <div className="flex gap-2">
                      {["WPA", "WEP", "nopass"].map((sec) => (
                        <button
                          key={sec}
                          onClick={() => setWifiSecurity(sec)}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                            wifiSecurity === sec
                              ? "bg-primary text-primary-foreground"
                              : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                          }`}
                        >
                          {sec === "nopass" ? "None" : sec}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* vCard Additional Fields */}
              {mode === "vcard" && (
                <div className="space-y-3">
                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-foreground">Email</Label>
                    <Input
                      type="email"
                      value={vcardEmail}
                      onChange={(e) => setVcardEmail(e.target.value)}
                      placeholder="email@example.com"
                      className="bg-input border-border focus:border-primary focus:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-foreground">Phone</Label>
                    <Input
                      type="tel"
                      value={vcardPhone}
                      onChange={(e) => setVcardPhone(e.target.value)}
                      placeholder="+1 234 567 8900"
                      className="bg-input border-border focus:border-primary focus:ring-primary"
                    />
                  </div>
                </div>
              )}

              {/* Color Pickers (FREE) */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Label className="text-sm font-medium text-foreground">Colors</Label>
                  <FreeBadge />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-xs text-muted-foreground">Foreground</Label>
                    <div className="flex items-center gap-3">
                      <input
                        type="color"
                        value={fgColor}
                        onChange={(e) => setFgColor(e.target.value)}
                        disabled={isPro && useGradient}
                        className="w-10 h-10 rounded-lg border-0 cursor-pointer bg-transparent disabled:opacity-50"
                      />
                      <Input
                        value={fgColor}
                        onChange={(e) => setFgColor(e.target.value)}
                        disabled={isPro && useGradient}
                        className="flex-1 bg-input border-border text-sm uppercase disabled:opacity-50"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs text-muted-foreground">Background</Label>
                    <div className="flex items-center gap-3">
                      <input
                        type="color"
                        value={bgColor}
                        onChange={(e) => setBgColor(e.target.value)}
                        className="w-10 h-10 rounded-lg border-0 cursor-pointer bg-transparent"
                      />
                      <Input
                        value={bgColor}
                        onChange={(e) => setBgColor(e.target.value)}
                        className="flex-1 bg-input border-border text-sm uppercase"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-border" />

              {/* PRO FEATURES SECTION */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Crown className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">PRO Features</h3>
                  {isPro ? (
                    <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded bg-green-500/20 text-green-400 flex items-center gap-1">
                      <Check className="w-3 h-3" />
                      ACTIVE
                    </span>
                  ) : (
                    <ProBadge />
                  )}
                </div>

                {/* Gradient Colors (PRO) */}
                <div className="relative space-y-3 p-4 rounded-lg border border-border bg-secondary/10">
                  {!isPro && <LockedOverlay onClick={openModal} />}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-primary" />
                      <Label className="text-sm font-medium text-foreground">Gradient Colors</Label>
                    </div>
                    <button
                      onClick={() => isPro && setUseGradient(!useGradient)}
                      className={`relative w-11 h-6 rounded-full transition-colors ${
                        useGradient && isPro ? "bg-primary" : "bg-secondary"
                      }`}
                    >
                      <span
                        className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform ${
                          useGradient && isPro ? "translate-x-5" : ""
                        }`}
                      />
                    </button>
                  </div>
                  {isPro && useGradient && (
                    <div className="grid grid-cols-2 gap-4 mt-3">
                      <div className="space-y-2">
                        <Label className="text-xs text-muted-foreground">Color 1</Label>
                        <div className="flex items-center gap-2">
                          <input
                            type="color"
                            value={gradientColor1}
                            onChange={(e) => setGradientColor1(e.target.value)}
                            className="w-8 h-8 rounded border-0 cursor-pointer"
                          />
                          <Input
                            value={gradientColor1}
                            onChange={(e) => setGradientColor1(e.target.value)}
                            className="flex-1 bg-input border-border text-xs uppercase"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-xs text-muted-foreground">Color 2</Label>
                        <div className="flex items-center gap-2">
                          <input
                            type="color"
                            value={gradientColor2}
                            onChange={(e) => setGradientColor2(e.target.value)}
                            className="w-8 h-8 rounded border-0 cursor-pointer"
                          />
                          <Input
                            value={gradientColor2}
                            onChange={(e) => setGradientColor2(e.target.value)}
                            className="flex-1 bg-input border-border text-xs uppercase"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Logo Upload (PRO) */}
                <div className="relative space-y-3 p-4 rounded-lg border border-border bg-secondary/10">
                  {!isPro && <LockedOverlay onClick={openModal} />}
                  <div className="flex items-center gap-2">
                    <ImageIcon className="w-4 h-4 text-primary" />
                    <Label className="text-sm font-medium text-foreground">Logo Upload</Label>
                  </div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleLogoUpload}
                    className="hidden"
                    disabled={!isPro}
                  />
                  {logoImage && isPro ? (
                    <div className="flex items-center gap-3 p-2 rounded-lg bg-primary/10 border border-primary/30">
                      <img src={logoImage} alt="Logo" className="w-10 h-10 rounded object-cover" />
                      <span className="text-sm text-foreground flex-1 truncate">Logo uploaded</span>
                      <button
                        onClick={removeLogo}
                        className="p-1 rounded hover:bg-destructive/20 text-destructive"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <Button
                      variant="outline"
                      onClick={() => isPro && fileInputRef.current?.click()}
                      className="w-full border-dashed border-2"
                      disabled={!isPro}
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      Upload Logo Image
                    </Button>
                  )}
                </div>

                {/* Dot Styles (PRO) */}
                <div className="relative space-y-3 p-4 rounded-lg border border-border bg-secondary/10">
                  {!isPro && <LockedOverlay onClick={openModal} />}
                  <div className="flex items-center gap-2">
                    <Shapes className="w-4 h-4 text-primary" />
                    <Label className="text-sm font-medium text-foreground">Dot Style</Label>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {dotStyles.map((style) => (
                      <button
                        key={style.id}
                        onClick={() => isPro && setDotStyle(style.id)}
                        className={`p-2 rounded-lg text-xs font-medium transition-all ${
                          dotStyle === style.id && isPro
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                        }`}
                        disabled={!isPro}
                      >
                        {style.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* QR Size (PRO) */}
                <div className="relative space-y-3 p-4 rounded-lg border border-border bg-secondary/10">
                  {!isPro && <LockedOverlay onClick={openModal} />}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Maximize2 className="w-4 h-4 text-primary" />
                      <Label className="text-sm font-medium text-foreground">QR Size</Label>
                    </div>
                    <span className="text-sm text-muted-foreground">{qrSize}px</span>
                  </div>
                  <Slider
                    value={[qrSize]}
                    onValueChange={(v) => isPro && setQrSize(v[0])}
                    min={200}
                    max={1000}
                    step={50}
                    disabled={!isPro}
                    className="w-full"
                  />
                </div>

                {/* Error Correction (PRO) */}
                <div className="relative space-y-3 p-4 rounded-lg border border-border bg-secondary/10">
                  {!isPro && <LockedOverlay onClick={openModal} />}
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-primary" />
                    <Label className="text-sm font-medium text-foreground">Error Correction</Label>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {errorLevels.map((level) => (
                      <button
                        key={level.id}
                        onClick={() => isPro && setErrorLevel(level.id)}
                        className={`p-2 rounded-lg text-center transition-all ${
                          errorLevel === level.id && isPro
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                        }`}
                        disabled={!isPro}
                      >
                        <span className="text-sm font-bold">{level.id}</span>
                        <span className="block text-[10px] opacity-70">{level.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Margin Control (PRO) */}
                <div className="relative space-y-3 p-4 rounded-lg border border-border bg-secondary/10">
                  {!isPro && <LockedOverlay onClick={openModal} />}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Square className="w-4 h-4 text-primary" />
                      <Label className="text-sm font-medium text-foreground">Margin</Label>
                    </div>
                    <span className="text-sm text-muted-foreground">{margin}px</span>
                  </div>
                  <Slider
                    value={[margin]}
                    onValueChange={(v) => isPro && setMargin(v[0])}
                    min={0}
                    max={50}
                    step={5}
                    disabled={!isPro}
                    className="w-full"
                  />
                </div>

                {/* Custom Filename (PRO) */}
                <div className="relative space-y-3 p-4 rounded-lg border border-border bg-secondary/10">
                  {!isPro && <LockedOverlay onClick={openModal} />}
                  <div className="flex items-center gap-2">
                    <FileImage className="w-4 h-4 text-primary" />
                    <Label className="text-sm font-medium text-foreground">Custom Filename</Label>
                  </div>
                  <Input
                    value={customFilename}
                    onChange={(e) => isPro && setCustomFilename(e.target.value)}
                    placeholder="my-qr-code"
                    disabled={!isPro}
                    className="bg-input border-border"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4 border-t border-border">
                <div className="flex gap-3">
                  <Button
                    onClick={generateQR}
                    className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Generate
                  </Button>
                  <Button
                    onClick={() => downloadQR("png")}
                    variant="outline"
                    className="flex-1 border-border hover:bg-secondary/50"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    PNG
                    <FreeBadge />
                  </Button>
                </div>

                {/* PRO Download Options */}
                <div className="grid grid-cols-2 gap-3">
                  {isPro ? (
                    <>
                      <Button
                        onClick={() => downloadQR("svg")}
                        variant="outline"
                        className="border-green-500/30 text-green-400 hover:bg-green-500/10"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        SVG
                        <span className="ml-2 px-1.5 py-0.5 text-[8px] font-bold rounded bg-green-500/20 flex items-center gap-0.5">
                          <Check className="w-2 h-2" />
                          PRO
                        </span>
                      </Button>
                      <Button
                        onClick={() => downloadQR("pdf")}
                        variant="outline"
                        className="border-green-500/30 text-green-400 hover:bg-green-500/10"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        PDF
                        <span className="ml-2 px-1.5 py-0.5 text-[8px] font-bold rounded bg-green-500/20 flex items-center gap-0.5">
                          <Check className="w-2 h-2" />
                          PRO
                        </span>
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        onClick={openModal}
                        variant="outline"
                        className="border-primary/30 text-primary hover:bg-primary/10"
                      >
                        <Lock className="w-4 h-4 mr-2" />
                        SVG
                        <ProBadge small />
                      </Button>
                      <Button
                        onClick={openModal}
                        variant="outline"
                        className="border-primary/30 text-primary hover:bg-primary/10"
                      >
                        <Lock className="w-4 h-4 mr-2" />
                        PDF
                        <ProBadge small />
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Preview Panel */}
            <div className="p-6 sm:p-8 flex flex-col items-center justify-center bg-gradient-to-br from-secondary/30 to-background min-h-[500px]">
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 blur-3xl opacity-30 bg-primary rounded-full scale-75" />

                {/* QR Code Container */}
                <div className="relative p-6 rounded-2xl bg-card border border-border shadow-2xl">
                  <div
                    ref={qrRef}
                    className="flex items-center justify-center"
                    style={{ minWidth: 300, minHeight: 300 }}
                  />
                </div>
              </div>

              <p className="mt-6 text-sm text-muted-foreground text-center max-w-xs">
                Scan with your phone camera or QR scanner app
              </p>

              {isPro && (
                <div className="mt-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/30">
                  <Crown className="w-4 h-4 text-green-400" />
                  <span className="text-sm font-medium text-green-400">PRO Features Active</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
