import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GraduationCap, Calendar, Award } from 'lucide-react'

const educationData = [
  {
    degree: 'Higher National Diploma in Information Technology',
    institution: 'SLIATE Galle',
    period: '2023 - Present',
    status: 'In Progress',
    description: 'Reading for a Higher National Diploma in Information Technology at Sri Lanka Institute of Advanced Technological Education (SLIATE).',
    type: 'Higher Education'
  },
  {
    degree: 'Advanced Level',
    institution: 'Matara Central College',
    period: '2020',
    status: 'Completed',
    description: 'Completed with one (B) pass and two (S) passes in Physical Science stream.',
    type: 'Secondary Education'
  },
  {
    degree: 'Ordinary Level',
    institution: 'Matara Central College',
    period: '2016',
    status: 'Completed',
    description: 'Completed with four (A) passes, two (B) passes and three (C) passes.',
    type: 'Secondary Education'
  }
]

const coursesData = [
  {
    title: 'Web Development',
    provider: 'Open Learning Platform University of Moratuwa',
    status: 'In Progress'
  },
  {
    title: 'Project Management',
    provider: 'Open Learning Platform University of Moratuwa',
    status: 'In Progress'
  }
]

const certificationsData = [
  {
    title: 'Introduction to Cloud',
    provider: 'IBM - Cognitive Class',
    date: 'Aug 2025',
    description: 'Completed training on cloud computing fundamentals, service models, deployment strategies, and emerging technologies.'
  },
  {
    title: 'Certificate of English Language',
    provider: 'British Way English Academy - Matara',
    date: 'July 2020',
    description: 'Successfully completed a 540-hour full-time Diploma in English, enhancing proficiency in written and spoken English, grammar, and communication skills.'
  }
]

export function Education() {
  return (
    <section id="education" className="py-16 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 rounded-full mb-4">
            <GraduationCap className="w-4 h-4 text-purple-500" />
            <span className="text-sm font-medium text-purple-500">Academic Excellence</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-primary bg-clip-text text-transparent" data-testid="heading-education">
            Education & Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            📚 Continuous learning journey in technology and professional development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Formal Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-primary" />
              Formal Education
            </h3>
            <div className="space-y-4">
              {educationData.map((edu, index) => (
                <Card key={index} className="hover-elevate" data-testid={`card-education-${index}`}>
                  <CardHeader>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <Badge variant="outline">{edu.type}</Badge>
                      <Badge 
                        variant={edu.status === 'In Progress' ? 'default' : 'secondary'}
                        className="gap-1"
                      >
                        <Calendar className="w-3 h-3" />
                        {edu.period}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg" data-testid={`text-degree-${index}`}>
                      {edu.degree}
                    </CardTitle>
                    <CardDescription data-testid={`text-institution-${index}`}>
                      {edu.institution}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Courses & Certifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-primary" />
              Courses & Certifications
            </h3>
            
            {/* Current Courses */}
            <div className="mb-6">
              <h4 className="text-lg font-medium mb-3 text-muted-foreground">Current Courses</h4>
              <div className="space-y-3">
                {coursesData.map((course, index) => (
                  <Card key={index} className="hover-elevate" data-testid={`card-course-${index}`}>
                    <CardContent className="pt-4">
                      <div className="flex justify-between items-start gap-2 mb-2">
                        <h5 className="font-medium" data-testid={`text-course-title-${index}`}>
                          {course.title}
                        </h5>
                        <Badge variant="default" className="text-xs">
                          {course.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{course.provider}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h4 className="text-lg font-medium mb-3 text-muted-foreground">Certifications</h4>
              <div className="space-y-3">
                {certificationsData.map((cert, index) => (
                  <Card key={index} className="hover-elevate" data-testid={`card-certification-${index}`}>
                    <CardContent className="pt-4">
                      <div className="flex justify-between items-start gap-2 mb-2">
                        <h5 className="font-medium" data-testid={`text-cert-title-${index}`}>
                          {cert.title}
                        </h5>
                        <Badge variant="secondary" className="text-xs">
                          {cert.date}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{cert.provider}</p>
                      <p className="text-xs text-muted-foreground">{cert.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}