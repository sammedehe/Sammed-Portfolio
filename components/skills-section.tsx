'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skills = [
  { name: 'Ethical Hacking', category: 'core' },
  { name: 'VAPT', category: 'core' },
  { name: 'SIEM Monitoring', category: 'core' },
  { name: 'Splunk', category: 'tools' },
  { name: 'Burp Suite', category: 'tools' },
  { name: 'Wireshark', category: 'tools' },
  { name: 'Nmap', category: 'tools' },
  { name: 'Nessus', category: 'tools' },
  { name: 'OpenVAS', category: 'tools' },
  { name: 'Metasploit', category: 'tools' },
  { name: 'Linux Security', category: 'core' },
  { name: 'Threat Hunting', category: 'core' },
  { name: 'Threat Intelligence', category: 'core' },
  { name: 'OWASP Top 10', category: 'frameworks' },
  { name: 'MITRE ATT&CK', category: 'frameworks' },
  { name: 'Python', category: 'programming' },
  { name: 'Digital Forensics', category: 'core' },
  { name: 'Incident Response', category: 'core' },
  { name: 'Kali Linux', category: 'tools' },
  { name: 'Web App Security', category: 'core' },
]

const categoryColors: Record<string, string> = {
  core: 'bg-primary/20 text-primary border-primary/30',
  tools: 'bg-accent/20 text-accent border-accent/30',
  frameworks: 'bg-chart-3/20 text-chart-3 border-chart-3/30',
  programming: 'bg-chart-4/20 text-chart-4 border-chart-4/30',
}

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" ref={ref} className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
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
              Technical Expertise
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold font-mono"
            >
              Core <span className="gradient-text">Skills</span>
            </motion.h2>
          </div>

          {/* Legend */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 text-sm"
          >
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-primary/40" />
              <span className="text-muted-foreground">Core Competencies</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-accent/40" />
              <span className="text-muted-foreground">Security Tools</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-chart-3/40" />
              <span className="text-muted-foreground">Frameworks</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-chart-4/40" />
              <span className="text-muted-foreground">Programming</span>
            </div>
          </motion.div>

          {/* Skills cloud */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.03, duration: 0.3 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className={`px-4 py-2 rounded-lg border font-mono text-sm cursor-default transition-all ${categoryColors[skill.category]}`}
              >
                {skill.name}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
