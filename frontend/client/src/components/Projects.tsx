import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Github, Code, Cpu, Rocket } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import flowCaseImage from '../assets/modern_legal_case_m.png'
import studentSystemImage from '../assets/student_management_s.gif'
import carGameImage from '../assets/2d_car_racing_game.gif'
import medicareImage from '../assets/medicare.png'
import medscriptImage from '../assets/medscript.png'
import demoVideo from '../assets/2d_cargame_demo_video.mp4'
import { VideoPopup } from './VideoPopup'

const allProjectsData = [
  {
    title: 'Flow Case Management System',
    description: 'A secure legal case system using React and Supabase with encryption, authentication, and real-time alerts.',
    type: 'Individual Project',
    technologies: ['React', 'Supabase', 'Encryption', 'Authentication'],
    image: flowCaseImage,
    githubUrl: 'https://github.com/LakshanRamawickrama/Lowyer-Case.git',
    liveUrl: '', 
  },
  {
    title: 'Student Management System',
    description: 'Cross-platform Student System using Flutter & Firebase for real-time data, attendance, grades, and reports.',
    type: 'Group Project',
    technologies: ['Flutter', 'Firebase', 'Real-time Data', 'Cross-platform'],
    image: studentSystemImage,
    githubUrl: 'https://github.com/LakshanRamawickrama/Student_m_System.git',
    liveUrl: '', 
  },
  {
    title: '2D Car Racing Game',
    description: '2D car racing game built with Unity and Inkscape, featuring car controls, AI, scoring, and UI for a fun experience.',
    type: 'Individual Project',
    technologies: ['Unity', 'C#', 'Inkscape', 'Game Development'],
    image: carGameImage,
    githubUrl: 'https://github.com/LakshanRamawickrama/Speed-Rider.git',
    liveUrl: demoVideo, 
  },
  {
    title: 'MediCare',
    description: 'Hospital Management System setup with React frontend, Express backend, SQLite database, sample patients, beds, reports, and role-based authentication.',
    type: 'Individual Project',
    technologies: ['React', 'Express', 'Typescript'],
    image: medicareImage,
    githubUrl: 'https://github.com/LakshanRamawickrama/MedRecordApp.git',
    liveUrl: '',
  },
  {
    title: 'MedScript',
    description: 'A web-based Medical Prescription Upload System with two roles User and Pharmacy with React, Supabase.Pharmacies can view uploads, create and send quotations to users, and receive notifications when users accept or reject quotations..',
    type: 'Individual Project',
    technologies: ['React', 'Tailwind', 'Supabase'],
    image: medscriptImage,
    githubUrl: 'https://github.com/LakshanRamawickrama/Medscript.git',
    liveUrl: '',
  },
]

export function Projects() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)
  const [visibleProjects, setVisibleProjects] = useState(3)
  const floatingIcons = [Code, Cpu, Rocket]

  const loadMoreProjects = () => setVisibleProjects(allProjectsData.length)
  const showLessProjects = () => setVisibleProjects(3)

  return (
    <section id="projects" className="relative py-16 bg-muted/30 overflow-hidden">
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
          style={{ top: `${10 + i * 35}%`, left: `${5 + i * 30}%`, fontSize: 64 }}
        >
          <Icon />
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-4">
            <ExternalLink className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Portfolio Showcase</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            💻 Real-world applications showcasing full-stack development skills and innovative problem-solving
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {allProjectsData.slice(0, visibleProjects).map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <Card className="flex flex-col h-full border-2 border-transparent hover:border-primary transition-all shadow-lg hover:shadow-xl overflow-hidden">
                  {/* Project Image */}
                  <div className="relative h-64 w-full overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <Badge
                      variant="secondary"
                      className="absolute top-3 left-3 bg-background/90 backdrop-blur-sm text-xs font-medium"
                    >
                      {project.type}
                    </Badge>
                  </div>

                  {/* Title & Description */}
                  <CardHeader className="flex-grow px-4 py-3">
                    <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground mt-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  {/* Technologies */}
                  <CardContent className="px-4 py-2">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">{tech}</Badge>
                      ))}
                    </div>
                  </CardContent>

                  {/* Original Buttons */}
                  <CardFooter className="gap-2 pt-4 flex flex-wrap">
                    {/* GitHub Button */}
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2 flex-1 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 p-0"
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full h-full gap-2 px-4 py-2"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </Button>

                    {/* Demo Button */}
                    <Button
                      size="sm"
                      className="gap-2 flex-1 hover:bg-accent/10 transition-all duration-300 p-0"
                      onClick={() => {
                        if (project.liveUrl && project.liveUrl !== '#') {
                          setActiveVideo(project.liveUrl)
                        } else {
                          alert('Demo not available for this project')
                        }
                      }}
                    >
                      <div className="flex items-center justify-center w-full h-full gap-2 px-4 py-2">
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </div>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* More / Show Less Button */}
        <div className="text-center mt-12">
          {visibleProjects < allProjectsData.length ? (
            <Button onClick={loadMoreProjects} size="lg" className="px-8 py-4">
              More Projects
            </Button>
          ) : (
            <Button onClick={showLessProjects} size="lg" className="px-8 py-4">
              Show Less
            </Button>
          )}
        </div>
      </div>

      {/* Video Popup */}
      {activeVideo && <VideoPopup videoSrc={activeVideo} onClose={() => setActiveVideo(null)} />}
    </section>
  )
}
