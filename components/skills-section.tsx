"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useInView as useInViewHook } from "@/lib/use-in-view"
import { useLang } from "@/lib/language-context"
import {
  BarChart3,
  TrendingUp,
  Users,
  Search,
  Mail,
  LineChart,
  Palette,
  Figma,
  PenTool,
  Video,
  Film,
  Scissors,
  Trello,
  FileText,
  Calendar,
  Grid3x3,
  FolderOpen,
  MessageSquare,
  Bot,
  Brain,
  Sparkles,
  Globe,
  Share2,
  Activity,
  Target,
  Megaphone,
  Hash,
  Eye,
  DollarSign,
  Layers,
  Layout,
  Image,
  Brush,
  Clapperboard,
  CheckSquare,
  BookOpen,
  CalendarDays,
  LayoutGrid,
  Cloud,
  Users2,
  Cpu,
  Zap,
  Wand2,
  Database,
  Radio
} from "lucide-react"

const skillCategories = [
  {
    title: "Analytics & Marketing",
    icon: BarChart3,
    skills: [
      { name: "Google Analytics", level: "Advanced", icon: LineChart },
      { name: "Google Ads", level: "Advanced", icon: Target },
      { name: "Meta Business Suite", level: "Advanced", icon: Users },
      { name: "SEMrush", level: "Intermediate", icon: Search },
      { name: "Ahrefs", level: "Intermediate", icon: Activity },
      { name: "Mailchimp", level: "Advanced", icon: Mail },
      { name: "Metricool", level: "Advanced", icon: TrendingUp },
      { name: "Looker Studio", level: "Intermediate", icon: Eye },
    ],
  },
  {
    title: "Design & UX/UI",
    icon: Palette,
    skills: [
      { name: "Figma", level: "Advanced", icon: Figma },
      { name: "Adobe XD", level: "Advanced", icon: Layers },
      { name: "Adobe Creative Suite", level: "Intermediate", icon: Brush },
      { name: "Canva Pro", level: "Advanced", icon: Layout },
      { name: "Premiere Pro", level: "Advanced", icon: Film },
      { name: "CapCut", level: "Advanced", icon: Clapperboard },
    ],
  },
  {
    title: "Project Management",
    icon: CheckSquare,
    skills: [
      { name: "Trello", level: "Advanced", icon: Trello },
      { name: "Notion", level: "Advanced", icon: BookOpen },
      { name: "Asana", level: "Advanced", icon: CheckSquare },
      { name: "Monday.com", level: "Advanced", icon: CalendarDays },
      { name: "Google Workspace", level: "Advanced", icon: Cloud },
      { name: "Slack", level: "Advanced", icon: MessageSquare },
    ],
  },
  {
    title: "AI & Automation",
    icon: Cpu,
    skills: [
      { name: "ChatGPT", level: "Advanced", icon: Bot },
      { name: "Claude", level: "Advanced", icon: Brain },
      { name: "DeepSeek", level: "Advanced", icon: Sparkles },
      { name: "Wagtail CMS", level: "Intermediate", icon: Database },
      { name: "Hootsuite", level: "Advanced", icon: Share2 },
      { name: "Zapier", level: "Intermediate", icon: Zap },
    ],
  },
]

const getLevelColor = (level: string) => {
  switch (level) {
    case "Advanced":
      return "bg-gradient-to-r from-green-500 to-emerald-600 text-white"
    case "Intermediate":
      return "bg-gradient-to-r from-blue-500 to-cyan-600 text-white"
    default:
      return "bg-gradient-to-r from-purple-500 to-pink-600 text-white"
  }
}

const getLevelBadgeColor = (level: string) => {
  switch (level) {
    case "Advanced":
      return "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300 border-green-200 dark:border-green-800"
    case "Intermediate":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 border-blue-200 dark:border-blue-800"
    default:
      return "bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300 border-purple-200 dark:border-purple-800"
  }
}

export function SkillsSection() {
  const { t } = useLang()
  const { ref: sectionRef, inView } = useInViewHook()

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-background via-muted/20 to-background" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 section-hidden ${inView ? "section-visible" : ""}`}>
          <h2 className="text-3xl md:text-4xl font-bold font-inter mb-4">{t.skills.title}</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#0066CC] to-[#FF6600] mx-auto mb-4" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.skills.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const CategoryIcon = category.icon
            return (
              <Card
                key={index}
                className={`hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-muted overflow-hidden group section-hidden ${inView ? "section-visible" : ""}`}
                style={{ transitionDelay: `${0.1 + index * 0.1}s` }}
              >
                <div className="h-1.5 bg-gradient-to-r from-[#0066CC] to-[#FF6600] opacity-30 group-hover:opacity-100 group-hover:h-2 transition-all duration-300" />

                <CardContent className="p-6">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#0066CC] to-[#FF6600] rounded-full flex items-center justify-center mr-3">
                      <CategoryIcon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold font-inter">{category.title}</h3>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {category.skills.map((skill, skillIndex) => {
                      const SkillIcon = skill.icon
                      return (
                        <div
                          key={skillIndex}
                          className="flex items-center p-3 bg-muted/30 rounded-lg hover:bg-muted/60 transition-all duration-200 group/skill hover:shadow-md"
                        >
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${getLevelColor(skill.level)} shadow-sm group-hover/skill:scale-110 transition-transform`}>
                            <SkillIcon className="h-5 w-5 text-white" />
                          </div>

                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-sm truncate">{skill.name}</h4>
                            <Badge
                              variant="outline"
                              className={`text-xs mt-1 ${getLevelBadgeColor(skill.level)}`}
                            >
                              {skill.level}
                            </Badge>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Card className="inline-block p-6 bg-gradient-to-r from-[#0066CC]/10 to-[#FF6600]/10 border-none">
            <div className="flex items-center space-x-6">
              <div className="text-left">
                <h4 className="font-bold text-lg mb-1">{t.skills.alwaysLearning}</h4>
                <p className="text-sm text-muted-foreground">
                  {t.skills.alwaysLearningDesc}
                </p>
              </div>
              <div className="w-16 h-16 bg-gradient-to-r from-[#0066CC] to-[#FF6600] rounded-full flex items-center justify-center animate-pulse">
                <Wand2 className="h-8 w-8 text-white" />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}