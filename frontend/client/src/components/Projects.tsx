import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Github } from 'lucide-react'
import flowCaseImage from '../assets/modern_legal_case_m.png'
import studentSystemImage from '../assets/student_management_s.gif'
import carGameImage from '../assets/2d_car_racing_game.gif'

const projectsData = [
  {
    title: 'Flow Case Management System',
    description: 'A secure legal case system using React and Supabase with encryption, authentication, and real-time alerts.',
    type: 'Individual Project',
    technologies: ['React', 'Supabase', 'Encryption', 'Authentication'],
    image: flowCaseImage,
    githubUrl: '#',
    liveUrl: '#'
  },
  {
    title: 'Student Management System',
    description: 'Cross-platform Student System using Flutter & Firebase for real-time data, attendance, grades, and reports.',
    type: 'Group Project',
    technologies: ['Flutter', 'Firebase', 'Real-time Data', 'Cross-platform'],
    image: studentSystemImage,
    githubUrl: '#',
    liveUrl: '#'
  },
  {
    title: '2D Car Racing Game',
    description: '2D car racing game built with Unity and Inkscape, featuring car controls, AI, scoring, and UI for a fun experience.',
    type: 'Individual Project',
    technologies: ['Unity', 'C#', 'Inkscape', 'Game Development'],
    image: carGameImage,
    githubUrl: '#',
    liveUrl: '#'
  }
]

export function Projects() {
  const handleProjectAction = (action: string, project: string) => {
    console.log(`${action} clicked for ${project}`)
    // TODO: Implement actual project links
  }

  return (
    <section id="projects" className="py-16 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-4">
            <ExternalLink className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Portfolio Showcase</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent" data-testid="heading-projects">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            💻 Real-world applications showcasing full-stack development skills and innovative problem-solving
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <Card key={index} className="hover-elevate flex flex-col group overflow-hidden border-2 hover:border-primary/20 transition-all duration-500" data-testid={`card-project-${index}`}>
              {/* Project Image */}
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
              
              <CardHeader className="flex-grow">
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300" data-testid={`text-project-title-${index}`}>
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed" data-testid={`text-project-description-${index}`}>
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="flex-1">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
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
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="gap-2 flex-1"
                  onClick={() => handleProjectAction('GitHub', project.title)}
                  data-testid={`button-github-${index}`}
                >
                  <Github className="w-4 h-4" />
                  Code
                </Button>
                <Button 
                  size="sm" 
                  className="gap-2 flex-1"
                  onClick={() => handleProjectAction('Live Demo', project.title)}
                  data-testid={`button-demo-${index}`}
                >
                  <ExternalLink className="w-4 h-4" />
                  Demo
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}