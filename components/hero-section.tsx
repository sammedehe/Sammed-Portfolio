'use client'

import { motion } from 'framer-motion'
import { Download, Linkedin, BookOpen, Mail, Users, Presentation, FlaskConical, FileText } from 'lucide-react'

const stats = [
  { icon: Users, value: '500+', label: 'Students Trained' },
  { icon: Presentation, value: '50+', label: 'Sessions Conducted' },
  { icon: FlaskConical, value: '30+', label: 'Labs Designed' },
  { icon: FileText, value: '3+', label: 'Publications' },
]

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground font-mono">Available for Research Collaboration</span>
            </motion.div>

            {/* Name */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-mono"
              >
                <span className="text-foreground">Sammed Vidyasagar  </span>
                <br />
                <span className="gradient-text">Bukshete</span>
              </motion.h1>

              {/* Title */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-xl text-primary font-medium"
              >
                Assistant Professor | Cyber Security Researcher123
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="text-muted-foreground"
              >
                Ethical Hacking, SIEM & SOC Enthusiast
              </motion.p>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground text-lg leading-relaxed max-w-xl"
            >
              Focused on AI-driven cybersecurity, SIEM optimization, threat detection, 
              SOC automation, ethical hacking, penetration testing, and applied cybersecurity research.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="/Resume _Sammed Bukshete_IND.pdf"
                download="/Resume _Sammed Bukshete_IND.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
              <a
                href="https://linkedin.com/in/sammed-bukshete-a9b326343"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 glass-card rounded-lg font-medium text-foreground hover:bg-secondary/80 transition-all"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href="https://scholar.google.com/citations?user=xV0AJLcAAAAJ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 glass-card rounded-lg font-medium text-foreground hover:bg-secondary/80 transition-all"
              >
                <BookOpen className="w-4 h-4" />
                Google Scholar
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 glass-card rounded-lg font-medium text-foreground hover:bg-secondary/80 transition-all"
              >
                <Mail className="w-4 h-4" />
                Contact
              </a>
            </motion.div>
          </motion.div>

          {/* Right content - Profile */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="relative flex justify-center"
          >
            {/* Glassmorphism frame */}
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/20 rounded-2xl blur-2xl scale-110" />
              
              {/* Image container */}
              <div className="relative glass-card p-2 rounded-2xl">
                <div className="relative w-82 h-92 md:w-80 md:h-80 lg:w-85 lg:h-100 rounded-xl overflow-hidden">
                  <img src="/placeholder-user.jpg" alt="Profile Picture" className="w-full h-full object-cover rounded-xl" />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </div>

                {/* Floating badge */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -bottom-4 -right-4 glass-card px-4 py-2 rounded-lg"
                >
                  <span className="text-sm font-medium text-primary font-mono">3+ Years Experience</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.1 }}
              className="glass-card p-6 rounded-xl text-center group hover:bg-secondary/50 transition-all duration-300"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
              <p className="text-3xl md:text-4xl font-bold gradient-text font-mono">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
