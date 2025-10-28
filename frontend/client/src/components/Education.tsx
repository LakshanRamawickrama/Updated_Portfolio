import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, Award, Code, Cpu, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const educationData = [
  {
    degree: 'Higher National Diploma in Information Technology',
    institution: 'SLIATE Galle',
    period: '2023 - Present',
    status: 'In Progress',
    description:
      'Reading for a Higher National Diploma in Information Technology at Sri Lanka Institute of Advanced Technological Education (SLIATE).',
    type: 'Higher Education',
  },
  {
    degree: 'Advanced Level',
    institution: 'Matara Central College',
    period: '2020',
    status: 'Completed',
    description: 'Completed with one (B) pass and two (S) passes in Physical Science stream.',
    type: 'Secondary Education',
  },
  {
    degree: 'Ordinary Level',
    institution: 'Matara Central College',
    period: '2016',
    status: 'Completed',
    description: 'Completed with four (A) passes, two (B) passes and three (C) passes.',
    type: 'Secondary Education',
  },
];

const coursesData = [
  {
    title: 'Web Development',
    provider: 'Open Learning Platform University of Moratuwa',
    status: 'In Progress',
  },
  {
    title: 'Project Management',
    provider: 'Open Learning Platform University of Moratuwa',
    status: 'In Progress',
  },
];

const certificationsData = [
  {
    title: 'Introduction to Cloud',
    provider: 'IBM - Cognitive Class',
    date: 'Aug 2025',
    description:
      'Completed training on cloud computing fundamentals, service models, deployment strategies, and emerging technologies.',
  },
  {
    title: 'Certificate of English Language',
    provider: 'British Way English Academy - Matara',
    date: 'July 2020',
    description:
      'Successfully completed a 540-hour full-time Diploma in English, enhancing proficiency in written and spoken English, grammar, and communication skills.',
  },
];

export function Education() {
  const floatingIcons = [Code, Cpu, Rocket];

  return (
    <section id="education" className="py-16 px-4 relative bg-hero-gradient overflow-hidden">
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
            top: `${15 + i * 30}%`,
            left: `${5 + i * 35}%`,
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 rounded-full mb-4">
            <GraduationCap className="w-4 h-4 text-purple-500" />
            <span className="text-sm font-medium text-purple-500">Academic Excellence</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-primary bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            📚 Continuous learning journey in technology and professional development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Formal Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-primary" />
              Formal Education
            </h3>
            <div className="space-y-4">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="hover-elevate shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <Badge variant="outline">{edu.type}</Badge>
                        <Badge
                          variant={edu.status === 'In Progress' ? 'default' : 'secondary'}
                          className="gap-1"
                        >
                          <Calendar className="w-3 h-3" />
                          {edu.period}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg">{edu.degree}</CardTitle>
                      <CardDescription>{edu.institution}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{edu.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Courses & Certifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-primary" />
              Courses & Certifications
            </h3>

            {/* Current Courses */}
            <div className="mb-6">
              <h4 className="text-lg font-medium mb-3 text-muted-foreground">Current Courses</h4>
              <div className="space-y-3">
                {coursesData.map((course, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className="hover-elevate shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="pt-4">
                        <div className="flex justify-between items-start gap-2 mb-2">
                          <h5 className="font-medium">{course.title}</h5>
                          <Badge variant="default" className="text-xs">
                            {course.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{course.provider}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h4 className="text-lg font-medium mb-3 text-muted-foreground">Certifications</h4>
              <div className="space-y-3">
                {certificationsData.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className="hover-elevate shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="pt-4">
                        <div className="flex justify-between items-start gap-2 mb-2">
                          <h5 className="font-medium">{cert.title}</h5>
                          <Badge variant="secondary" className="text-xs">
                            {cert.date}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{cert.provider}</p>
                        <p className="text-xs text-muted-foreground">{cert.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
