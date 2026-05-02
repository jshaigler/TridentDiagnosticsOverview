'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

export default function Hero({ setActiveSection }: any) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-blue-900/10" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] opacity-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full"
              >
                <span className="text-sm font-semibold text-blue-500">Revolutionary Diagnostics</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl lg:text-6xl font-bold tracking-tight text-balance"
              >
                MTD Multiplexer: Three Tests, One Device
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-muted-foreground text-balance leading-relaxed"
              >
                A pocket-sized microfluidic cassette integrating simultaneous malaria, typhoid, and dengue diagnostic tests. Results in 20 minutes. 54-63% cost reduction versus sequential testing.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setActiveSection('overview')
                    document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }}
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
                >
                  Explore Solution
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setActiveSection('impact')
                    document.getElementById('impact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }}
                  className="px-8 py-3 border border-border hover:bg-muted rounded-lg font-semibold transition-colors"
                >
                  View Impact
                </motion.button>
              </motion.div>

              {/* Key Metrics */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-3 gap-4 pt-8"
              >
                {[
                  { label: 'Time to Result', value: '20 min' },
                  { label: 'Cost Savings', value: '54-63%' },
                  { label: 'Lives Saved (5yr)', value: '4,400+' },
                ].map((metric, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="text-2xl font-bold text-blue-500">{metric.value}</div>
                    <div className="text-xs text-muted-foreground">{metric.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            <div className="relative w-full h-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-900/20 rounded-2xl blur-3xl" />
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3673%20Copy.JPG-lkabC49loUV7vvjfIVMqrG68OpfCjy.jpeg"
                alt="MTD Multiplexer Device"
                className="relative w-full h-auto object-contain drop-shadow-2xl rounded-xl"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="text-muted-foreground" size={24} />
        </motion.div>
      </div>
    </section>
  )
}
