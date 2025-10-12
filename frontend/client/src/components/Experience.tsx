"use client"
import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Briefcase, Calendar } from 'lucide-react'

interface Experience {
  id: number
  title: string
  company: string
  period: string
  type: string
  description: string
  skills: string[]
}

export function Experience() {
  const [experience, setExperience] = useState<Experience[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("http://rgrlakshan.pythonanywhere.com/api/experience/")
      .then(res => res.json())
      .then(data => setExperience(data))
      .catch(err => console.error("Error fetching experience:", err))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <section id="experience" className="py-16 px-4 text-center text-muted-foreground">
        <p>Loading experience...</p>
      </section>
    )
  }

  return (
    <section id="experience" className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 rounded-full mb-4">
            <Briefcase className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-medium text-orange-500">Career Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-primary bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            🚀 Building expertise through hands-on roles in technology and financial services
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border"></div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={exp.id} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-3 h-3 bg-primary rounded-full border-2 border-background"></div>

                <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <Card className="hover-elevate">
                    <CardHeader>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <Badge variant="outline" className="gap-1">
                          <Briefcase className="w-3 h-3" />
                          {exp.type}
                        </Badge>
                        <Badge variant="secondary" className="gap-1">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <CardDescription className="text-base font-medium">{exp.company}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, idx) => (
                          <Badge key={idx} variant="secondary">{skill}</Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
