'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, FileText, Calendar } from 'lucide-react'

const publications = [
  {
    title: 'Ethical Hacking Against QR Code-Based Attacks',
    type: 'Research Paper',
    year: '2024',
    abstract: 'Exploring security vulnerabilities in QR code implementations and proposing ethical hacking methodologies for detection and prevention.',
    doi: 'https://www.researchgate.net/publication/396948127_Ethical_Hacking_Against_QR_Code-Based_Attacks_Simulating_Real-World_Scenarios_of_QR_Code_Exploitation_in_Public_Spaces',
  },
  {
    title: 'A Hop Count-Based Distance Vector Routing Model for Dynamic Networks',
    type: 'Research Paper',
    year: '2023',
    abstract: 'Novel approach to network routing optimization using hop count metrics for improved performance in dynamic network environments.',
    doi: 'https://www.ijltemas.in/submission/online/article/view/3804',
  },
  {
    title: 'The Study on Legal and Ethical Issues in Cyber Security in India',
    type: 'Research Paper',
    year: '2023',
    abstract: 'Comprehensive analysis of the legal framework and ethical considerations surrounding cybersecurity practices in the Indian context.',
    doi: 'https://www.bing.com/ck/a?!&&p=09eda32bba414a3ab6d9c8ee299bd83dd36cf76a7c4c9999eccdce3be6add148JmltdHM9MTc4MDAxMjgwMA&ptn=3&ver=2&hsh=4&fclid=2930e1bb-e669-6f14-19f1-f739e7246e8b&psq=The+Study+on+Legal+and+Ethical+Issues+in+Cyber+Security+in+India%27&u=a1aHR0cHM6Ly9panJhci5vcmcvcGFwZXJzL0lKUkFSMjRCNDMxOS5wZGY',
  },
]

export default function PublicationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="publications" ref={ref} className="relative py-24 px-4">
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
              Scholarly Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold font-mono"
            >
              Research <span className="gradient-text">Publications</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Peer-reviewed research contributions advancing the field of cybersecurity.
            </motion.p>
          </div>

          {/* Publications list */}
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <motion.article
                key={pub.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.15, duration: 0.5 }}
                className="glass-card p-6 md:p-8 rounded-xl hover:bg-secondary/30 transition-all duration-300 group"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex-1 space-y-3">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="px-3 py-1 text-xs font-mono bg-primary/20 text-primary rounded-full">
                        {pub.type}
                      </span>
                      <span className="flex items-center gap-1 text-muted-foreground text-sm">
                        <Calendar className="w-3 h-3" />
                        {pub.year}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold font-mono group-hover:text-primary transition-colors">
                      {pub.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {pub.abstract}
                    </p>
                  </div>

                  <div className="flex gap-3 shrink-0">
                    <a
                      href={pub.doi}
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium glass-card rounded-lg hover:bg-secondary/80 transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      DOI
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Google Scholar link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="text-center"
          >
            <a
              href="https://scholar.google.com/citations?user=xV0AJLcAAAAJ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-mono text-sm"
            >
              View all publications on Google Scholar
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
