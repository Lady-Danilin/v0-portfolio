"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Palette, Users, Zap, Target } from "lucide-react"

const principles = [
  {
    icon: Users,
    title: "User-Centered Design",
    description:
      "Every design decision is made with the end user in mind, ensuring intuitive and accessible experiences.",
  },
  {
    icon: Target,
    title: "Goal-Oriented Approach",
    description: "Aligning design solutions with business objectives and user needs to create meaningful interactions.",
  },
  {
    icon: Zap,
    title: "Iterative Process",
    description: "Continuous testing, feedback, and refinement to optimize user experience and interface design.",
  },
  {
    icon: Palette,
    title: "Visual Storytelling",
    description: "Creating compelling visual narratives that communicate brand values and enhance user engagement.",
  },
]

export function UXUISection() {
  return (
    <section id="ux-ui-designer" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-inter mb-4">UX/UI Design Approach</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#0066CC] to-[#FF6600] mx-auto mb-4" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Design & Dialogue: Crafting Digital Experiences.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold font-inter bg-gradient-to-r from-[#0066CC] to-[#FF6600] bg-clip-text text-transparent mb-6">
              The Power of User-Centric Design
            </h3>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              In today's digital landscape, exceptional user experience is not just a competitive advantage—it's
              essential. My approach to UX/UI design combines strategic thinking with creative execution, ensuring that
              every interface not only looks beautiful but functions intuitively. I believe in creating digital
              experiences that tell a story, solve real problems, and connect brands with their audiences in meaningful
              ways.
            </p>
          </div>

          {/* Design Principles Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {principles.map((principle, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#0066CC] to-[#FF6600] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <principle.icon className="h-6 w-6 text-white" />
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold font-inter">{principle.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{principle.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Process Overview */}
          <Card className="mt-12 bg-gradient-to-r from-[#0066CC]/5 to-[#FF6600]/5 border-l-4 border-l-[#0066CC]">
            <CardContent className="p-8">
              <h4 className="text-xl font-bold font-inter mb-4 text-center">My Design Process</h4>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                {[
                  { step: "01", title: "Research", desc: "Understanding users and business goals" },
                  { step: "02", title: "Ideate", desc: "Brainstorming and concept development" },
                  { step: "03", title: "Design", desc: "Creating wireframes and prototypes" },
                  { step: "04", title: "Test", desc: "Validating and iterating solutions" },
                ].map((phase, index) => (
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
