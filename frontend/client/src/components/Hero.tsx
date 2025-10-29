import { Button } from '@/components/ui/button';
import { Download, Mail, Github, Linkedin, ArrowDown, Sparkles, Code, Cpu, Rocket } from 'lucide-react';
import profileImage from '../assets/profile-pic.png';
import resumePDF from '../assets/R.G.R. LAKSHAN - CV.pdf';
import { motion, useMotionValue } from 'framer-motion';
import { useEffect } from 'react';

export function Hero() {
  // Scroll handlers
  const handleContactClick = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  const handleResumeDownload = () => window.open(resumePDF, '_blank');
  const handleScrollDown = () => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });

  // 3D Tilt Effect
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      rotateX.set(-(e.clientY / innerHeight - 0.5) * 20);
      rotateY.set((e.clientX / innerWidth - 0.5) * 20);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [rotateX, rotateY]);

  // Floating background icons
  const floatingIcons = [Code, Cpu, Rocket];

  return (
    <section className="relative min-h-screen flex items-center justify-center py-16 px-4 overflow-hidden bg-hero-gradient">
      
      {/* Floating Background Icons */}
      {floatingIcons.map((Icon, i) => (
        <motion.div
          key={i}
          className="absolute text-primary/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.1, 0.3, 0.1], y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 10 + i * 3, ease: 'easeInOut', delay: i }}
          style={{ top: `${10 + i * 30}%`, left: `${5 + i * 30}%`, fontSize: 64 }}
        >
          <Icon />
        </motion.div>
      ))}

      {/* Glowing background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* 3D floating profile card */}
        <motion.div
          className="relative mx-auto mb-10 w-64 h-64"
          style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
          transition={{ type: 'spring', stiffness: 150, damping: 18 }}
        >
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary blur-xl opacity-60"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
          />
          <motion.div
            className="relative w-full h-full rounded-full backdrop-blur-md bg-white/10 border border-white/10 overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.3)]"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 150 }}
          >
            <img src={profileImage} alt="R.G.R. Lakshan" className="w-full h-full object-cover rounded-full" />
            <Sparkles className="absolute bottom-3 right-3 w-6 h-6 text-primary animate-pulse" />
          </motion.div>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          R.G.R. LAKSHAN
        </motion.h1>

        {/* Role */}
        <motion.div
          className="relative mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
            Software Engineer
          </h2>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 shadow-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-primary">
              Currently at NAITA Head Office
            </span>
          </div>
        </motion.div>

        {/* Summary */}
        <motion.p
          className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-muted-foreground leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          🚀 Passionate about crafting innovative digital experiences • 💡 Skilled in React, Node.js & Flutter • 🌱 Eager to learn, create, and inspire through technology
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <Button onClick={handleContactClick} size="lg" className="gap-2 px-8 py-3 text-lg font-semibold bg-gradient-to-r from-primary to-primary/80 hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <Mail className="w-5 h-5" /> Let's Connect
          </Button>

          <Button variant="outline" size="lg" onClick={handleResumeDownload} className="relative overflow-hidden gap-2 px-8 py-3 text-lg font-semibold border-2 transition-all duration-300 hover:scale-105 hover:border-primary hover:bg-gradient-to-r hover:from-primary/10 hover:via-primary/5 hover:to-primary/10">
            <Download className="w-5 h-5" /> View Resume
            <span className="absolute top-0 left-0 w-0 h-full bg-white/20 transform -skew-x-12 transition-all duration-500 hover:w-full"></span>
          </Button>
        </motion.div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-16">
          {[
            { href: 'https://linkedin.com/in/lakshan-ramawickrama-865532245', icon: <Linkedin className="w-6 h-6 text-blue-600" /> },
            { href: 'https://github.com/LakshanRamawickrama', icon: <Github className="w-6 h-6" /> },
            { href: 'mailto:rgrlakshan@gmail.com', icon: <Mail className="w-6 h-6 text-red-500" /> },
          ].map((item, i) => (
            <motion.a key={i} href={item.href} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2, y: -3 }} className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 hover:bg-primary/10 transition-all shadow-md">
              {item.icon}
            </motion.a>
          ))}
        </div>

        {/* Scroll indicator */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
          <Button variant="ghost" onClick={handleScrollDown} className="animate-bounce hover:animate-none">
            <ArrowDown className="w-6 h-6" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
