'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Building2, Calendar, ChevronRight } from 'lucide-react'

const experiences = [
  {
    institution: 'Savitribai Phule Pune University',
    role: 'Assistant Professor – B.Sc. Cyber Security & Blockchain Technology',
    period: 'June 2026 – Present',
    current: true,
    responsibilities: [
      'Mentoring students in Cyber Security and Blockchain Technology',
      'Designing practical cybersecurity and blockchain laboratories',
      'Guiding student research projects',
      'Curriculum enhancement and academic development',
      'Industry-oriented practical training',
    ],
  },
  {
    institution: 'MIT Arts, Commerce & Science College, Pune',
    role: 'Assistant Professor – Cyber Security',
    period: 'August 2025 – May 2026',
    current: false,
    responsibilities: [
      'Delivered hands-on training in Ethical Hacking and SOC Operations',
      'Designed practical cybersecurity labs aligned with MITRE ATT&CK',
      'Conducted penetration testing and vulnerability assessment practicals',
      'Mentored postgraduate students in cybersecurity research projects',
      'Guided students in Capture The Flag (CTF) activities',
    ],
  },
  {
    institution: 'Dr. D. Y. Patil Arts, Commerce & Science College, Pune',
    role: 'Assistant Professor – Cyber & Digital Science',
    period: 'January 2023 – July 2025',
    current: false,
    responsibilities: [
      'Taught Cyber Security, Linux Security, Digital Forensics, and Penetration Testing',
      'Developed SIEM-based practical labs using Splunk',
      'Designed cybersecurity curriculum and laboratory workbooks',
      'Mentored students in ethical hacking and vulnerability assessment',
      'Guided postgraduate cybersecurity research projects',
    ],
  },
]

export default function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" ref={ref} className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          {/* Section header */}
          <div className="space-y-4">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-primary font-mono text-sm tracking-wider uppercase"
            >
              Career Journey
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold font-mono"
            >
              Professional <span className="gradient-text">Experience</span>
            </motion.h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.institution}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.15, duration: 0.5 }}
                  className="relative pl-8 md:pl-20"
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-0 md:left-8 top-0 w-3 h-3 rounded-full -translate-x-1/2 ${
                    exp.current 
                      ? 'bg-primary ring-4 ring-primary/30 animate-pulse' 
                      : 'bg-muted-foreground'
                  }`} />

                  <div className="glass-card p-6 rounded-xl hover:bg-secondary/30 transition-all duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <Building2 className="w-4 h-4 text-primary" />
                          <h3 className="font-bold text-lg text-foreground">{exp.institution}</h3>
                          {exp.current && (
                            <span className="px-2 py-0.5 text-xs bg-primary/20 text-primary rounded-full font-mono">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-primary font-medium font-mono text-sm">{exp.role}</p>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Calendar className="w-4 h-4" />
                        <span className="font-mono">{exp.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                          <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
