"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"

export function ContactSection() {
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

    // Create email content
    const emailSubject = encodeURIComponent(`Portfolio Contact: ${subject}`)
    const emailBody = encodeURIComponent(
      `Hello Daniela,\n\n` +
        `My name is ${name} and I'm reaching out regarding: ${subject}\n\n` +
        `Message:\n${message}\n\n` +
        `Best regards,\n${name}\n\n` +
        `Contact Email: ${email}`,
    )

    // Open email client
    const mailtoLink = `mailto:arguellodanielaayelen@gmail.com?subject=${emailSubject}&body=${emailBody}`
    window.location.href = mailtoLink

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form
      e.currentTarget.reset()

      // Reset success state after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    }, 1000)
  }

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-inter mb-4">Get In Touch</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#0066CC] to-[#FF6600] mx-auto mb-4" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's discuss opportunities and collaborations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold font-inter mb-6">Contact Information</h3>

              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "arguellodanielaayelen@gmail.com",
                    href: "mailto:arguellodanielaayelen@gmail.com",
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "+549 3515647873",
                    href: "tel:+5493515647873",
                  },
                  {
                    icon: MapPin,
                    label: "Location",
                    value: "Córdoba, Argentina",
                    href: null,
                  },
                ].map((contact, index) => (
                  <div key={index} className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#0066CC] to-[#FF6600] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <contact.icon className="h-5 w-5 text-white" />
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground">{contact.label}</p>
                      {contact.href ? (
                        <a href={contact.href} className="text-lg font-medium hover:text-[#0066CC] transition-colors">
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-lg font-medium">{contact.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Info Card */}
            <Card className="bg-gradient-to-r from-[#0066CC]/5 to-[#FF6600]/5 border-l-4 border-l-[#0066CC]">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Let's Create Something Amazing Together</h4>
                <p className="text-muted-foreground text-sm">
                  Whether you need digital marketing strategy, content creation, or UX/UI design, I'm here to help bring
                  your vision to life. Let's discuss how we can work together to achieve your goals.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Enter your name"
                      className="transition-all duration-300 focus:ring-2 focus:ring-[#0066CC]"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="Enter your email"
                      className="transition-all duration-300 focus:ring-2 focus:ring-[#0066CC]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="What's this about?"
                    className="transition-all duration-300 focus:ring-2 focus:ring-[#0066CC]"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="transition-all duration-300 focus:ring-2 focus:ring-[#0066CC] resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#0066CC] to-[#FF6600] hover:from-[#0052a3] hover:to-[#e55a00] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                      Opening Email...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Email Opened!
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>

                {isSubmitted && (
                  <div className="text-center text-sm text-green-600 bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                    Email client opened! Thank you for reaching out.
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
