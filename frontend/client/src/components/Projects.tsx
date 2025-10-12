import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Github } from 'lucide-react'
import axios from "axios"

interface Project {
  id: number
  title: string
  description: string
  type: string
  technologies: string[]
  image?: string
  githubUrl?: string
  liveUrl?: string
}

export function Projects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get<Project[]>("http://rgrlakshan.pythonanywhere.com/api/projects/")
      .then(res => setProjects(res.data))
      .catch(err => console.error("Error fetching projects:", err))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <section id="projects" className="py-16 px-4 bg-muted/30 text-center">
        <p className="text-lg text-muted-foreground">Loading projects...</p>
      </section>
    )
  }

  return (
    <section id="projects" className="py-16 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-4">
            <ExternalLink className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Portfolio Showcase</span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent"
            data-testid="heading-projects"
          >
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            💻 Real-world applications showcasing full-stack development skills and innovative problem-solving
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="hover-elevate flex flex-col group overflow-hidden border-2 hover:border-primary/20 transition-all duration-500"
              data-testid={`card-project-${index}`}
            >
              {/* Project Image */}
              {project.image && (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <Badge
                    variant="secondary"
                    className="absolute top-3 left-3 bg-background/90 backdrop-blur-sm text-xs font-medium"
                  >
                    {project.type}
                  </Badge>
                </div>
              )}

              <CardHeader className="flex-grow">
                <CardTitle
                  className="text-xl group-hover:text-primary transition-colors duration-300"
                  data-testid={`text-project-title-${index}`}
                >
                  {project.title}
                </CardTitle>
                <CardDescription
                  className="text-muted-foreground leading-relaxed"
                  data-testid={`text-project-description-${index}`}
                >
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1">
                <div className="flex flex-wrap gap-2">
                  {project.technologies?.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="text-xs"
                      data-testid={`badge-tech-${tech.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="gap-2 pt-4">
                {project.githubUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 flex-1"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                )}
                {project.liveUrl && (
                  <Button
                    size="sm"
                    className="gap-2 flex-1"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
