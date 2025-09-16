"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Download, CheckCircle, Info } from "lucide-react"

const features = [
  "Complete work history",
  "Detailed skill breakdown",
  "Education & certifications",
  "Contact information",
]

export function ResumeSection() {
  return (
    <section id="resume" className="py-20 bg-gradient-to-br from-[#0066CC] to-[#FF6600] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fillRule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fillOpacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white space-y-6">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/30 mb-6">
              <FileText className="h-10 w-10 text-white" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold font-inter">Download My CV</h2>

            <p className="text-xl text-white/90 leading-relaxed">
              Get a comprehensive overview of my professional experience, skills, and achievements. Available in English
              and Spanish.
            </p>

            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-300 flex-shrink-0" />
                  <span className="text-white/90">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Download Section */}
          <div className="flex flex-col items-center space-y-8">
            {/* CV Preview Mockup */}
            <div className="relative group perspective-1000">
              <Card className="w-48 h-64 bg-white shadow-2xl transform rotate-y-12 group-hover:rotate-y-0 transition-transform duration-500">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="h-8 bg-gradient-to-r from-[#0066CC] to-[#FF6600] rounded mb-4" />
                  <div className="space-y-2 flex-1">
                    <div className="h-3 bg-gray-200 rounded w-full" />
                    <div className="h-3 bg-gray-200 rounded w-3/4" />
                    <div className="h-3 bg-gray-200 rounded w-1/2" />
                    <div className="h-3 bg-gray-200 rounded w-full" />
                    <div className="h-3 bg-gray-200 rounded w-2/3" />
                    <div className="h-3 bg-gray-200 rounded w-1/2" />
                    <div className="h-3 bg-gray-200 rounded w-full" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Download Buttons */}
            <div className="space-y-4 w-full max-w-sm">
              <Button
                asChild
                size="lg"
                className="w-full bg-white text-[#FF6600] hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <a href="/static/CV/CV DANIELA ARGUELLO 2025  INGLÉS.pdf" download="CV_Daniela_Arguello_2025_EN.pdf">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV (English)
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full border-white text-white hover:bg-white hover:text-[#0066CC] shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <a href="/static/CV/CV DANIELA ARGUELLO 2025.pdf" download="CV_Daniela_Arguello_2025_ES.pdf">
                  <Download className="mr-2 h-4 w-4" />
                  Descargar CV (Español)
                </a>
              </Button>

              <div className="flex items-center justify-center space-x-2 text-white/80 text-sm">
                <Info className="h-4 w-4" />
                <span>Updated 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
