"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GraduationCap, Calendar, Award } from 'lucide-react'

type EducationType = {
  id: number
  degree: string
  institution: string
  period: string
  status: string
  description: string
  type: string
}

type CertificateType = {
  id: number
  title: string
  issuer: string
  date: string
  description: string
  credentialUrl?: string
}

export function Education() {
  const [educationData, setEducationData] = useState<EducationType[]>([])
  const [certificationsData, setCertificationsData] = useState<CertificateType[]>([])

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/education/')
      .then(res => res.json())
      .then(data => setEducationData(data))
      .catch(err => console.error('Error fetching education:', err))

    fetch('http://127.0.0.1:8000/api/certificates/')
      .then(res => res.json())
      .then(data => setCertificationsData(data))
      .catch(err => console.error('Error fetching certifications:', err))
  }, [])

  return (
    <section id="education" className="py-16 px-4 bg-gradient-to-br from-background via-muted/10 to-background">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 rounded-full mb-4">
            <GraduationCap className="w-4 h-4 text-purple-500" />
            <span className="text-sm font-medium text-purple-500">Academic Excellence</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-primary bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            📚 Continuous learning journey in technology and professional development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education timeline */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-primary" />
              Formal Education
            </h3>
            <div className="relative border-l-2 border-primary/20 ml-4 space-y-8">
              {educationData.map((edu, index) => (
                <div key={edu.id} className="relative pl-6">
                  <div className="absolute -left-4 top-2 w-3 h-3 bg-primary rounded-full shadow-lg"></div>
                  <Card className="hover-elevate hover:scale-105 transition-transform duration-300">
                    <CardHeader>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <Badge variant="outline">{edu.type}</Badge>
                        <Badge variant={edu.status === 'In Progress' ? 'default' : 'secondary'} className="gap-1">
                          <Calendar className="w-3 h-3" /> {edu.period}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg">{edu.degree}</CardTitle>
                      <CardDescription>{edu.institution}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{edu.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-primary" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certificationsData.map((cert) => (
                <Card key={cert.id} className="hover-elevate hover:scale-105 transition-transform duration-300">
                  <CardContent className="pt-4">
                    <div className="flex justify-between items-start gap-2 mb-2">
                      <h5 className="font-medium">{cert.title}</h5>
                      <Badge variant="secondary" className="text-xs">{cert.date}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                    <p className="text-xs text-muted-foreground">{cert.description}</p>
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary text-xs font-medium underline hover:text-accent transition-colors"
                      >
                        View Credential
                      </a>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
