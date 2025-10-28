import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Code, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const floatingIcons = [Code, Rocket];

  return (
    <footer className="relative py-12 px-4 bg-hero-gradient border-t overflow-hidden">
      {/* Floating Icons */}
      {floatingIcons.map((Icon, i) => (
        <motion.div
          key={i}
          className="absolute text-primary/10"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 12 + i * 3,
            ease: 'easeInOut',
            delay: i,
          }}
          style={{
            top: `${10 + i * 40}%`,
            left: `${5 + i * 35}%`,
            fontSize: 64,
          }}
        >
          <Icon />
        </motion.div>
      ))}

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-base font-medium mb-2">
              © {currentYear}{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-bold">
                R.G.R. Lakshan
              </span>
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
              >
                <a
                  href="https://linkedin.com/in/lakshan-ramawickrama-865532245"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5 text-blue-600" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-10 h-10 rounded-xl hover:bg-primary/10 hover:scale-110 transition-all duration-300"
                asChild
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
  );
}
