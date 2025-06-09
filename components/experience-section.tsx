"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Digital Communications Manager",
    company: "Faculty of Exact, Physical and Natural Sciences - UNC",
    period: "2024 - Present",
    description:
      "Leading digital transformation initiatives for the Extension Secretary, increasing online visibility. Developing and implementing comprehensive cross-platform content strategies, coordinating a team of content creators, designers, and social media specialists.",
    highlights: [
      "Lead digital transformation initiatives",
      "Develop and implement cross-platform content strategies",
      "Coordinate content creation and design teams",
      "Analyze engagement metrics and optimize content",
      "Manage event coverage and institutional content production",
    ],
  },
  {
    title: "Digital Content Strategist & Marketing Analyst",
    company: "LA CUEVA CREATORS Agency",
    period: "2023 - 2024",
    description:
      "Developed and executed content strategies, managed social media across multiple platforms, and analyzed marketing performance. Coordinated creative teams (graphic design, audiovisual, animation) and supervised content creation.",
    highlights: [
      "Content strategy development and execution",
      "Social media management and multi-platform analysis",
      "Marketing strategy, planning, and iteration",
      "Coordination of creative and production teams",
    ],
  },
  {
    title: "Digital Marketing & UX/UI Professional",
    company: "BIOINGENIERÍA DEHNER SRL",
    period: "2022 - 2024",
    description:
      "Responsible for brand identity, online presence, and digital advertising (Google & Meta Ads). Planned and executed multi-platform content strategies, institutional communication, and managed both organic and paid positioning.",
    highlights: [
      "Brand identity and online presence management",
      "Google Ads and Meta Ads campaign management",
      "Multi-platform content strategy and institutional communication",
      "SEO/SEM (organic and paid positioning)",
    ],
  },
  {
    title: "Radio Producer",
    company: 'Radio Mitre - "Mitre y el Campo"',
    period: "2022 - 2023",
    description:
      'Radio producer specializing in agricultural journalism and digital content creation. Managed program scheduling and guest coordination for the "Mitre y el Campo" program.',
    highlights: [
      "Radio production and program scheduling",
      "Guest coordination and communication",
      "Digital content creation for agricultural journalism",
      "Social media management for program's digital platforms",
    ],
  },
]

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-[#F8F9FA] to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-inter mb-4">Experience</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#0066CC] to-[#FF6600] mx-auto mb-4" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">My professional journey</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0066CC] to-[#FF6600] hidden md:block" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-[#0066CC] to-[#FF6600] rounded-full border-4 border-background shadow-lg hidden md:block group-hover:scale-125 transition-transform" />

                  {/* Content Card */}
                  <Card className="ml-0 md:ml-16 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-[#0066CC]">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-xl font-bold font-inter text-foreground">{exp.title}</h3>
                          <h4 className="text-lg font-medium text-[#0066CC]">{exp.company}</h4>
                          <Badge variant="secondary" className="mt-2">
                            {exp.period}
                          </Badge>
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
