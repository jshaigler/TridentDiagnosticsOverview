'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

export default function Manufacturing() {
  const manufacturingPathways = [
    {
      name: 'FDM (PLA)',
      leadTime: '1–2 hours',
      cost: '₦3,200–4,000',
      scalability: 'Low',
      bestFor: 'Prototype development',
      specs: ['Rapid iteration', 'Post-sand finishing', 'No EtO sterilization'],
    },
    {
      name: 'SLA (Resin)',
      leadTime: '2–3 hours',
      cost: '₦1,800–2,400',
      scalability: 'Medium',
      bestFor: 'Pilot validation & testing',
      specs: ['Smooth finish', 'Sterilizable (Gamma, EtO)', '80°C thermal stability'],
    },
    {
      name: 'Injection Molding',
      leadTime: '8–12 weeks',
      cost: '₦300–450',
      scalability: 'Very High',
      bestFor: 'Mass production (100k+)',
      specs: ['Lowest per-unit cost', 'Full sterilization', '120°C thermal stability'],
    },
  ]

  const suppliers = [
    {
      type: 'Malaria RDT',
      biomarker: 'HRP2 Antigen',
      supplier: 'Guangzhou Wondfo',
      cost: '₦525 (~$0.35)',
      status: 'NAFDAC Approved',
    },
    {
      type: 'Dengue RDT',
      biomarker: 'NS1 Antigen',
      supplier: 'Guangzhou Wondfo',
      cost: '₦525 (~$0.35)',
      status: 'NAFDAC Approved',
    },
    {
      type: 'Typhoid RDT',
      biomarker: 'LPS Antigen',
      supplier: 'Wondfo / SD Bioline (Abbott)',
      cost: '₦525 (~$0.35)',
      status: 'NAFDAC Approved',
    },
  ]

  const timeline = [
    {
      phase: 'Phase 1: Validation',
      duration: 'Months 1–6',
      funding: '₦5–7.5M (~$3,378–$5,068)',
      activities: [
        'Complete microfluidic housing design in CAD',
        'FDM prototype fabrication & wicking validation',
        'Begin NAFDAC regulatory consultation',
        'Pilot at 2–3 teaching hospitals',
        'Validate cost & time savings data',
      ],
    },
    {
      phase: 'Phase 2: Scale Manufacturing',
      duration: 'Months 7–18',
      funding: '₦15–25M (~$10,135–$16,892)',
      activities: [
        'Commission SLA pilot-run tooling',
        'Partner with established Nigerian manufacturer',
        'Injection mold development (8–12 week lead)',
        'Expand to 10+ hospital pilot sites',
        'Submit NAFDAC registration dossier',
        'Initiate bulk RDT strip procurement',
      ],
    },
    {
      phase: 'Phase 3: Regional Deployment',
      duration: 'Months 19–36',
      funding: '₦40M+ (~$27,027+)',
      activities: [
        'Distribution to 50+ health facilities',
        'Government procurement partnerships (NCDC, FMOH)',
        'Open-source IP release & local tech transfer',
        'Expansion into additional Sub-Saharan markets',
        'Multi-country regulatory submissions',
      ],
    },
  ]

  const qualityControl = [
    'Incoming strip lot testing before integration',
    'Capillary wicking validation (5–15 sec target) per batch',
    'Impact resistance testing (>1m drop)',
    'Shelf-life stability testing at 15–30°C',
    'Compatibility testing with Wondfo & SD Bioline strips',
  ]

  return (
    <section id="manufacturing" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">Manufacturing & Sourcing</h2>
            <p className="text-xl text-muted-foreground">
              Scalable production pathways with established supply chains
            </p>
          </div>

          {/* Manufacturing Pathways */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {manufacturingPathways.map((pathway, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-xl border transition-colors ${
                  pathway.scalability === 'Very High'
                    ? 'bg-blue-500/5 border-blue-500/20'
                    : 'bg-card border-border hover:border-blue-500/50'
                }`}
              >
                <h3 className="text-xl font-bold mb-4">{pathway.name}</h3>
                <div className="space-y-3 mb-6">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Lead Time</div>
                    <div className="font-semibold">{pathway.leadTime}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Unit Cost</div>
                    <div className="font-semibold text-blue-500">{pathway.cost}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Scalability</div>
                    <div className="font-semibold">{pathway.scalability}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Best For</div>
                    <div className="font-semibold">{pathway.bestFor}</div>
                  </div>
                </div>
                <div className="space-y-2 pt-6 border-t border-border">
                  {pathway.specs.map((spec, specIdx) => (
                    <div key={specIdx} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* RDT Strip Sourcing */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">RDT Strip Sourcing</h3>
            <div className="overflow-x-auto border border-border rounded-lg">
              <table className="w-full text-sm">
                <thead className="bg-muted border-b border-border">
                  <tr>
                    <th className="text-left p-4 font-semibold">Test Type</th>
                    <th className="text-left p-4 font-semibold">Biomarker</th>
                    <th className="text-left p-4 font-semibold">Preferred Supplier</th>
                    <th className="text-left p-4 font-semibold">Bulk Cost (500+)</th>
                    <th className="text-left p-4 font-semibold">NAFDAC Status</th>
                  </tr>
                </thead>
                <tbody>
                  {suppliers.map((supplier, idx) => (
                    <tr key={idx} className="border-t border-border hover:bg-muted/50">
                      <td className="p-4 font-semibold">{supplier.type}</td>
                      <td className="p-4 text-muted-foreground">{supplier.biomarker}</td>
                      <td className="p-4 text-muted-foreground">{supplier.supplier}</td>
                      <td className="p-4 text-blue-500 font-semibold">{supplier.cost}</td>
                      <td className="p-4 text-green-500 font-semibold">{supplier.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground pt-4">
              <span className="font-semibold">Supplier Contacts:</span> Guangzhou Wondfo (wondfo.com) | SD Bioline/Abbott (abbott.com)
            </p>
          </motion.div>

          {/* Development Roadmap */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">Development Roadmap (3 Years)</h3>
            <div className="space-y-4">
              {timeline.map((phase, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-card border border-border rounded-lg"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-bold">{phase.phase}</h4>
                      <div className="text-sm text-muted-foreground">{phase.duration}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-muted-foreground mb-1">Funding</div>
                      <div className="font-bold text-blue-500">{phase.funding}</div>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {phase.activities.map((activity, actIdx) => (
                      <li key={actIdx} className="flex items-start gap-3 text-sm">
                        <span className="text-blue-500 mt-1">•</span>
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
            <div className="p-6 bg-amber-500/5 border border-amber-500/20 rounded-lg">
              <div className="text-sm font-semibold text-amber-500 mb-2">Total 3-Year Funding Requirement</div>
              <div className="text-2xl font-bold">₦60–80M (~$40,541–$54,054)</div>
            </div>
          </motion.div>

          {/* Quality Control */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">Quality Control Activities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {qualityControl.map((activity, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 p-4 bg-muted/50 border border-border rounded-lg"
                >
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{activity}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Compliance */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              {
                title: 'Regulatory',
                items: ['NAFDAC approved strips', 'ISO 10993 biocompatible housing', 'CC-BY 4.0 Open Source'],
              },
              {
                title: 'Sterilization',
                items: ['Gamma sterilization compatible', 'EtO sterilization compatible', 'No thermal degradation'],
              },
            ].map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-green-500/5 border border-green-500/20 rounded-lg"
              >
                <h4 className="font-bold text-lg mb-4 text-green-500">{section.title} Compliance</h4>
                <ul className="space-y-2">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-green-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
