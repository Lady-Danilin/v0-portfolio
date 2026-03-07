"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown, Mail, Github } from "lucide-react"

const subtitles = [
  "Digital Communication Strategist",
  "Social Media Expert",
  "Content Creator",
  "Digital Marketing Specialist",
  "Communication Professional",
]

export function HeroSection() {
  const [currentSubtitle, setCurrentSubtitle] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSubtitle((prev) => (prev + 1) % subtitles.length)
    }, 3000)

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
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F8F9FA] via-white to-[#F8F9FA] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-[#0066CC]/5 to-transparent rounded-full animate-pulse" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-[#FF6600]/5 to-transparent rounded-full animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="space-y-4 hero-animate-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-inter leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-[#0066CC] via-[#0066CC] to-[#FF6600] bg-clip-text text-transparent">
                  Daniela Ayelén Argüello
                </span>
              </h1>

              <div className="h-8 flex items-center justify-center lg:justify-start">
                <p className="text-xl md:text-2xl font-medium text-[#0066CC] transition-opacity duration-500">
                  {subtitles[currentSubtitle]}
                </p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed hero-animate-2">
              Passionate about digital communication, social media strategy, and content creation. I specialize in
              building digital communities, developing comprehensive marketing strategies, and creating engaging content
              that drives results across multiple platforms.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start hero-animate-3">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#FF6600] to-[#FF8533] hover:from-[#e55c00] hover:to-[#FF6600] text-white shadow-lg hover:shadow-[0_6px_25px_rgba(255,102,0,0.55),0_0_0_4px_rgba(255,102,0,0.12)] transition-all duration-300 hover:-translate-y-1"
                onClick={() => scrollToSection("#contact")}
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-[#0066CC] text-[#0066CC] hover:bg-[#0066CC] hover:text-white hover:shadow-[0_6px_25px_rgba(0,102,204,0.5),0_0_0_4px_rgba(0,102,204,0.1)] transition-all duration-300 hover:-translate-y-1"
                onClick={() => scrollToSection("#projects")}
              >
                <Github className="mr-2 h-4 w-4" />
                View My Work
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
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-[#0066CC] to-[#FF6600] rounded-full animate-bounce delay-300" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-[#FF6600] to-[#0066CC] rounded-full animate-bounce delay-700" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection("#about")}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group"
      >
        <ChevronDown className="h-6 w-6 text-[#0066CC] group-hover:text-[#FF6600] transition-colors" />
      </button>
    </section>
  )
}
