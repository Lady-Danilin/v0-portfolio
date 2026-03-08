"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useInView } from "@/lib/use-in-view"
import { useLang } from "@/lib/language-context"

const experiencesEN = [
  {
    title: "Digital Communications Manager",
    company: "Faculty of Exact, Physical and Natural Sciences - UNC",
    period: "2024 - Present",
    description: "Leading digital transformation initiatives for the Extension Secretary, increasing online visibility. Developing and implementing comprehensive cross-platform content strategies, coordinating a team of content creators, designers, and social media specialists.",
    highlights: ["Lead digital transformation initiatives","Develop and implement cross-platform content strategies","Coordinate content creation and design teams","Analyze engagement metrics and optimize content","Manage event coverage and institutional content production"],
  },
  {
    title: "Digital Content Strategist & Marketing Analyst",
    company: "LA CUEVA CREATORS Agency",
    period: "2023 - 2024",
    description: "Developed and executed content strategies, managed social media across multiple platforms, and analyzed marketing performance. Coordinated creative teams (graphic design, audiovisual, animation) and supervised content creation.",
    highlights: ["Content strategy development and execution","Social media management and multi-platform analysis","Marketing strategy, planning, and iteration","Coordination of creative and production teams"],
  },
  {
    title: "Digital Marketing & UX/UI Professional",
    company: "BIOINGENIERÍA DEHNER SRL",
    period: "2022 - 2024",
    description: "Responsible for brand identity, online presence, and digital advertising (Google & Meta Ads). Planned and executed multi-platform content strategies, institutional communication, and managed both organic and paid positioning.",
    highlights: ["Brand identity and online presence management","Google Ads and Meta Ads campaign management","Multi-platform content strategy","SEO/SEM (organic and paid positioning)"],
  },
  {
    title: "Radio Producer",
    company: 'Radio Mitre - "Mitre y el Campo"',
    period: "2022 - 2023",
    description: 'Radio producer specializing in agricultural journalism and digital content creation. Managed program scheduling and guest coordination for the "Mitre y el Campo" program.',
    highlights: ["Radio production and program scheduling","Guest coordination and communication","Digital content creation for agricultural journalism","Social media management for program platforms"],
  },
]

const experiencesES = [
  {
    title: "Responsable de Comunicación Digital",
    company: "Facultad de Ciencias Exactas, Físicas y Naturales - UNC",
    period: "2024 - Presente",
    description: "Lidero iniciativas de transformación digital para la Secretaría de Extensión, aumentando la visibilidad online. Desarrollo e implemento estrategias de contenido multiplataforma, coordinando un equipo de creadores, diseñadores y especialistas en redes.",
    highlights: ["Liderar iniciativas de transformación digital","Desarrollar estrategias de contenido multiplataforma","Coordinar equipos de creación y diseño","Analizar métricas y optimizar contenido","Gestionar cobertura de eventos y producción institucional"],
  },
  {
    title: "Estratega de Contenido Digital & Analista de Marketing",
    company: "Agencia LA CUEVA CREATORS",
    period: "2023 - 2024",
    description: "Desarrollé y ejecuté estrategias de contenido, gestioné redes sociales en múltiples plataformas y analicé rendimiento de marketing. Coordiné equipos creativos (diseño gráfico, audiovisual, animación).",
    highlights: ["Desarrollo y ejecución de estrategia de contenido","Gestión de redes y análisis multiplataforma","Estrategia, planificación e iteración de marketing","Coordinación de equipos creativos y de producción"],
  },
  {
    title: "Marketing Digital & UX/UI",
    company: "BIOINGENIERÍA DEHNER SRL",
    period: "2022 - 2024",
    description: "Responsable de identidad de marca, presencia online y publicidad digital (Google & Meta Ads). Planifiqué estrategias de contenido, comunicación institucional y gestioné posicionamiento orgánico y pago.",
    highlights: ["Gestión de identidad de marca y presencia online","Campañas Google Ads y Meta Ads","Estrategia de contenido multiplataforma","SEO/SEM (posicionamiento orgánico y pago)"],
  },
  {
    title: "Productora Radial",
    company: 'Radio Mitre - "Mitre y el Campo"',
    period: "2022 - 2023",
    description: 'Productora especializada en periodismo agropecuario y creación de contenido digital. Gestioné la programación y coordinación de invitados para el programa "Mitre y el Campo".',
    highlights: ["Producción radial y programación","Coordinación de invitados","Creación de contenido digital para periodismo agropecuario","Gestión de redes del programa"],
  },
]

export function ExperienceSection() {
  const { t, lang } = useLang()
  const { ref: sectionRef, inView } = useInView()
  const experiences = lang === "es" ? experiencesES : experiencesEN

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-[#F8F9FA] to-white dark:from-gray-900 dark:to-gray-800" ref={sectionRef as React.RefObject<HTMLElement>}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 section-hidden ${inView ? "section-visible" : ""}`}>
          <h2 className="text-3xl md:text-4xl font-bold font-inter mb-4">{t.experience.title}</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#0066CC] to-[#FF6600] mx-auto mb-4" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.experience.subtitle}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0066CC] to-[#FF6600] hidden md:block" />
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className={`relative group section-hidden ${inView ? "section-visible" : ""}`} style={{ transitionDelay: `${0.1 + index * 0.12}s` }}>
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-[#0066CC] to-[#FF6600] rounded-full border-4 border-background shadow-lg hidden md:block group-hover:scale-125 transition-transform" />
                  <Card className="ml-0 md:ml-16 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-[#0066CC]">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-xl font-bold font-inter text-foreground">{exp.title}</h3>
                          <h4 className="text-lg font-medium text-[#0066CC]">{exp.company}</h4>
                          <Badge variant="secondary" className="mt-2">{exp.period}</Badge>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                        <div className="space-y-2">
                          {exp.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-[#0066CC] rounded-full mt-2 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
