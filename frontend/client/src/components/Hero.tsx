import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Download, Mail, Github, Linkedin, ArrowDown, Sparkles } from 'lucide-react'
import profileImage from '../assets/profile-pic.png'

export function Hero() {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact')
    contactSection?.scrollIntoView({ behavior: 'smooth' })
  }

 const handleResumeDownload = async () => {
  setIsDownloading(true)
  try {
    const response = await fetch('http://127.0.0.1:8000/api/resume/')
    const data = await response.json()

    if (data.length > 0) {
      const resumeUrl = `http://127.0.0.1:8000${data[0].file}`;
      window.open(resumeUrl, '_blank');
    } else {
      alert('No resume uploaded yet!')
    }
  } catch (error) {
    console.error('Error fetching resume:', error)
    alert('Unable to fetch resume. Please try again later.')
  } finally {
    setIsDownloading(false)
  }
}


  const handleScrollDown = () => {
    const skillsSection = document.getElementById('skills')
    skillsSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center py-16 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-accent/10 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-28 h-28 bg-primary/8 rounded-full blur-xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-accent/5 rounded-full blur-lg animate-pulse delay-3000"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          {/* Profile image */}
          <div className="relative mx-auto mb-8 w-52 h-52">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-md"></div>
            <div className="relative w-48 h-48 mx-auto bg-gradient-to-br from-primary/10 to-accent/10 rounded-full p-1 overflow-hidden">
              <img
                src={profileImage}
                alt="R.G.R. Lakshan - Software Engineering Intern"
                className="w-full h-full object-cover rounded-full"
                data-testid="img-profile"
              />
            </div>
            <Sparkles className="absolute top-2 right-2 w-6 h-6 text-primary animate-pulse" />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent" data-testid="text-name">
            R.G.R. LAKSHAN
          </h1>

          <div className="relative mb-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-2" data-testid="text-role">
              Software Engineering Intern
            </h2>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-primary">Currently at NAITA Head Office</span>
            </div>
          </div>

          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-muted-foreground leading-relaxed" data-testid="text-summary">
            🚀 Passionate about creating innovative tech solutions • 💡 Problem-solver with expertise in React, Node.js & Flutter • 
            📚 Continuously learning and growing in the dynamic world of software engineering
          </p>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button 
            onClick={handleContactClick}
            size="lg"
            className="gap-2 px-8 py-3 text-lg font-semibold bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300"
            data-testid="button-contact"
          >
            <Mail className="w-5 h-5" />
            Let's Connect
          </Button>

          <Button 
            variant="outline" 
            size="lg"
            onClick={handleResumeDownload}
            className="gap-2 px-8 py-3 text-lg font-semibold border-2 hover:bg-primary/5 transition-all duration-300"
            data-testid="button-resume"
          >
            <Download className="w-5 h-5" />
            {isDownloading ? 'Loading...' : 'View Resume'}
          </Button>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-6 mb-16">
          <Button variant="ghost" size="icon" className="w-12 h-12 rounded-xl hover:bg-primary/10 hover:scale-110 transition-all duration-300" asChild data-testid="link-linkedin">
            <a href="https://linkedin.com/in/lakshan-ramawickrama-865532245" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6 text-blue-600" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="w-12 h-12 rounded-xl hover:bg-primary/10 hover:scale-110 transition-all duration-300" asChild data-testid="link-github">
            <a href="https://github.com/LakshanRamawickrama" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="w-12 h-12 rounded-xl hover:bg-primary/10 hover:scale-110 transition-all duration-300" asChild data-testid="link-email">
            <a href="mailto:rgrlakshan@gmail.com">
              <Mail className="w-6 h-6 text-red-500" />
            </a>
          </Button>
        </div>

        {/* Scroll indicator */}
        <Button variant="ghost" onClick={handleScrollDown} className="animate-bounce hover:animate-none transition-all duration-300" data-testid="button-scroll-down">
          <ArrowDown className="w-6 h-6" />
        </Button>
      </div>
    </section>
  )
}
