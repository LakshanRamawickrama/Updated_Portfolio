"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Code, Database, Wrench, Star, TrendingUp } from 'lucide-react'

const iconsMap: Record<string, any> = { Code, Database, Wrench }

interface Skill { id: number; name: string; level: number }
interface SkillCategory { id: number; name: string; color: string; icon: string; skills: Skill[] }

const colorMap: Record<string, { from: string; to: string }> = {
  blue: { from: "#3b82f6", to: "#06b6d4" },
  red: { from: "#ef4444", to: "#f472b6" },
  green: { from: "#22c55e", to: "#a3e635" }
}

export function Skills() {
  const [categories, setCategories] = useState<SkillCategory[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch("http://rgrlakshan.pythonanywhere.com/api/skills/")
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => {
        console.error("Error fetching skills:", err)
        setError("Failed to load skills from server.")
      })
  }, [])

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Technical Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            🔧 A powerful arsenal of technologies mastered through hands-on projects and real-world experience
          </p>
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>

        {/* Dynamic skill cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const IconComponent = iconsMap[category.icon] || Code
            const gradient = colorMap[category.color] || colorMap.blue

            return (
              <Card
                key={index}
                className="hover-elevate group relative overflow-visible border-2 hover:border-primary/20 transition-all duration-500"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                  style={{ background: `linear-gradient(to bottom right, ${gradient.from}, ${gradient.to})` }}
                ></div>

                <CardHeader className="text-center pb-6 relative">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300"
                    style={{ background: `linear-gradient(to bottom right, ${gradient.from}, ${gradient.to})` }}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                    {category.name}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <Badge
                          variant="secondary"
                          className="hover:bg-primary/10 transition-colors duration-300"
                        >
                          {skill.name}
                        </Badge>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <TrendingUp className="w-3 h-3" />
                          {skill.level}%
                        </div>
                      </div>
                      <div className="w-full bg-muted/50 rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%`, background: `linear-gradient(to right, ${gradient.from}, ${gradient.to})` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Additional skills - always render */}
        <div className="mt-16 text-center z-10 relative">
          <h3 className="text-2xl font-semibold mb-6">Additional Proficiencies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Problem Solving', 'Team Leadership', 'Fast Learning', 'Analytical Thinking', 'Project Management', 'Cloud Computing'].map((skill, index) => (
              <Badge
                key={index}
                variant="outline"
                className="px-4 py-2 text-sm hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105"
              >
                ✨ {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
