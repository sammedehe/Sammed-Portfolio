'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Shield, Award, Target, Code } from 'lucide-react'

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const highlights = [
    { icon: Shield, text: 'SIEM & SOC Expert' },
    { icon: Target, text: 'VAPT Specialist' },
    { icon: Code, text: 'Security Tooling' },
    { icon: Award, text: 'SPPU Recognition' },
  ]

  return (
    <section id="about" ref={ref} className="relative py-24 px-4">
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
              About Me
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold font-mono"
            >
              Advancing Cybersecurity Through
              <span className="gradient-text block">Education & Research</span>
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Main content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="lg:col-span-3 space-y-6"
            >
              <p className="text-muted-foreground text-lg leading-relaxed">
                I am a <span className="text-foreground font-medium">Cyber Security Researcher</span> and{' '}
                <span className="text-foreground font-medium">Assistant Professor</span> with over 3+ years 
                of experience in cybersecurity education, SIEM monitoring, Vulnerability Assessment and 
                Penetration Testing (VAPT), ethical hacking, and applied cybersecurity research.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                My expertise includes threat detection, security monitoring, penetration testing, web 
                application security, and vulnerability assessment using tools such as{' '}
                <span className="text-primary font-mono text-sm">Splunk</span>,{' '}
                <span className="text-primary font-mono text-sm">Nmap</span>,{' '}
                <span className="text-primary font-mono text-sm">Burp Suite</span>,{' '}
                <span className="text-primary font-mono text-sm">Wireshark</span>,{' '}
                <span className="text-primary font-mono text-sm">Nessus</span>,{' '}
                <span className="text-primary font-mono text-sm">OpenVAS</span>, and{' '}
                <span className="text-primary font-mono text-sm">Metasploit</span>.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                As an educator, I have delivered more than 50 hands-on cybersecurity training sessions 
                and designed over 30 practical laboratory exercises, helping more than 500 students 
                develop real-world cybersecurity skills.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                My research interests focus on AI-driven cybersecurity, SIEM optimization, SOC automation, 
                threat intelligence, penetration testing methodologies, and intelligent security analytics.
              </p>

              {/* Highlight badges */}
              <div className="flex flex-wrap gap-3 pt-4">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-lg"
                  >
                    <item.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Achievement card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="glass-card p-6 rounded-xl border-l-4 border-primary h-full">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-bold text-lg font-mono">Achievement Highlight</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Received an <span className="text-primary font-medium">Appreciation Certificate</span> from{' '}
                      <span className="text-foreground font-medium">Savitribai Phule Pune University</span> for 
                      contributions to syllabus restructuring and laboratory workbook preparation under the 
                      B.Sc. Cyber & Digital Science programme.
                    </p>
                    <div className="pt-2">
                      <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
                        Academic Recognition
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
