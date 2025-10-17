import React from 'react'
import { motion, Variants } from 'framer-motion'
import { Feather, Code, User, Award } from 'lucide-react'

// Feature type
interface Feature {
  title: string
  description: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  color: string
}

// Features array
const features: Feature[] = [
  {
    title: 'Creative Design',
    description: 'Beautiful, intuitive interfaces',
    icon: Feather,
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Clean Code',
    description: 'Writing maintainable, scalable code',
    icon: Code,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'User Focus',
    description: 'Prioritizing user experience',
    icon: User,
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Quality',
    description: 'Delivering excellence in every project',
    icon: Award,
    color: 'from-orange-500 to-yellow-500',
  },
]

// Motion variants for container
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

// Motion variants for each card
const getCardVariants = (index: number): Variants => ({
  hidden: {
    opacity: 0,
    y: 30,
    x: window.innerWidth < 768 ? (index % 2 === 0 ? -50 : 50) : 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
})

export const AboutMe: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-b from-background via-muted/10 to-background overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-12">
        {/* Header */}
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>

        {/* Short Summary */}
        <motion.p
          className="max-w-3xl text-center text-lg text-muted-foreground leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          I am <strong>R.G.R. Lakshan</strong>, a passionate Full Stack Developer and Software Engineer Intern at{' '}
          <span className="text-primary font-semibold">NAITA Head Office</span>. I specialize in building modern,
          user-friendly web applications with <strong>React, Node.js, and TypeScript</strong>. I love turning complex
          problems into elegant digital solutions, learning new technologies, and creating applications that deliver real
          impact.
        </motion.p>

        {/* Feature Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 w-full mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center px-6 py-8 rounded-2xl shadow-lg border border-primary/10 bg-gradient-to-br from-white/5 to-white/10 hover:from-white/10 hover:to-white/20 transition-all duration-500 cursor-default"
                variants={getCardVariants(index)}
                whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(0,0,0,0.15)' }}
              >
                <div
                  className={`w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br ${feature.color} mb-4 text-white shadow-md`}
                >
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
