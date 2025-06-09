"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Analytics & Marketing",
    skills: [
      { name: "Google Analytics", level: "Advanced" },
      { name: "Google Ads", level: "Advanced" },
      { name: "Meta Business Suite", level: "Advanced" },
      { name: "SEMrush", level: "Intermediate" },
      { name: "Ahrefs", level: "Intermediate" },
      { name: "Mailchimp", level: "Advanced" },
      { name: "Metricool", level: "Advanced" },
      { name: "Looker Studio", level: "Intermediate" },
    ],
  },
  {
    title: "Design & UX/UI",
    skills: [
      { name: "Figma", level: "Advanced" },
      { name: "Adobe XD", level: "Advanced" },
      { name: "Adobe Creative Suite", level: "Intermediate" },
      { name: "Canva Pro", level: "Advanced" },
      { name: "Premier Pro", level: "Advanced" },
      { name: "Cap Cut", level: "Advanced" },
    ],
  },
  {
    title: "Project Management",
    skills: [
      { name: "Trello", level: "Advanced" },
      { name: "Notion", level: "Advanced" },
      { name: "Asana", level: "Advanced" },
      { name: "Monday.com", level: "Advanced" },
      { name: "Google Workspace", level: "Advanced" },
      { name: "Slack", level: "Advanced" },
    ],
  },
  {
    title: "AI & Automation",
    skills: [
      { name: "ChatGPT", level: "Content Generation" },
      { name: "Claude", level: "Content Generation" },
      { name: "DeepSeek", level: "Content Generation" },
      { name: "Wagtail", level: "CMS" },
      { name: "Hootsuite", level: "Social Media Automation" },
    ],
  },
]

const getLevelColor = (level: string) => {
  switch (level) {
    case "Advanced":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
    case "Intermediate":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
    default:
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
  }
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-inter mb-4">Skills & Expertise</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#0066CC] to-[#FF6600] mx-auto mb-4" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Technologies and tools I work with</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold font-inter mb-6 text-center">{category.title}</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex flex-col items-center p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors group"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-[#0066CC] to-[#FF6600] rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                        <span className="text-white font-bold text-sm">{skill.name.charAt(0)}</span>
                      </div>

                      <h4 className="font-medium text-center mb-2 text-sm">{skill.name}</h4>

                      <Badge variant="secondary" className={`text-xs ${getLevelColor(skill.level)}`}>
                        {skill.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
