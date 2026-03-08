"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"
import { useLang } from "@/lib/language-context"
import { RevealOnScroll } from "@/components/animations/RevealOnScroll"

export function ContactSection() {
  const { t } = useLang()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string
    const emailSubject = encodeURIComponent(`Portfolio Contact: ${subject}`)
    const emailBody = encodeURIComponent(`Hello Daniela,\n\nMy name is ${name} and I'm reaching out regarding: ${subject}\n\nMessage:\n${message}\n\nBest regards,\n${name}\n\nContact Email: ${email}`)
    window.location.href = `mailto:darguello@gmail.com?subject=${emailSubject}&body=${emailBody}`
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      e.currentTarget.reset()
      setTimeout(() => setIsSubmitted(false), 3000)
    }, 1000)
  }

  const contactItems = [
    { icon: Mail, label: "Email", value: "darguello@gmail.com", href: "mailto:darguello@gmail.com" },
    { icon: Phone, label: "Phone", value: "+549 3515647873", href: "tel:+5493515647873" },
    { icon: MapPin, label: t.contact.location, value: "Córdoba, Argentina", href: null },
  ]

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <RevealOnScroll direction="up" blur className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-inter mb-4">{t.contact.title}</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#0066CC] to-[#FF6600] mx-auto mb-4" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.contact.subtitle}</p>
        </RevealOnScroll>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold font-inter mb-6">{t.contact.infoTitle}</h3>
              <div className="space-y-6">
                {contactItems.map((c, i) => (
                  <div key={i} className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#0066CC] to-[#FF6600] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <c.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{c.label}</p>
                      {c.href ? (
                        <a href={c.href} className="text-lg font-medium hover:text-[#0066CC] transition-colors">{c.value}</a>
                      ) : (
                        <p className="text-lg font-medium">{c.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Card className="bg-gradient-to-r from-[#0066CC]/5 to-[#FF6600]/5 border-l-4 border-l-[#0066CC]">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">{t.contact.cardTitle}</h4>
                <p className="text-muted-foreground text-sm">{t.contact.cardDesc}</p>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">{t.contact.fields.name}</label>
                    <Input id="name" name="name" type="text" required placeholder={t.contact.fields.namePlaceholder} className="transition-all duration-300 focus:ring-2 focus:ring-[#0066CC]" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">{t.contact.fields.email}</label>
                    <Input id="email" name="email" type="email" required placeholder={t.contact.fields.emailPlaceholder} className="transition-all duration-300 focus:ring-2 focus:ring-[#0066CC]" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">{t.contact.fields.subject}</label>
                  <Input id="subject" name="subject" type="text" required placeholder={t.contact.fields.subjectPlaceholder} className="transition-all duration-300 focus:ring-2 focus:ring-[#0066CC]" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">{t.contact.fields.message}</label>
                  <Textarea id="message" name="message" required rows={5} placeholder={t.contact.fields.messagePlaceholder} className="transition-all duration-300 focus:ring-2 focus:ring-[#0066CC] resize-none" />
                </div>
                <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-[#0066CC] to-[#FF6600] hover:from-[#0052a3] hover:to-[#e55a00] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 disabled:opacity-50">
                  {isSubmitting ? (
                    <><div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />{t.contact.sending}</>
                  ) : isSubmitted ? (
                    <><CheckCircle className="mr-2 h-4 w-4" />{t.contact.sent}</>
                  ) : (
                    <><Send className="mr-2 h-4 w-4" />{t.contact.sendBtn}</>
                  )}
                </Button>
                {isSubmitted && (
                  <div className="text-center text-sm text-green-600 bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                    {t.contact.successMsg}
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
