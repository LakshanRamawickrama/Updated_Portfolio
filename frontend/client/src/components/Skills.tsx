import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Code, Database, Wrench, Star, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'

const skillsData = [
  {
    category: 'Programming Languages',
    icon: Code,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'JavaScript', level: 90 },
      { name: 'Java', level: 85 },
      { name: 'C#', level: 80 },
      { name: 'HTML/CSS', level: 95 },
    ],
  },
  {
    category: 'Databases & Backend',
    icon: Database,
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'MySQL', level: 85 },
      { name: 'Supabase', level: 80 },
      { name: 'Firebase', level: 75 },
      { name: 'Node.js', level: 80 },
    ],
  },
  {
    category: 'Frameworks & Tools',
    icon: Wrench,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'Flutter', level: 75 },
      { name: 'Unity', level: 70 },
      { name: 'Git/GitHub', level: 85 },
    ],
  },
]

export function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-4 bg-gradient-to-br from-background via-muted/20 to-background"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Technical Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            🔧 A powerful arsenal of technologies mastered through hands-on projects and real-world experience
          </p>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillsData.map((category, index) => {
            const IconComponent = category.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.03 }}
              >
                <Card className="group relative overflow-hidden border-2 hover:border-primary/20 transition-all duration-500">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  ></div>
                  <CardHeader className="text-center pb-6 relative">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: skillIndex * 0.15 }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <Badge
                            variant="secondary"
                            className="hover:bg-primary/10 transition-colors duration-300"
                          >
                            {skill.name}
                          </Badge>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <TrendingUp className="w-3 h-3" />
                            {skill.level}%
                          </div>
                        </div>
                        {/* Animated Skill Progress */}
                        <div className="w-full bg-muted/50 rounded-full h-2 overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: skillIndex * 0.2 }}
                          ></motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Skills */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold mb-6">Additional Proficiencies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Problem Solving',
              'Team Leadership',
              'Fast Learning',
              'Analytical Thinking',
              'Project Management',
              'Cloud Computing',
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
                >
                  ✨ {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
