"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Share2, BarChart3, Users, Megaphone,
  Mic, Radio, Volume2,
  Palette, MousePointer, CheckCircle,
  ArrowRight, ExternalLink
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useLang } from "@/lib/language-context"

const tabIcons = [
  { id: "social", icon: Share2 },
  { id: "voice", icon: Mic },
  { id: "ux",    icon: Palette },
]

const highlightIcons = [
  [Users, BarChart3, Megaphone],
  [Radio, Mic, Volume2],
  [MousePointer, CheckCircle, Palette],
]

function scrollTo(href: string) {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: "smooth" })
}

export function ProfileTabsSection() {
  const { t } = useLang()
  const tabs = t.profileTabs.tabs
  const [activeIdx, setActiveIdx] = useState(0)
  const [contentVisible, setContentVisible] = useState(true)
  const tab = tabs[activeIdx]
  const HLIcons = highlightIcons[activeIdx]
  const TabIcon = tabIcons[activeIdx].icon

  const handleTabChange = (i: number) => {
    if (i === activeIdx) return
    setContentVisible(false)
    setTimeout(() => {
      setActiveIdx(i)
      setContentVisible(true)
    }, 200)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/10 to-background">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold font-inter mb-4">
            {t.profileTabs.heading}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#0066CC] to-[#FF6600] mx-auto mb-4" />
          <p className="text-base text-muted-foreground max-w-lg mx-auto leading-relaxed">
            {t.profileTabs.subheading}
          </p>
        </div>

        {/* Segmented tab control */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-muted/60 rounded-2xl p-1.5 gap-1 border border-border/50">
            {tabs.map((tab, i) => {
              const Icon = tabIcons[i].icon
              const isActive = i === activeIdx
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(i)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-250 whitespace-nowrap",
                    isActive
                      ? "bg-gradient-to-r from-[#0066CC] to-[#FF6600] text-white shadow-md"
                      : "text-muted-foreground hover:text-foreground hover:bg-background/80",
                  )}
                >
                  <Icon className="h-3.5 w-3.5 flex-shrink-0" />
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.emoji}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Content card */}
        <div
          className="max-w-3xl mx-auto"
          style={{
            opacity: contentVisible ? 1 : 0,
            transform: contentVisible ? "translateY(0px)" : "translateY(8px)",
            transition: "opacity 200ms ease-out, transform 200ms ease-out",
          }}
        >
          <Card className="border shadow-lg overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-[#0066CC] to-[#FF6600]" />

            <CardContent className="p-7 md:p-9 space-y-7">

              {/* Title */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0066CC]/10 to-[#FF6600]/10 flex items-center justify-center flex-shrink-0 border border-[#0066CC]/15">
                  <TabIcon className="h-5 w-5 text-[#0066CC]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-inter">{tab.label}</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">{tab.tagline}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">{tab.description}</p>

              {/* Highlights */}
              <div className="space-y-2.5">
                {tab.highlights.map((h, i) => {
                  const Icon = HLIcons[i]
                  return (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-lg bg-gradient-to-r from-[#0066CC]/10 to-[#FF6600]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon className="h-3.5 w-3.5 text-[#0066CC]" />
                      </div>
                      <p className="text-sm text-foreground/80 leading-relaxed pt-1">{h}</p>
                    </div>
                  )
                })}
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {tab.skills.map((s) => (
                  <Badge
                    key={s}
                    variant="secondary"
                    className="text-xs font-medium px-3 py-1 bg-gradient-to-r from-[#0066CC]/8 to-[#FF6600]/8 border border-[#0066CC]/15"
                  >
                    {s}
                  </Badge>
                ))}
              </div>

              {/* Case study (UX tab) */}
              {"caseStudy" in tab && tab.caseStudy && (
                <div className="rounded-2xl border border-border/60 overflow-hidden bg-muted/20">
                  <div className="px-5 py-3.5 border-b border-border/60 flex items-center justify-between gap-3">
                    <div>
                      <p className="font-semibold text-sm">{tab.caseStudy.title}</p>
                      <p className="text-xs text-muted-foreground">{tab.caseStudy.role}</p>
                    </div>
                    <a
                      href="https://fcefyn.unc.edu.ar/facultad/secretarias/extension/area-de-formacion-continua/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#0066CC] flex items-center gap-1 hover:underline flex-shrink-0"
                    >
                      Ver sitio <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                  <div className="divide-y divide-border/40">
                    {tab.caseStudy.tests.map((test) => (
                      <div key={test.id} className="px-5 py-3.5 space-y-1">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-[10px] font-mono px-2 py-0.5 flex-shrink-0">
                            {test.id}
                          </Badge>
                          <p className="text-sm font-semibold">{test.name}</p>
                        </div>
                        <p className="text-xs text-muted-foreground pl-10">{test.scenario}</p>
                        <p className="text-xs pl-10 font-medium">{test.finding}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#0066CC] to-[#FF6600] text-white hover:shadow-[0_6px_25px_rgba(0,102,204,0.4)] hover:-translate-y-0.5 transition-all duration-300 gap-2 w-full sm:w-auto"
                onClick={() => scrollTo(tab.cta.href)}
              >
                {tab.cta.label}
                <ArrowRight className="h-4 w-4" />
              </Button>

            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  )
}
