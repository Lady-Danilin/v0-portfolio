"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Zap, Palette } from "lucide-react"
import { useLang } from "@/lib/language-context"

const principleIcons = [Users, Target, Zap, Palette]

export function UXUISection() {
  const { t } = useLang()

  return (
    <section id="ux-ui-designer" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-inter mb-4">{t.uxui.title}</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#0066CC] to-[#FF6600] mx-auto mb-4" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.uxui.subtitle}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold font-inter bg-gradient-to-r from-[#0066CC] to-[#FF6600] bg-clip-text text-transparent mb-6">
              {t.uxui.heading}
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">{t.uxui.description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {t.uxui.principles.map((principle, index) => {
              const Icon = principleIcons[index]
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#0066CC] to-[#FF6600] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-lg font-semibold font-inter">{principle.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{principle.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <Card className="mt-12 bg-gradient-to-r from-[#0066CC]/5 to-[#FF6600]/5 border-l-4 border-l-[#0066CC]">
            <CardContent className="p-8">
              <h4 className="text-xl font-bold font-inter mb-4 text-center">{t.uxui.process.title}</h4>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                {t.uxui.process.steps.map((phase, index) => (
                  <div key={index} className="space-y-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#0066CC] to-[#FF6600] rounded-full flex items-center justify-center mx-auto">
                      <span className="text-white font-bold text-sm">{phase.step}</span>
                    </div>
                    <h5 className="font-semibold">{phase.title}</h5>
                    <p className="text-sm text-muted-foreground">{phase.desc}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
