"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, University, TrendingUp, Mic } from "lucide-react"

const projects = [
  {
    icon: University,
    title: "University Digital Communication Strategy",
    description:
      "Developed and implemented comprehensive digital communication strategies for FCEFyN UNC, focusing on social media planning and institutional communication initiatives.",
    tags: ["Digital Strategy", "Social Media", "Education"],
    gradient: "from-blue-500 to-purple-600",
  },
  {
    icon: TrendingUp,
    title: "BIOINGENIERIA Digital Transformation",
    description:
      "Led complete digital marketing overhaul including social media diagnostics, Google Ads campaigns, and brand development for a bioengineering equipment distributor.",
    tags: ["Google Ads", "SEO", "Branding"],
    gradient: "from-green-500 to-teal-600",
  },
  {
    icon: Mic,
    title: "Radio Mitre Digital Content",
    description:
      'Produced and managed digital content for agricultural journalism program "Mitre y el Campo", including social media strategy and guest coordination.',
    tags: ["Radio Production", "Content Creation", "Journalism"],
    gradient: "from-orange-500 to-red-600",
  },
]

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-[#F8F9FA] to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-inter mb-4">Featured Projects</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#0066CC] to-[#FF6600] mx-auto mb-4" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Some of my recent work</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Project Header with Icon */}
              <div className={`h-32 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <project.icon className="h-12 w-12 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>

                {/* Animated Background Elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-700" />
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-8 -translate-x-8 group-hover:scale-125 transition-transform duration-700 delay-100" />
              </div>

              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold font-inter group-hover:text-[#0066CC] transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="bg-[#0066CC]/10 text-[#0066CC] hover:bg-[#0066CC]/20 transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button
                  variant="ghost"
                  className="w-full group/btn hover:bg-[#0066CC] hover:text-white transition-all duration-300"
                >
                  Learn More
                  <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">Interested in working together on your next project?</p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#0066CC] to-[#FF6600] hover:from-[#0052a3] hover:to-[#e55a00] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            onClick={() => {
              const element = document.querySelector("#contact")
              if (element) {
                element.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            Let's Talk About Your Project
          </Button>
        </div>
      </div>
    </section>
  )
}
