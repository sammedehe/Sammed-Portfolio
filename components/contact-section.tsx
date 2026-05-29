'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Linkedin, BookOpen, MapPin, Send } from 'lucide-react'

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'Sammedb0@gmail.com',
      href: 'mailto:Sammedb0@gmail.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'sammed-bukshete',
      href: 'https://linkedin.com/in/sammed-bukshete-a9b326343',
    },
    {
      icon: BookOpen,
      label: 'Google Scholar',
      value: 'View Profile',
      href: 'https://scholar.google.com/citations?user=xV0AJLcAAAAJ',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Pune, Maharashtra, India',
      href: '#',
    },
  ]

  return (
    <section id="contact" ref={ref} className="relative py-24 px-4">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      
      <div className="relative max-w-4xl mx-auto">
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
              Get In Touch
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold font-mono"
            >
              Let&apos;s <span className="gradient-text">Connect</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground max-w-xl mx-auto"
            >
              Open for research collaborations, academic partnerships, guest lectures, 
              cybersecurity training, and consulting opportunities.
            </motion.p>
          </div>

          {/* Contact cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="glass-card p-6 rounded-xl group hover:bg-secondary/50 transition-all duration-300 flex items-center gap-4"
              >
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <link.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{link.label}</p>
                  <p className="font-medium group-hover:text-primary transition-colors">{link.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="text-center"
          >
            <a
              href="mailto:Sammedb0@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25 text-lg"
            >
              <Send className="w-5 h-5" />
              Send a Message
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
