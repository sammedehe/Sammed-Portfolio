'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { BookOpen, GraduationCap, Users, FlaskConical, Globe, Megaphone, Code } from 'lucide-react'

const contributions = [
  {
    category: 'Academic Contributions',
    icon: BookOpen,
    items: [
      'Contributed to syllabus restructuring and curriculum development in Cyber Security and Digital Science programmes',
      'Developed practical laboratory manuals and workbooks aligned with industry requirements',
      'Designed outcome-based practical sessions covering Ethical Hacking, SIEM, Linux Security, Digital Forensics, and Network Security',
      'Assisted in building industry-oriented cybersecurity education frameworks',
    ],
  },
  {
    category: 'Cyber Security Awareness',
    icon: Megaphone,
    items: [
      'Conducted cybersecurity awareness sessions for students, educational institutions, and community groups',
      'Delivered training on cyber hygiene, phishing attacks, social engineering, online fraud prevention, and safe internet practices',
      'Participated in the Cyber Doot Initiative, promoting cybersecurity awareness among non-technical audiences',
      'Advocated responsible technology usage and cybersecurity best practices through workshops',
    ],
  },
  {
    category: 'Research & Student Mentorship',
    icon: GraduationCap,
    items: [
      'Supervised postgraduate cybersecurity projects in Ethical Hacking, SOC Operations, Digital Forensics, and Threat Detection',
      'Guided students in research methodology, technical documentation, and project implementation',
      'Mentored students for cybersecurity competitions, research activities, and practical security projects',
    ],
  },
  {
    category: 'Laboratory Development',
    icon: FlaskConical,
    items: [
      'Designed and implemented practical cybersecurity laboratories for Ethical Hacking, SIEM, Linux Security, and Penetration Testing',
      'Developed hands-on exercises using Kali Linux, Splunk, Wireshark, Burp Suite, Nmap, and OpenVAS',
      'Created real-world attack simulation scenarios to enhance practical cybersecurity skills',
    ],
  },
  {
    category: 'Website Development',
    icon: Code,
    items: [
      'Designed and developed responsive websites and digital platforms using modern web technologies',
      'Focused on usability, performance, accessibility, and security best practices',
      'Developed academic, professional, and portfolio websites',
    ],
  },
]

export default function ContributionsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contributions" ref={ref} className="relative py-24 px-4">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          {/* Section header */}
          <div className="text-center space-y-4">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-primary font-mono text-sm tracking-wider uppercase"
            >
              Impact & Outreach
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold font-mono"
            >
              Contributions & <span className="gradient-text">Initiatives</span>
            </motion.h2>
          </div>

          {/* Contributions grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {contributions.map((section, index) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                className="glass-card p-6 rounded-xl hover:bg-secondary/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <section.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg font-mono">{section.category}</h3>
                </div>
                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
