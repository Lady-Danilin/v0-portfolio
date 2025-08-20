"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Mic, Radio, Volume2 } from "lucide-react"
import { useTranslations } from 'next-intl'

export function BroadcasterSection() {
  const t = useTranslations('broadcaster')
  
  return (
    <section
      id="broadcaster"
      className="py-20 bg-gradient-to-br from-[#F8F9FA] to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-inter mb-4">{t('title')}</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#0066CC] to-[#FF6600] mx-auto mb-4" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold font-inter bg-gradient-to-r from-[#0066CC] to-[#FF6600] bg-clip-text text-transparent">
              {t('subtitle')}
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              {t('description')}
            </p>

            <Card className="bg-muted/50">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#0066CC] to-[#FF6600] rounded-full flex items-center justify-center">
                    <Volume2 className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="font-semibold">{t('demo')}</h4>
                </div>

                <audio controls className="w-full mb-4" preload="metadata">
                  <source src="/audios/demo2025.mp3" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>

                <p className="text-sm text-muted-foreground italic">
                  Further audio examples coming soon (e.g., advertising, narrative, voice acting styles).
                </p>
              </CardContent>
            </Card>

            {/* Voice Services */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: Mic, title: t('services.commercial.title'), desc: t('services.commercial.description') },
                { icon: Radio, title: t('services.corporate.title'), desc: t('services.corporate.description') },
                { icon: Volume2, title: t('services.podcast.title'), desc: t('services.podcast.description') },
              ].map((service, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#0066CC] to-[#FF6600] rounded-full flex items-center justify-center mx-auto mb-3">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold mb-2">{service.title}</h4>
                    <p className="text-sm text-muted-foreground">{service.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Gallery */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-center">Gallery</h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { src: "/static/Images/retrato-la-cueva-arg-379.jpg", caption: "Voice & Presence" },
                { src: "/static/Images/retrato-la-cueva-arg-383.jpg", caption: "Studio Session" },
              ].map((image, index) => (
                <div key={index} className="group">
                  <div className="relative overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.caption}
                      width={300}
                      height={400}
                      className="w-full h-80 object-cover object-[center_30%] grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    />
                  </div>
                  <p className="text-center text-sm text-muted-foreground mt-2 font-medium">{image.caption}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
