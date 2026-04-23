"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Is FlickQR really free?",
    answer: "Yes — completely free for core features. Generate unlimited QR codes for URLs, text, WiFi, and business cards. Download as PNG with no watermark, no signup, and no time limit. We offer optional Pro features (gradient colors, logo embedding, SVG export) for power users.",
  },
  {
    question: "Do I need to create an account?",
    answer: "No account needed. Open the site, type your content, and download your QR code. We built FlickQR because we were tired of tools that force you to sign up just to get a simple QR code.",
  },
  {
    question: "Is my data safe and private?",
    answer: "Yes — everything happens in your browser. The content you put in your QR codes (WiFi passwords, contact details, URLs) is never sent to our servers. It stays entirely on your device. This is especially important for sensitive data like WiFi credentials.",
  },
  {
    question: "What types of QR codes can I create?",
    answer: "Free users can create: URL/link QR codes, plain text QR codes, WiFi QR codes (for automatic network connection), and vCard business card QR codes. Pro users get additional dot styles, gradient colors, logo embedding, and SVG/PDF downloads.",
  },
  {
    question: "How do I create a WiFi QR code?",
    answer: "Click the WiFi tab in the generator, enter your network name (SSID) and password, select your security type (WPA/WEP/None), and download. Anyone who scans it will connect to your WiFi automatically — no password typing needed.",
  },
  {
    question: "Can I add my logo to a QR code?",
    answer: "Logo embedding is a Pro feature. With FlickQR Pro, you can upload your brand logo and place it in the center of your QR code. Pro also unlocks gradient colors, designer dot styles, and high-resolution SVG exports.",
  },
  {
    question: "What's included in FlickQR Pro?",
    answer: "Pro includes: gradient QR colors, custom logo embedding, designer shape styles (dots, rounded, classy), high-resolution SVG export, custom filenames, adjustable QR size (up to 1000px), margin control, and priority support.",
  },
  {
    question: "Can I use FlickQR QR codes commercially?",
    answer: "Yes. QR codes you generate on FlickQR are yours to use for any purpose — personal or commercial. Print them on menus, packaging, business cards, signage, whatever you need.",
  },
  {
    question: "How do I make a WhatsApp QR code?",
    answer: "Select the URL mode, then enter: https://wa.me/91XXXXXXXXXX (replace with your WhatsApp number including country code). When scanned, the QR code will open a WhatsApp chat with you directly.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Everything you need to know about FlickQR.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-xl px-6 bg-card/50 backdrop-blur-sm data-[state=open]:border-primary/30 transition-colors"
            >
              <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Still have a question? We&apos;re happy to help.
          </p>
          <a
            href="https://wa.me/918076720669?text=I%20have%20a%20question%20about%20FlickQR"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            Chat with us on WhatsApp →
          </a>
        </div>
      </div>
    </section>
  )
}
