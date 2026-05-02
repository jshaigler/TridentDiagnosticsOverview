'use client'

import { motion } from 'framer-motion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function Specifications() {
  const dimensions = [
    { label: 'Total Length', value: '75 mm', note: 'Overall cassette length' },
    { label: 'Total Width', value: '50 mm', note: 'Overall cassette width' },
    { label: 'Total Height', value: '6 mm', note: 'Pocket-sized profile' },
    { label: 'Inlet Diameter', value: '7.0 mm', note: 'Accommodates 5–10 μL droplet' },
    { label: 'Strip Slot Width', value: '4.5 mm', note: 'Wondfo/SD Bioline compatible' },
    { label: 'Viewing Window Length', value: '28 mm', note: 'Test result readout area' },
  ]

  const performance = [
    { label: 'Sample Volume', value: '5–10 μL (±2 μL tolerance)' },
    { label: 'Wicking Time', value: '5–15 seconds (Target: <20 sec)' },
    { label: 'Time to Result', value: '20 minutes (±2 min RDT standard)' },
    { label: 'Storage Temperature', value: '15–30°C (No refrigeration)' },
    { label: 'Shelf Life', value: '12 months' },
    { label: 'Impact Resistance', value: '>1 meter drop onto hard surface' },
  ]

  const biomarkers = [
    { disease: 'Malaria', biomarker: 'HRP2 Antigen', type: 'Lateral flow RDT' },
    { disease: 'Dengue Fever', biomarker: 'NS1 Antigen', type: 'Lateral flow RDT' },
    { disease: 'Typhoid', biomarker: 'LPS Antigen', type: 'Lateral flow RDT' },
  ]

  const materials = [
    {
      pathway: 'FDM (PLA)',
      material: 'Prusament PLA',
      finish: 'Rough (post-sand)',
      sterilization: 'No',
      thermal: '60°C',
      use: 'Prototype',
    },
    {
      pathway: 'SLA (Resin)',
      material: 'Surgical Guide Resin',
      finish: 'Smooth (inherent)',
      sterilization: 'Yes (Gamma, EtO)',
      thermal: '80°C',
      use: 'Pilot validation',
    },
    {
      pathway: 'Injection Molded',
      material: 'Polystyrene (PS)/PMMA',
      finish: 'Smooth (polished)',
      sterilization: 'Yes (Gamma, EtO)',
      thermal: '120°C',
      use: 'Mass Production',
    },
  ]

  return (
    <section id="specs" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">Technical Specifications</h2>
            <p className="text-xl text-muted-foreground">
              Engineered for reliability, scalability, and clinical accuracy
            </p>
          </div>

          <Tabs defaultValue="dimensions" className="w-full">
            <TabsList className="grid w-full grid-cols-4 lg:w-fit">
              <TabsTrigger value="dimensions">Dimensions</TabsTrigger>
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="biomarkers">Biomarkers</TabsTrigger>
              <TabsTrigger value="materials">Materials</TabsTrigger>
            </TabsList>

            <TabsContent value="dimensions" className="space-y-6 mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {dimensions.map((dim, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.05 }}
                    viewport={{ once: true }}
                    className="p-6 bg-muted/50 border border-border rounded-lg"
                  >
                    <div className="text-2xl font-bold text-blue-500 mb-1">{dim.value}</div>
                    <div className="font-semibold mb-1">{dim.label}</div>
                    <div className="text-sm text-muted-foreground">{dim.note}</div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="performance" className="space-y-6 mt-8">
              <div className="space-y-3">
                {performance.map((perf, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between p-4 bg-muted/50 border border-border rounded-lg hover:border-blue-500/50 transition-colors"
                  >
                    <span className="font-semibold">{perf.label}</span>
                    <span className="text-blue-500 font-bold">{perf.value}</span>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="biomarkers" className="space-y-6 mt-8">
              <div className="overflow-x-auto border border-border rounded-lg">
                <table className="w-full text-sm">
                  <thead className="bg-muted border-b border-border">
                    <tr>
                      <th className="text-left p-4 font-semibold">Disease</th>
                      <th className="text-left p-4 font-semibold">Biomarker</th>
                      <th className="text-left p-4 font-semibold">Test Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {biomarkers.map((bm, idx) => (
                      <motion.tr
                        key={idx}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="border-t border-border hover:bg-muted/50"
                      >
                        <td className="p-4 font-semibold">{bm.disease}</td>
                        <td className="p-4 text-muted-foreground">{bm.biomarker}</td>
                        <td className="p-4 text-muted-foreground">{bm.type}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>

            <TabsContent value="materials" className="space-y-6 mt-8">
              <div className="overflow-x-auto border border-border rounded-lg">
                <table className="w-full text-sm">
                  <thead className="bg-muted border-b border-border">
                    <tr>
                      <th className="text-left p-4 font-semibold">Pathway</th>
                      <th className="text-left p-4 font-semibold">Material</th>
                      <th className="text-left p-4 font-semibold">Finish</th>
                      <th className="text-left p-4 font-semibold">Sterilization</th>
                      <th className="text-left p-4 font-semibold">Thermal</th>
                      <th className="text-left p-4 font-semibold">Use Case</th>
                    </tr>
                  </thead>
                  <tbody>
                    {materials.map((mat, idx) => (
                      <motion.tr
                        key={idx}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="border-t border-border hover:bg-muted/50"
                      >
                        <td className="p-4 font-semibold">{mat.pathway}</td>
                        <td className="p-4 text-muted-foreground">{mat.material}</td>
                        <td className="p-4 text-muted-foreground text-xs">{mat.finish}</td>
                        <td className="p-4 text-muted-foreground text-xs">{mat.sterilization}</td>
                        <td className="p-4 text-muted-foreground">{mat.thermal}</td>
                        <td className="p-4 text-blue-500 font-semibold">{mat.use}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>
          </Tabs>

          {/* Design Philosophy */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12"
          >
            {[
              { title: 'No New Chemistry', desc: 'Pre-validated, NAFDAC-approved RDTs' },
              { title: 'No Power Required', desc: 'Fully passive capillary flow' },
              { title: 'No Cold Chain', desc: 'Stable at 15–30°C for 12 months' },
              { title: 'Open Source', desc: 'CC-BY 4.0 license for tech transfer' },
            ].map((principle, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-4 bg-blue-500/5 border border-blue-500/20 rounded-lg"
              >
                <h3 className="font-semibold mb-1 text-blue-500">{principle.title}</h3>
                <p className="text-sm text-muted-foreground">{principle.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
