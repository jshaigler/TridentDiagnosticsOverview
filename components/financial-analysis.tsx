'use client'

import { motion } from 'framer-motion'
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export default function FinancialAnalysis() {
  const costComparison = [
    { category: 'Diagnostic Materials', sequential: 1575, mtd: 1725 },
    { category: 'Packaging', sequential: 300, mtd: 150 },
    { category: 'Lab Technician Time', sequential: 3000, mtd: 1250 },
    { category: 'Patient Wait Time', sequential: 2000, mtd: 800 },
    { category: 'Misdiagnosis Cost', sequential: 5000, mtd: 1500 },
  ]

  const projectionData = [
    { year: 'Year 1', revenue: 10, cost: 17.7, profit: -8 },
    { year: 'Year 2', revenue: 55, cost: 30.8, profit: 12.9 },
    { year: 'Year 3', revenue: 200, cost: 78.6, profit: 96.4 },
    { year: 'Year 4', revenue: 450, cost: 120, profit: 317.5 },
    { year: 'Year 5', revenue: 800, cost: 180, profit: 695 },
  ]

  const manufacturingCosts = [
    { phase: 'Prototype', cost: 4675 },
    { phase: 'Pilot', cost: 3375 },
    { phase: 'Scale (100k+)', cost: 2200 },
  ]

  return (
    <section id="financial" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">Financial Analysis</h2>
            <p className="text-xl text-muted-foreground">
              Economically viable at scale with significant cost advantages
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: 'Per-Patient Savings', value: '₦6,450 (~$4.36)', subtext: '54% reduction vs sequential' },
              { label: 'Break-Even Volume', value: '50,000 units', subtext: '18–24 months' },
              { label: '5-Year Revenue', value: '₦1.5B (~$1.01M)', subtext: 'At scale' },
            ].map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-card border border-border rounded-xl"
              >
                <div className="text-sm text-muted-foreground mb-1">{metric.label}</div>
                <div className="text-3xl font-bold text-blue-500 mb-2">{metric.value}</div>
                <div className="text-xs text-muted-foreground">{metric.subtext}</div>
              </motion.div>
            ))}
          </div>

          {/* Cost Breakdown Comparison */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Per-Patient Cost Comparison (NGN)</h3>
            <div className="w-full h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={costComparison}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.15)" />
                  <XAxis dataKey="category" stroke="#94a3b8" angle={-45} textAnchor="end" height={100} tick={{ fill: '#94a3b8', fontSize: 11 }} />
                  <YAxis stroke="#94a3b8" tick={{ fill: '#94a3b8', fontSize: 11 }} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', color: '#e2e8f0', borderRadius: '8px' }}
                    labelStyle={{ color: '#cbd5e1', fontWeight: 600 }}
                    itemStyle={{ color: '#e2e8f0' }}
                  />
                  <Legend wrapperStyle={{ color: '#cbd5e1', fontSize: '13px' }} />
                  <Bar dataKey="sequential" fill="#3b82f6" name="Sequential Testing" />
                  <Bar dataKey="mtd" fill="#10b981" name="MTD Multiplexer" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-6 text-sm text-muted-foreground">
              <p className="font-semibold text-foreground mb-2">Total per-patient cost:</p>
              <div className="grid grid-cols-2 gap-4">
                <div>Sequential Testing: ₦11,875 (~$8.02)</div>
                <div className="text-green-500">MTD Multiplexer: ₦5,425 (~$3.67) – 54% savings</div>
              </div>
            </div>
          </motion.div>

          {/* 5-Year Projection */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6">5-Year Financial Projection (Million NGN)</h3>
            <div className="w-full h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={projectionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.15)" />
                  <XAxis dataKey="year" stroke="#94a3b8" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                  <YAxis stroke="#94a3b8" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', color: '#e2e8f0', borderRadius: '8px' }}
                    labelStyle={{ color: '#cbd5e1', fontWeight: 600 }}
                    itemStyle={{ color: '#e2e8f0' }}
                  />
                  <Legend wrapperStyle={{ color: '#cbd5e1', fontSize: '13px' }} />
                  <Line type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={2} name="Revenue" />
                  <Line type="monotone" dataKey="cost" stroke="#ef4444" strokeWidth={2} name="Operating Cost" />
                  <Line type="monotone" dataKey="profit" stroke="#10b981" strokeWidth={2} name="Net Profit" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Manufacturing Cost Trajectory */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Manufacturing Cost Reduction by Phase</h3>
            <div className="w-full h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={manufacturingCosts}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.15)" />
                  <XAxis dataKey="phase" stroke="#94a3b8" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                  <YAxis stroke="#94a3b8" tick={{ fill: '#94a3b8', fontSize: 12 }} label={{ value: 'Cost (NGN)', angle: -90, position: 'insideLeft', fill: '#94a3b8' }} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', color: '#e2e8f0', borderRadius: '8px' }}
                    labelStyle={{ color: '#cbd5e1', fontWeight: 600 }}
                    itemStyle={{ color: '#e2e8f0' }}
                  />
                  <Bar dataKey="cost" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4 text-sm">
              <div className="p-4 bg-muted rounded-lg">
                <div className="text-xs text-muted-foreground">Prototype</div>
                <div className="font-bold text-lg">₦4,675</div>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <div className="text-xs text-muted-foreground">Pilot</div>
                <div className="font-bold text-lg">₦3,375</div>
              </div>
              <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <div className="text-xs text-muted-foreground">Scale (100k+)</div>
                <div className="font-bold text-lg text-blue-500">₦2,200</div>
              </div>
            </div>
          </motion.div>

          {/* ROI Summary */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { period: '3-Year', roi: '233%', payback: '18–24 months' },
              { period: '5-Year', roi: '1,050%', payback: '12–18 months' },
              { period: '10-Year', roi: '10,000%', payback: '6–12 months' },
            ].map((roiData, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-green-500/5 border border-green-500/20 rounded-xl"
              >
                <div className="text-sm text-muted-foreground mb-2">{roiData.period} ROI</div>
                <div className="text-4xl font-bold text-green-500 mb-3">{roiData.roi}</div>
                <div className="text-sm text-muted-foreground">Payback: {roiData.payback}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
