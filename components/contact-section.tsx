"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"
import { useTranslations } from 'next-intl'
import { ContactForm } from './contact-form'

export function ContactSection() {
  const t = useTranslations('contact')

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-inter mb-4">{t('title')}</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#0066CC] to-[#FF6600] mx-auto mb-4" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold font-inter mb-6">{t('info.title')}</h3>

              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    label: t('details.email'),
                    value: "arguellodanielaayelen@gmail.com",
                    href: "mailto:arguellodanielaayelen@gmail.com",
                  },
                  {
                    icon: Phone,
                    label: t('details.phone'),
                    value: "+549 3515647873",
                    href: "tel:+5493515647873",
                  },
                  {
                    icon: MapPin,
                    label: t('details.location'),
                    value: t('details.argentina'),
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
                <h4 className="font-semibold mb-2">{t('info.cta.title')}</h4>
                <p className="text-muted-foreground text-sm">
                  {t('info.cta.description')}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
