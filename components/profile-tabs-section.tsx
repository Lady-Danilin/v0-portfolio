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

const tabs = [
  {
    id: "social",
    label: "Comunicación Digital",
    icon: Share2,
    emoji: "📱",
    tagline: "Estrategia, contenido y comunidades digitales",
    description:
      "Diseño estrategias de comunicación digital que conectan marcas con sus audiencias. Con experiencia en instituciones educativas y agencias creativas, traduzco objetivos en contenido que genera impacto real.",
    highlights: [
      { icon: Users, text: "Gestión de equipos creativos de hasta 8 personas" },
      { icon: BarChart3, text: "Análisis de métricas y optimización continua de campañas" },
      { icon: Megaphone, text: "Estrategia multicanal: Instagram, LinkedIn, Facebook, TikTok" },
    ],
    skills: ["Meta Business Suite", "Google Analytics", "Metricool", "Hootsuite", "Canva Pro", "ChatGPT"],
    cta: { label: "Hablemos de tu estrategia", href: "#contact" },
    accent: "#0066CC",
  },
  {
    id: "voice",
    label: "Locutora & Productora",
    icon: Mic,
    emoji: "🎙️",
    tagline: "Tu voz, tu historia, digitalmente realizada",
    description:
      "Con experiencia en producción radial y locución profesional, adapto mi voz para transmitir el tono y mensaje exacto que tu marca necesita. Desde publicidad hasta narración, cada palabra tiene intención.",
    highlights: [
      { icon: Radio, text: "Productora en Radio Mitre — programa \"Mitre y el Campo\"" },
      { icon: Mic, text: "Locución comercial, narrativa y presentación institucional" },
      { icon: Volume2, text: "Producción de contenido de audio para plataformas digitales" },
    ],
    skills: ["Locución comercial", "Producción radial", "Narración", "Adobe Audition", "Podcast", "Voice-over"],
    cta: { label: "Escuchar demo", href: "#broadcaster" },
    accent: "#FF6600",
  },
  {
    id: "ux",
    label: "UX/UI & Diseño",
    icon: Palette,
    emoji: "🎨",
    tagline: "Diseño centrado en el usuario, con propósito",
    description:
      "Combino pensamiento estratégico con ejecución creativa para crear experiencias digitales que no solo se ven bien, sino que funcionan de manera intuitiva. Cada decisión de diseño tiene un por qué.",
    highlights: [
      { icon: MousePointer, text: "Caso real: Secretaría de Extensión FCEFyN-UNC" },
      { icon: CheckCircle, text: "Test de usabilidad y evaluación heurística aplicada" },
      { icon: Palette, text: "Figma, Adobe XD, wireframing y prototipos" },
    ],
    skills: ["Figma", "Adobe XD", "Wagtail CMS", "User Testing", "Wireframing", "Heurísticas Nielsen"],
    cta: { label: "Ver caso de estudio", href: "#ux-ui-designer" },
    accent: "#7C3AED",
    caseStudy: {
      title: "Secretaría de Extensión — FCEFyN UNC",
      url: "https://fcefyn.unc.edu.ar/extension/",
      role: "Responsable de comunicación digital · 2024–presente",
      tests: [
        {
          id: "TC-01",
          name: "Navegación a convocatorias",
          scenario: "Un visitante nuevo busca inscribirse a un programa de extensión en menos de 3 clics.",
          finding: "✅ Flujo claro desde inicio → Extensión → Programas → Formulario.",
        },
        {
          id: "TC-02",
          name: "Legibilidad en mobile",
          scenario: "Usuario en celular intenta leer un artículo de noticias reciente.",
          finding: "⚠️ Tipografía adecuada, pero CTAs secundarios requieren scroll excesivo.",
        },
        {
          id: "TC-03",
          name: "Consistencia visual entre secciones",
          scenario: "¿Mantiene el sitio jerarquía visual coherente en todas sus secciones?",
          finding: "⚠️ Paleta consistente, pero variación en uso de headers entre subsecciones.",
        },
        {
          id: "TC-04",
          name: "Accesibilidad de contacto",
          scenario: "¿Puede un usuario encontrar cómo contactar a la secretaría sin conocer el sitio?",
          finding: "✅ Footer con datos visibles. Mejora sugerida: CTA de contacto en hero.",
        },
      ],
    },
  },
]

function scrollTo(href: string) {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: "smooth" })
}

export function ProfileTabsSection() {
  const [active, setActive] = useState("social")
  const tab = tabs.find((t) => t.id === active)!

  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/10 to-background">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-inter mb-4">¿Qué buscás?</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#0066CC] to-[#FF6600] mx-auto mb-4" />
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Tres perfiles, una misma pasión por la comunicación estratégica.
          </p>
        </div>

        {/* Tab buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
          {tabs.map((t) => {
            const Icon = t.icon
            const isActive = t.id === active
            return (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={cn(
                  "flex items-center gap-2 px-5 py-3 rounded-2xl font-semibold text-sm transition-all duration-300 border-2",
                  isActive
                    ? "bg-gradient-to-r from-[#0066CC] to-[#FF6600] text-white border-transparent shadow-lg scale-105"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-[#0066CC]/40 hover:bg-muted/50",
                )}
              >
                <Icon className="h-4 w-4 flex-shrink-0" />
                {t.label}
              </button>
            )
          })}
        </div>

        {/* Tab content */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-none shadow-xl overflow-hidden">
            {/* Top accent bar */}
            <div className="h-1.5 bg-gradient-to-r from-[#0066CC] to-[#FF6600]" />

            <CardContent className="p-8 md:p-10 space-y-8">

              {/* Title + description */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{tab.emoji}</span>
                  <div>
                    <h3 className="text-2xl font-bold font-inter">{tab.label}</h3>
                    <p className="text-sm text-muted-foreground">{tab.tagline}</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed text-base pt-1">{tab.description}</p>
              </div>

              {/* Highlights */}
              <div className="space-y-3">
                {tab.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#0066CC]/10 to-[#FF6600]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <h.icon className="h-4 w-4 text-[#0066CC]" />
                    </div>
                    <p className="text-sm text-foreground/80 leading-relaxed pt-1">{h.text}</p>
                  </div>
                ))}
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

              {/* Case study (UX tab only) */}
              {tab.caseStudy && (
                <div className="rounded-2xl border border-border/60 overflow-hidden bg-muted/20">
                  <div className="px-6 py-4 border-b border-border/60 flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-sm">{tab.caseStudy.title}</p>
                      <p className="text-xs text-muted-foreground">{tab.caseStudy.role}</p>
                    </div>
                    <a
                      href={tab.caseStudy.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#0066CC] flex items-center gap-1 hover:underline"
                    >
                      Ver sitio <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>

                  <div className="divide-y divide-border/40">
                    {tab.caseStudy.tests.map((test) => (
                      <div key={test.id} className="px-6 py-4 space-y-1">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-[10px] font-mono px-2 py-0.5 flex-shrink-0">
                            {test.id}
                          </Badge>
                          <p className="text-sm font-semibold">{test.name}</p>
                        </div>
                        <p className="text-xs text-muted-foreground pl-9">{test.scenario}</p>
                        <p className="text-xs pl-9 font-medium">{test.finding}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="pt-2">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#0066CC] to-[#FF6600] text-white hover:shadow-[0_6px_25px_rgba(0,102,204,0.4)] hover:-translate-y-0.5 transition-all duration-300 gap-2"
                  onClick={() => scrollTo(tab.cta.href)}
                >
                  {tab.cta.label}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>

            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  )
}
