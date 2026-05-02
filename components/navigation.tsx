'use client'

import { motion } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'

const sections = [
  { id: 'overview', label: 'Solution' },
  { id: 'specs', label: 'Specifications' },
  { id: 'financial', label: 'Financial' },
  { id: 'impact', label: 'Impact' },
  { id: 'manufacturing', label: 'Manufacturing' },
  { id: 'faq', label: 'FAQ' },
]

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

interface NavigationProps {
  activeSection: string
  setActiveSection: (id: string) => void
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
  darkMode: boolean
  setDarkMode: (dark: boolean) => void
}

export default function Navigation({
  activeSection,
  setActiveSection,
  mobileMenuOpen,
  setMobileMenuOpen,
  darkMode,
  setDarkMode,
}: NavigationProps) {
  function handleNav(id: string) {
    setActiveSection(id)
    scrollTo(id)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full bg-background/95 border-b border-border backdrop-blur"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => {
              setActiveSection('hero')
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            <img
              src="/trident-logo.png"
              alt="Trident Diagnostics"
              className="w-10 h-10 object-contain rounded-xl"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {sections.map((section) => (
              <motion.button
                key={section.id}
                onClick={() => handleNav(section.id)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === section.id
                    ? 'text-blue-500'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {section.label}
              </motion.button>
            ))}

            {/* Dark mode toggle */}
            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>
          </div>

          {/* Mobile right-side controls */}
          <div className="md:hidden flex items-center gap-2">
            {/* Dark mode toggle (mobile) */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 hover:bg-muted rounded-lg text-muted-foreground hover:text-foreground transition-colors"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Hamburger */}
            <button
              className="p-2 hover:bg-muted rounded-lg"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden pb-4 space-y-2 border-t border-border pt-4"
          >
            {sections.map((section) => (
              <motion.button
                key={section.id}
                onClick={() => {
                  handleNav(section.id)
                  setMobileMenuOpen(false)
                }}
                className={`block w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === section.id
                    ? 'bg-blue-500/10 text-blue-500'
                    : 'text-muted-foreground hover:bg-muted'
                }`}
              >
                {section.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
