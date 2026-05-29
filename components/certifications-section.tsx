'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Shield, ShieldCheck, UserCheck } from 'lucide-react'

const certifications = [
  {
    title: 'Certified Ethical Hacker (CEH)',
    issuer: 'EC-Council',
    icon: Shield,
    color: 'from-primary to-accent',
  },
  {
    title: 'Certified SOC Analyst (CSA)',
    issuer: 'EC-Council',
    icon: ShieldCheck,
    color: 'from-accent to-chart-3',
  },
  {
    title: 'Ethical Hacker Expert',
    issuer: 'Star Certification',
    icon: UserCheck,
    color: 'from-chart-3 to-chart-4',
  },
  {
    title: 'Cyber Secure User',
    issuer: 'Star Certification',
    icon: Award,
    color: 'from-chart-4 to-primary',
  },
]

const achievements = [
  '500+ Students Trained',
  '50+ Cybersecurity Sessions Conducted',
  '30+ Practical Labs Designed',
  'Multiple Research Publications',
  'Postgraduate Research Supervision',
  'Cybersecurity Curriculum Development',
  'SPPU Appreciation Certificate',
]

export default function CertificationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="certifications" ref={ref} className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          {/* Certifications */}
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <motion.span
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.2 }}
                className="text-primary font-mono text-sm tracking-wider uppercase"
              >
                Professional Credentials
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="text-3xl md:text-4xl font-bold font-mono"
              >
                Certifications & <span className="gradient-text">Achievements</span>
              </motion.h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  className="glass-card p-6 rounded-xl text-center group hover:bg-secondary/30 transition-all duration-300"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${cert.color} p-0.5`}>
                    <div className="w-full h-full bg-card rounded-xl flex items-center justify-center">
                      <cert.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                  <h3 className="font-bold text-sm mb-1 font-mono">{cert.title}</h3>
                  <p className="text-muted-foreground text-xs">{cert.issuer}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="glass-card p-8 rounded-xl"
          >
            <h3 className="text-xl font-bold font-mono mb-6 text-center">Key Achievements</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.7 + index * 0.05 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm"
                >
                  <Award className="w-4 h-4 text-primary" />
                  <span>{achievement}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
