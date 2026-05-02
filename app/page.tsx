'use client'

import { useState, useEffect } from 'react'
import Hero from '@/components/hero'
import Navigation from '@/components/navigation'
import Overview from '@/components/overview'
import Specifications from '@/components/specifications'
import FinancialAnalysis from '@/components/financial-analysis'
import ImpactMetrics from '@/components/impact-metrics'
import Manufacturing from '@/components/manufacturing'
import FAQ from '@/components/faq'
import CTA from '@/components/cta'

export default function Page() {
  const [activeSection, setActiveSection] = useState('hero')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(true)

  // Always start at the top on initial load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  // Apply or remove the `dark` class on <html> whenever darkMode changes
  useEffect(() => {
    const root = document.documentElement
    if (darkMode) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Hero setActiveSection={setActiveSection} />
      <Overview />
      <Specifications />
      <FinancialAnalysis />
      <ImpactMetrics />
      <Manufacturing />
      <FAQ />
      <CTA />
    </div>
  )
}
