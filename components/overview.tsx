'use client'

import { motion } from 'framer-motion'
import { Droplet, Zap, Shield } from 'lucide-react'

export default function Overview() {
  const problemPoints = [
    {
      title: 'Diagnostic Crisis',
      description: '30-40% misdiagnosis rates in remote Sub-Saharan Africa due to lack of diagnostic tools and infrastructure',
      icon: Droplet,
    },
    {
      title: 'Cost & Time Barriers',
      description: 'Sequential testing costs up to ₦6,000 (~$4.05) and takes 45 minutes per patient with multiple finger pricks',
      icon: Zap,
    },
    {
      title: 'Antibiotic Resistance',
      description: 'False positives from cheap tests lead to unnecessary strong antibiotic treatments, increasing resistance risk',
      icon: Shield,
    },
  ]

  const features = [
    { label: 'Finger pricks required', seq: '3', mtd: '1' },
    { label: 'Technician time', seq: '45 min', mtd: '20 min' },
    { label: 'Cost per patient', seq: '₦6,000 ($4.05)', mtd: '₦2,600 ($1.76)' },
    { label: 'Misdiagnosis reduction', seq: 'Baseline', mtd: '70%' },
  ]

  return (
    <section id="overview" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Problem & Solution */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* Problem Statement */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4">The Problem</h2>
              <p className="text-xl text-muted-foreground text-balance">
                Children under five in remote communities within Nigeria need cheap diagnostic tests for prevalent diseases because mass misdiagnosis is leading to improper and late treatment.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {problemPoints.map((point, idx) => {
                const Icon = point.icon
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="p-6 bg-card border border-border rounded-xl hover:border-blue-500/50 transition-colors"
                  >
                    <Icon className="w-8 h-8 text-blue-500 mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{point.title}</h3>
                    <p className="text-sm text-muted-foreground">{point.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* How It Works */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[
                { num: '1', label: 'Sample Collection', desc: '5-10 μL blood drop to inlet' },
                { num: '2', label: 'Passive Distribution', desc: 'Capillary channels wick sample' },
                { num: '3', label: 'Detection', desc: 'Biomarkers detected per strip' },
                { num: '4', label: 'Readout', desc: 'Results visible in windows' },
                { num: '5', label: 'Interpretation', desc: 'Standard RDT line readout' },
              ].map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="relative p-4 bg-card border border-border rounded-lg text-center"
                >
                  <div className="text-2xl font-bold text-blue-500 mb-2">{step.num}</div>
                  <h3 className="font-semibold text-sm mb-1">{step.label}</h3>
                  <p className="text-xs text-muted-foreground">{step.desc}</p>
                  {idx < 4 && (
                    <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
                      <div className="text-blue-500">&rarr;</div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Comparison Table */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold">Sequential vs MTD Multiplexer</h2>
            <div className="overflow-x-auto border border-border rounded-lg">
              <table className="w-full text-sm">
                <thead className="bg-muted border-b border-border">
                  <tr>
                    <th className="text-left p-4 font-semibold">Metric</th>
                    <th className="text-left p-4 font-semibold">Sequential RDTs</th>
                    <th className="text-left p-4 font-semibold">MTD Multiplexer</th>
                    <th className="text-left p-4 font-semibold">Advantage</th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((feature, idx) => (
                    <tr key={idx} className="border-t border-border hover:bg-muted/50">
                      <td className="p-4 font-medium">{feature.label}</td>
                      <td className="p-4 text-muted-foreground">{feature.seq}</td>
                      <td className="p-4 text-muted-foreground">{feature.mtd}</td>
                      <td className="p-4 text-green-500 font-semibold">{feature.mtd === '1' ? '67%' : feature.label.includes('45') ? '56%' : feature.label.includes('70') ? '✓' : '57%'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
