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
    answer: "Yes! FlickQR is 100% free for basic features. You can generate unlimited QR codes, customize colors, and download PNG files without paying anything. We offer a Pro version with advanced features like gradient colors, logo embedding, and high-resolution exports for those who need them.",
  },
  {
    question: "Do I need to create an account?",
    answer: "No account needed! Simply visit our website and start creating QR codes immediately. We believe in frictionless experiences—no signup forms, no email verification, just instant QR generation.",
  },
  {
    question: "Is my data safe and private?",
    answer: "Absolutely. All QR code generation happens directly in your browser. We never store, track, or have access to the content you encode in your QR codes. Your data stays on your device.",
  },
  {
    question: "What types of QR codes can I create?",
    answer: "FlickQR supports multiple QR code types including URLs/links, plain text, WiFi credentials (automatic connection), and vCard business cards. Pro users get access to additional formats and customization options.",
  },
  {
    question: "Can I use the QR codes for commercial purposes?",
    answer: "Yes! Free users can use generated QR codes for personal and commercial projects. Pro users get additional commercial usage rights and priority support for business needs.",
  },
  {
    question: "What&apos;s included in FlickQR Pro?",
    answer: "Pro includes gradient QR colors, custom logo embedding, designer shape styles (dots, rounded, classy), high-resolution exports (SVG, PDF), priority support, and early access to new features. Contact us on WhatsApp for pricing details.",
  },
  {
    question: "How do I upgrade to Pro?",
    answer: "Simply click the 'Get Pro' button anywhere on the site, and you'll be connected with us on WhatsApp. We'll help you get set up with Pro features quickly and easily.",
  },
  {
    question: "Can I add my logo to a QR code?",
    answer: "Logo embedding is a Pro feature. With FlickQR Pro, you can upload your brand logo and place it in the center of your QR code while maintaining scannability.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Got questions? We&apos;ve got answers.
          </p>
        </div>

        {/* Accordion */}
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

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Still have questions? We&apos;re here to help.
          </p>
          <a
            href="https://wa.me/918076720669?text=I%20have%20a%20question%20about%20FlickQR"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            Contact us on WhatsApp
            <span className="text-lg">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
