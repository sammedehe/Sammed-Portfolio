'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Shield } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Research', href: '#research' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Publications', href: '#publications' },
  { label: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass py-3' : 'py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="p-1.5 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <span className="font-bold font-mono text-lg hidden sm:block">
              <span className="text-foreground">Sammed Bukshete</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-background/95 backdrop-blur-lg pt-20">
              <nav className="flex flex-col items-center gap-4 p-8">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-xl font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.a
                  href="#contact"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-4 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium"
                >
                  Get in Touch
                </motion.a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
