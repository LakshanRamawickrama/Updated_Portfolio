import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Github, Code, Cpu, Rocket } from 'lucide-react'
import { motion } from 'framer-motion'
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
    liveUrl: '#',
  },
  {
    title: 'Student Management System',
    description: 'Cross-platform Student System using Flutter & Firebase for real-time data, attendance, grades, and reports.',
    type: 'Group Project',
    technologies: ['Flutter', 'Firebase', 'Real-time Data', 'Cross-platform'],
    image: studentSystemImage,
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: '2D Car Racing Game',
    description: '2D car racing game built with Unity and Inkscape, featuring car controls, AI, scoring, and UI for a fun experience.',
    type: 'Individual Project',
    technologies: ['Unity', 'C#', 'Inkscape', 'Game Development'],
    image: carGameImage,
    githubUrl: '#',
    liveUrl: '#',
  },
]

export function Projects() {
  const handleProjectAction = (action: string, project: string) => {
    console.log(`${action} clicked for ${project}`)
  }

  const floatingIcons = [Code, Cpu, Rocket]

  return (
    <section id="projects" className="py-16 px-4 relative bg-muted/30 overflow-hidden">
      {/* Floating Background Icons */}
      {floatingIcons.map((Icon, i) => (
        <motion.div
          key={i}
          className="absolute text-primary/10"
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 10 + i * 3,
            ease: 'easeInOut',
            delay: i,
          }}
          style={{
            top: `${10 + i * 35}%`,
            left: `${5 + i * 30}%`,
            fontSize: 64,
          }}
        >
          <Icon />
        </motion.div>
      ))}

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-4">
            <ExternalLink className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Portfolio Showcase</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            💻 Real-world applications showcasing full-stack development skills and innovative problem-solving
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="group flex flex-col overflow-hidden border-2 hover:border-primary/20 transition-all duration-500 shadow-lg hover:shadow-xl">
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
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs transition-all duration-300 group-hover:scale-105"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="gap-2 pt-4 flex flex-wrap">
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 flex-1 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
                    onClick={() => handleProjectAction('GitHub', project.title)}
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="gap-2 flex-1 hover:bg-accent/10 transition-all duration-300"
                    onClick={() => handleProjectAction('Live Demo', project.title)}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
