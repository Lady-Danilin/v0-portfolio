"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, ThumbsUp } from "lucide-react"
import { useTranslations } from 'next-intl'

function AnimatedCounter({
  number,
  suffix = "",
  duration = 2000,
}: { number: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    const startTime = Date.now()
    const endTime = startTime + duration

    const updateCount = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / duration, 1)
      const currentCount = Math.floor(progress * number)

      setCount(currentCount)

      if (now < endTime) {
        requestAnimationFrame(updateCount)
      }
    }

    updateCount()
  }, [isVisible, number, duration])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export function AboutSection() {
  const t = useTranslations('about')
  
  const stats = [
    {
      icon: Award,
      number: 10,
      suffix: "+",
      label: t('stats.experience'),
    },
    {
      icon: Users,
      number: 20,
      suffix: "+",
      label: t('stats.clients'),
    },
    {
      icon: ThumbsUp,
      number: 100,
      suffix: "%",
      label: t('stats.satisfaction'),
    },
  ]
  
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-inter mb-4">{t('title')}</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#0066CC] to-[#FF6600] mx-auto mb-4" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t('subtitle')}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Text Content */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold font-inter bg-gradient-to-r from-[#0066CC] to-[#FF6600] bg-clip-text text-transparent">
              {t('subtitle')}
            </h3>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>{t('description1')}</p>
              <p>{t('description2')}</p>
              <p>{t('description3')}</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center space-y-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#0066CC] to-[#FF6600] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <stat.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-3xl font-bold font-inter text-foreground">
                        <AnimatedCounter number={stat.number} suffix={stat.suffix} />
                      </div>
                      <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="w-80 h-96 rounded-2xl overflow-hidden shadow-xl border-4 border-white dark:border-gray-800 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/static/Images/retrato-la-cueva-arg-389.jpg"
                  alt="Daniela Ayelén Argüello - About Photo"
                  width={320}
                  height={400}
                  className="w-full h-full object-cover object-[center_25%] grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-[#FF6600] to-[#0066CC] rounded-full opacity-80" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-[#0066CC] to-[#FF6600] rounded-full opacity-80" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
