'use client'

import { motion } from 'framer-motion'
import { Shield } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative py-12 px-4 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <div className="p-2 bg-primary/10 rounded-lg">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-bold font-mono">Sammed Bukshete</p>
              <p className="text-xs text-muted-foreground">Cybersecurity Researcher</p>
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground text-sm text-center"
          >
            Advancing Cybersecurity Education, Research & Innovation
          </motion.p>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-sm"
          >
            © 2026 Sammed Vidyasagar Bukshete. All Rights Reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  )
}
