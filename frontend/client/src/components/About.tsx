import React from 'react'
import { motion, Variants } from 'framer-motion'
import { Feather, Code, User, Award } from 'lucide-react'

/* ===== Feature Type ===== */
interface Feature {
  title: string
  description: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  color: string
}

/* ===== Feature Data ===== */
const features: Feature[] = [
  { title: 'Creative Design', description: 'Beautiful, intuitive interfaces', icon: Feather, color: 'from-purple-500 to-pink-500' },
  { title: 'Clean Code', description: 'Writing maintainable, scalable code', icon: Code, color: 'from-blue-500 to-cyan-500' },
  { title: 'User Focus', description: 'Prioritizing user experience', icon: User, color: 'from-green-500 to-emerald-500' },
  { title: 'Quality', description: 'Delivering excellence in every project', icon: Award, color: 'from-orange-500 to-yellow-500' },
]

/* ===== Letter Animation for Header ===== */
const splitText = (text: string) => text.split('')

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 15,
      delay: i * 0.05, // stagger letters
    },
  }),
}

/* ===== Card Variants ===== */
const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 120, damping: 20 } },
}

/* ===== AboutMe Component ===== */
export const AboutMe: React.FC = () => {
  const headerText = 'About Me'
  const letters = splitText(headerText)

  return (
    <section className="relative py-24 bg-gradient-to-b from-background via-muted/10 to-background overflow-hidden" id="about">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-12">

        {/* Animated Header */}
        <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent text-center flex justify-center">
          {letters.map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              className="inline-block"
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </h2>

        {/* Summary */}
        <motion.p
          className="max-w-3xl text-center text-lg text-muted-foreground leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
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
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br ${feature.color} mb-4 text-white shadow-md`}>
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
