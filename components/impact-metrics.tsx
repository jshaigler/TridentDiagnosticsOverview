'use client'

import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export default function ImpactMetrics() {
  const impactData = [
    { timeframe: '3-Year', patients: 150, lives: 750, jobs: 75, amr: 45 },
    { timeframe: '5-Year', patients: 880, lives: 4400, jobs: 275, amr: 264 },
    { timeframe: '10-Year', patients: 5000, lives: 25000, jobs: 1500, amr: 1500 },
  ]

  const hospitalImpact = [
    { metric: 'Monthly Diagnostic Cost', seq: '₦3M', mtd: '₦1.3M', savings: '₦1.7M' },
    { metric: 'Misdiagnosis Events/Month', seq: '50', mtd: '15', savings: '35 prevented' },
    { metric: 'Annual Lab Hours Saved', seq: '—', mtd: '2,083 hrs', savings: '2,083 hrs' },
    { metric: 'Total Annual Savings', seq: '—', mtd: '—', savings: '₦566.4M' },
  ]

  const patientBenefits = [
    { benefit: 'Cost savings per diagnosis', value: '₦3,400–5,000', note: '54–63% reduction' },
    { benefit: 'Finger pricks required', value: '1', note: 'vs. 3 sequential' },
    { benefit: 'Time to result', value: '20 min', note: 'vs. 45 min sequential' },
    { benefit: 'Misdiagnosis risk reduction', value: '70%', note: 'vs. baseline' },
    { benefit: 'Prevented dengue complications', value: '₦50K–150K', note: 'per case avoided' },
  ]

  const diagnosticComparison = [
    { method: 'Sequential RDTs', cost: 6000, accuracy: 85, time: 45, access: 'High' },
    { method: 'MTD Multiplexer', cost: 2600, accuracy: 94, time: 20, access: 'High' },
    { method: 'PCR (malaria only)', cost: 12000, accuracy: 99, time: 240, access: 'Low' },
    { method: 'Multiplex PCR', cost: 30000, accuracy: 99, time: 90, access: 'Very Low' },
  ]

  return (
    <section id="impact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">Impact & Scale</h2>
            <p className="text-xl text-muted-foreground">
              Transforming diagnosis and saving lives across Sub-Saharan Africa
            </p>
          </div>

          {/* Patient-Level Impact */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">Patient-Level Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {patientBenefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="p-4 bg-muted/50 border border-border rounded-lg"
                >
                  <div className="text-sm text-muted-foreground mb-2">{benefit.benefit}</div>
                  <div className="text-2xl font-bold text-blue-500 mb-1">{benefit.value}</div>
                  <div className="text-xs text-muted-foreground">{benefit.note}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Hospital-Level Impact */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-muted/30 border border-border rounded-xl p-8 space-y-6"
          >
            <h3 className="text-2xl font-bold">Hospital-Level Impact (500 Patients/Month)</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-muted border-b border-border">
                  <tr>
                    <th className="text-left p-4 font-semibold">Metric</th>
                    <th className="text-left p-4 font-semibold">Sequential</th>
                    <th className="text-left p-4 font-semibold">With MTD</th>
                    <th className="text-left p-4 font-semibold">Annual Savings</th>
                  </tr>
                </thead>
                <tbody>
                  {hospitalImpact.map((item, idx) => (
                    <tr key={idx} className="border-t border-border hover:bg-muted/50">
                      <td className="p-4 font-medium">{item.metric}</td>
                      <td className="p-4 text-muted-foreground">{item.seq}</td>
                      <td className="p-4 text-muted-foreground">{item.mtd}</td>
                      <td className="p-4 font-semibold text-green-500">{item.savings}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* 5-Year Social ROI */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6">5-Year Social Impact Projections</h3>
            <div className="w-full h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={impactData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.15)" />
                  <XAxis dataKey="timeframe" stroke="#94a3b8" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                  <YAxis stroke="#94a3b8" tick={{ fill: '#94a3b8', fontSize: 12 }} yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" stroke="#94a3b8" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', color: '#e2e8f0', borderRadius: '8px' }}
                    labelStyle={{ color: '#cbd5e1', fontWeight: 600 }}
                    itemStyle={{ color: '#e2e8f0' }}
                  />
                  <Legend wrapperStyle={{ color: '#cbd5e1', fontSize: '13px' }} />
                  <Bar yAxisId="left" dataKey="patients" fill="#3b82f6" name="Patients Diagnosed" />
                  <Bar yAxisId="left" dataKey="lives" fill="#10b981" name="Lives Saved" />
                  <Bar yAxisId="right" dataKey="jobs" fill="#f59e0b" name="Jobs Created" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4 text-sm">
              <div className="p-4 bg-muted rounded-lg">
                <div className="text-xs text-muted-foreground mb-1">Patients Diagnosed (5yr)</div>
                <div className="font-bold text-lg">880,000</div>
              </div>
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <div className="text-xs text-muted-foreground mb-1">Lives Saved (5yr)</div>
                <div className="font-bold text-lg text-green-500">4,400+</div>
              </div>
              <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg">
                <div className="text-xs text-muted-foreground mb-1">Healthcare Savings (5yr)</div>
                <div className="font-bold text-lg text-amber-500">₦13.2B (~$8.9M)</div>
              </div>
            </div>
          </motion.div>

          {/* Diagnostic Method Comparison */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">Diagnostic Method Comparison</h3>
            <div className="overflow-x-auto border border-border rounded-lg">
              <table className="w-full text-sm">
                <thead className="bg-muted border-b border-border">
                  <tr>
                    <th className="text-left p-4 font-semibold">Method</th>
                    <th className="text-left p-4 font-semibold">Cost/Patient</th>
                    <th className="text-left p-4 font-semibold">Accuracy</th>
                    <th className="text-left p-4 font-semibold">Time</th>
                    <th className="text-left p-4 font-semibold">Rural Access</th>
                  </tr>
                </thead>
                <tbody>
                  {diagnosticComparison.map((diagnostic, idx) => (
                    <motion.tr
                      key={idx}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className={`border-t border-border hover:bg-muted/50 ${
                        diagnostic.method === 'MTD Multiplexer' ? 'bg-blue-500/5' : ''
                      }`}
                    >
                      <td className={`p-4 font-semibold ${diagnostic.method === 'MTD Multiplexer' ? 'text-blue-500' : ''}`}>
                        {diagnostic.method}
                      </td>
                      <td className="p-4 text-muted-foreground">₦{diagnostic.cost.toLocaleString()}</td>
                      <td className="p-4 text-muted-foreground">{diagnostic.accuracy}%</td>
                      <td className="p-4 text-muted-foreground">{diagnostic.time} min</td>
                      <td className="p-4 text-muted-foreground">{diagnostic.access}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Key Advantages */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              {
                title: 'Antimicrobial Resistance Prevention',
                description: 'Averts 264,000 unnecessary antibiotic treatments over 5 years, combating AMR',
              },
              {
                title: 'Economic Empowerment',
                description: '200–350 jobs created in Years 2–3 through manufacturing and distribution',
              },
              {
                title: 'Healthcare System Strengthening',
                description: '₦566.4M annual savings per 500-bed facility enables expansion of care',
              },
              {
                title: 'Equity in Diagnosis',
                description: 'Self-administrable design enables community health workers and remote deployment',
              },
            ].map((advantage, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-muted/50 border border-border rounded-lg hover:border-blue-500/50 transition-colors"
              >
                <h4 className="text-lg font-semibold mb-2">{advantage.title}</h4>
                <p className="text-sm text-muted-foreground">{advantage.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
