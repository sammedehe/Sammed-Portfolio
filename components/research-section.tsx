'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Brain, 
  LineChart, 
  Bot, 
  Search, 
  Eye, 
  AlertTriangle, 
  Shield, 
  Network, 
  BarChart3 
} from 'lucide-react'

const interests = [
  { icon: Brain, title: 'AI-Driven Cybersecurity', description: 'Machine learning for threat detection' },
  { icon: LineChart, title: 'SIEM Optimization', description: 'Alert correlation & log analysis' },
  { icon: Bot, title: 'SOC Automation', description: 'Automated incident response' },
  { icon: Search, title: 'Threat Intelligence', description: 'Proactive threat hunting' },
  { icon: Eye, title: 'Explainable AI', description: 'Interpretable security models' },
  { icon: AlertTriangle, title: 'False Positive Reduction', description: 'Noise reduction in alerts' },
  { icon: Shield, title: 'VAPT', description: 'Vulnerability assessment & pentesting' },
  { icon: Network, title: 'Network Security', description: 'Infrastructure protection' },
  { icon: BarChart3, title: 'Security Analytics', description: 'Log intelligence & insights' },
]

export default function ResearchSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="research" ref={ref} className="relative py-24 px-4">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
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
              Research Focus
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold font-mono"
            >
              Research <span className="gradient-text">Interests</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Exploring the intersection of artificial intelligence and cybersecurity 
              to develop intelligent, automated security solutions.
            </motion.p>
          </div>

          {/* Interest grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.08 }}
                className="group glass-card p-6 rounded-xl hover:bg-secondary/50 transition-all duration-300 cursor-default"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <interest.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors font-mono text-sm">
                      {interest.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      {interest.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
