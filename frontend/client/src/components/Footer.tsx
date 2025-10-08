import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-muted/50 via-muted/70 to-muted/50 border-t py-12 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-0 right-1/3 w-24 h-24 bg-accent/5 rounded-full blur-lg"></div>
      </div>
      
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-base font-medium mb-2">
              © {currentYear} <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-bold">R.G.R. Lakshan</span>
            </p>
            <p className="text-sm text-muted-foreground mb-1">
              Software Engineering Intern at NAITA Head Office
            </p>
            <p className="text-xs text-muted-foreground">
              🌟 Crafted with passion • Built with React & Node.js
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="icon"
                className="w-10 h-10 rounded-xl hover:bg-primary/10 hover:scale-110 transition-all duration-300"
                asChild
                data-testid="footer-linkedin"
              >
                <a href="https://linkedin.com/in/lakshan-ramawickrama-865532245" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 text-blue-600" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="w-10 h-10 rounded-xl hover:bg-primary/10 hover:scale-110 transition-all duration-300"
                asChild
                data-testid="footer-github"
              >
                <a href="https://github.com/LakshanRamawickrama" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="w-10 h-10 rounded-xl hover:bg-primary/10 hover:scale-110 transition-all duration-300"
                asChild
                data-testid="footer-email"
              >
                <a href="mailto:rgrlakshan@gmail.com">
                  <Mail className="w-5 h-5 text-red-500" />
                </a>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground text-center">
              Let's build something amazing together! 🚀
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}