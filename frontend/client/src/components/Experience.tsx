import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Briefcase, Calendar } from 'lucide-react'

const experienceData = [
  {
    title: 'Software Engineering Intern',
    company: 'NAITA Head Office',
    period: '2024 - Present',
    type: 'Internship',
    description: 'Working as a Software Engineering intern at the National Apprentice and Industrial Training Authority (NAITA) head office, contributing to technical solutions and gaining hands-on experience in software development.',
    skills: ['Software Development', 'Technical Solutions', 'Team Collaboration']
  },
  {
    title: 'School Leaver Trainee',
    company: 'Bank of Ceylon',
    period: 'Aug 2021 - Feb 2022',
    type: 'Training Program',
    description: 'Completed customer service training at Bank of Ceylon - Thihagoda Branch, focusing on front and back office operations. Demonstrated honesty, punctuality, and professionalism during the program.',
    skills: ['Customer Service', 'Banking Operations', 'Professional Communication']
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 rounded-full mb-4">
            <Briefcase className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-medium text-orange-500">Career Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-primary bg-clip-text text-transparent" data-testid="heading-experience">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            🚀 Building expertise through hands-on roles in technology and financial services
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border"></div>

          <div className="space-y-8">
            {experienceData.map((exp, index) => (
              <div 
                key={index} 
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                data-testid={`timeline-item-${index}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-3 h-3 bg-primary rounded-full border-2 border-background"></div>

                {/* Content */}
                <div className={`flex-1 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
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
                      <CardTitle className="text-xl" data-testid={`text-job-title-${index}`}>
                        {exp.title}
                      </CardTitle>
                      <CardDescription className="text-base font-medium" data-testid={`text-company-${index}`}>
                        {exp.company}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4" data-testid={`text-description-${index}`}>
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <Badge 
                            key={skillIndex} 
                            variant="secondary"
                            data-testid={`badge-exp-skill-${skill.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                          >
                            {skill}
                          </Badge>
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