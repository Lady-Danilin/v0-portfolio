"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown, Mail, Github } from "lucide-react"
import { useLang } from "@/lib/language-context"

// WebGL dot grid — SSR disabled (requires canvas/WebGL)
const DotGridCanvas = dynamic(
  () => import("@/components/animations/DotGridCanvas").then((m) => m.DotGridCanvas),
  { ssr: false }
)

// Primary blue (#0066CC) normalized for WebGL
const ACCENT_COLOR: [number, number, number] = [0.0, 0.4, 0.8]

export function HeroSection() {
  const { t } = useLang()
  const [currentSubtitle, setCurrentSubtitle] = useState(0)
  const [subtitleVisible, setSubtitleVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setSubtitleVisible(false)
      setTimeout(() => {
        setCurrentSubtitle((prev) => (prev + 1) % t.hero.subtitles.length)
        setSubtitleVisible(true)
      }, 300)
    }, 3200)

    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* WebGL dot grid — behind everything */}
      <DotGridCanvas
        accentColor={ACCENT_COLOR}
        dotSize={1.5}
        spacing={28}
        pulseSpeed={0.5}
        className="absolute inset-0 z-0 pointer-events-none"
      />

      {/* Background Gradient — above WebGL, behind content */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-br from-[#F8F9FA]/90 via-white/80 to-[#F8F9FA]/90 dark:from-gray-900/85 dark:via-gray-800/80 dark:to-gray-900/85" />

      {/* Subtle animated orbs */}
      <div className="absolute inset-0 z-[2] overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-[#0066CC]/6 to-transparent rounded-full animate-float" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-[#FF6600]/6 to-transparent rounded-full animate-float" style={{ animationDelay: "3s" }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20 lg:pt-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 text-center lg:text-left">

            {/* Available badge */}
            <div className="flex justify-center lg:justify-start hero-animate-1">
              <span className="available-badge">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Disponible para trabajar
              </span>
            </div>

            <div className="space-y-4 hero-animate-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-inter leading-tight">
                {t.hero.greeting}{" "}
                <span className="bg-gradient-to-r from-[#0066CC] via-[#0066CC] to-[#FF6600] bg-clip-text text-transparent">
                  Daniela Ayelén Argüello
                </span>
              </h1>

              <div className="h-10 flex items-center justify-center lg:justify-start overflow-hidden">
                <p
                  className="text-xl md:text-2xl font-medium text-[#0066CC]"
                  style={{
                    opacity: subtitleVisible ? 1 : 0,
                    transform: subtitleVisible ? "translateY(0px)" : "translateY(12px)",
                    transition: "opacity 350ms ease-out, transform 350ms cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                >
                  {t.hero.subtitles[currentSubtitle]}
                </p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed hero-animate-2">
              {t.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start hero-animate-3">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#FF6600] to-[#FF8533] hover:from-[#e55c00] hover:to-[#FF6600] text-white shadow-lg hover:shadow-[0_10px_28px_rgba(255,102,0,0.55),0_0_0_4px_rgba(255,102,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:brightness-105"
                onClick={() => scrollToSection("#contact")}
              >
                <Mail className="mr-2 h-4 w-4" />
                {t.hero.ctaContact}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-[#0066CC] text-[#0066CC] hover:bg-[#0066CC] hover:text-white hover:shadow-[0_10px_28px_rgba(0,102,204,0.5),0_0_0_4px_rgba(0,102,204,0.1)] hover:brightness-105 transition-all duration-300 hover:-translate-y-1"
                onClick={() => scrollToSection("#projects")}
              >
                <Github className="mr-2 h-4 w-4" />
                {t.hero.ctaWork}
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end hero-image-animate">
            <div className="relative group">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_20px_60px_rgba(0,102,204,0.25)]">
                <Image
                  src="/static/Images/retrato-la-cueva-arg-374.jpg"
                  alt="Daniela Ayelén Argüello - Professional Photo"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover object-center transition-all duration-500"
                  priority
                />
              </div>

              {/* Floating Elements */}
              <div className="hidden lg:block absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-[#0066CC] to-[#FF6600] rounded-full animate-float" />
              <div className="hidden lg:block absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-[#FF6600] to-[#0066CC] rounded-full animate-float" style={{ animationDelay: "2s" }} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection("#about")}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group flex flex-col items-center gap-1 opacity-75 hover:opacity-100 transition-opacity duration-200"
      >
        <span className="text-[10px] font-medium text-[#0066CC]/70 tracking-widest uppercase">Scroll</span>
        <ChevronDown className="h-8 w-8 text-[#0066CC] group-hover:text-[#FF6600] transition-colors drop-shadow-sm" />
      </button>
    </section>
  )
}
