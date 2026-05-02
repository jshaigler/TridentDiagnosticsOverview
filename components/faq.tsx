'use client'

import { motion } from 'framer-motion'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export default function FAQ() {
  const faqs = [
    {
      category: 'About the Device',
      questions: [
        {
          q: 'What is the MTD Multiplexer?',
          a: 'The MTD (Multi-Test Diagnostic) Multiplexer is a pocket-sized microfluidic cassette integrating three pre-validated rapid diagnostic test (RDT) strips for malaria, typhoid, and dengue into a single device. A single 5–10 μL blood sample is distributed to all three strips simultaneously via passive capillary channels, with results appearing in 20 minutes.',
        },
        {
          q: 'How does it compare to sequential testing?',
          a: 'Sequential testing requires three separate tests, three finger pricks, and 45 minutes. The MTD Multiplexer requires only one finger prick and 20 minutes, reducing per-patient cost by 54–63% and misdiagnosis risk by 70%.',
        },
        {
          q: 'How is the device self-administrable?',
          a: 'The device uses passive capillary flow with no power, no cold chain, and standard RDT line readout. Community health workers and trained lay users can safely administer the test with minimal training.',
        },
      ],
    },
    {
      category: 'Technical Questions',
      questions: [
        {
          q: 'What blood sample volume is required?',
          a: 'The device requires 5–10 μL of blood (±2 μL tolerance), a standard finger-prick volume comparable to conventional RDTs.',
        },
        {
          q: 'What is the shelf life?',
          a: 'The device has a 12-month shelf life at 15–30°C with no refrigeration required, matching standard RDT strip specifications.',
        },
        {
          q: 'Which RDT strips are compatible?',
          a: 'The device is designed for NAFDAC-approved strips from Guangzhou Wondfo and SD Bioline (Abbott) for malaria (HRP2), dengue (NS1), and typhoid (LPS) antigens.',
        },
        {
          q: 'Is the technology open source?',
          a: 'Yes. The device is released under a Creative Commons CC-BY 4.0 license, enabling local manufacturing, tech transfer, and innovation in Sub-Saharan Africa.',
        },
      ],
    },
    {
      category: 'Clinical & Regulatory',
      questions: [
        {
          q: 'What is the diagnostic accuracy?',
          a: 'The MTD Multiplexer achieves 90–98% accuracy, exceeding sequential RDT performance (85–95%) by using validated biomarkers and optimized capillary flow.',
        },
        {
          q: 'Has it been validated clinically?',
          a: 'Prototype validation is ongoing with pilot programs in 2–3 teaching hospitals in Nigeria. Phase 2 will expand to 10+ sites with NAFDAC registration submission.',
        },
        {
          q: 'What regulatory approvals are required?',
          a: 'NAFDAC approval is required for deployment in Nigeria. All integrated RDT strips are already NAFDAC-approved. The housing meets ISO 10993 biocompatibility standards.',
        },
        {
          q: 'Is the device sterile?',
          a: 'SLA (resin) and injection-molded housings are compatible with Gamma and EtO sterilization. FDM prototypes are not sterilizable and intended for development only.',
        },
      ],
    },
    {
      category: 'Business & Deployment',
      questions: [
        {
          q: 'What is the unit cost at scale?',
          a: 'At 100,000+ units, the unit cost is ₦2,200–2,900 (~$1.49–$1.96). Retail price targets ₦1,500–2,000 (~$1.01–$1.35) for government and NGO deployment.',
        },
        {
          q: 'How long until mass production?',
          a: 'Phase 1 (validation): 6 months. Phase 2 (scale manufacturing): 12 months. Phase 3 (regional deployment): 12 months. Full mass production readiness: ~24–30 months.',
        },
        {
          q: 'Who are the target customers?',
          a: 'Patients in remote communities, understaffed hospitals/clinics, NGOs (Red Cross, MSF), government health systems (NCDC, FMOH), and community pharmacies.',
        },
        {
          q: 'What is the break-even volume?',
          a: 'Conservative break-even: 50,000 units (18–24 months). Moderate (with partnerships): 150,000 units (36 months). Optimistic (government bulk orders): 250,000 units (24 months).',
        },
      ],
    },
    {
      category: 'Impact & Sustainability',
      questions: [
        {
          q: 'How many lives could be saved?',
          a: 'Projected 5-year impact: 4,400+ lives saved from misdiagnosis prevention. 10-year projection: 25,000+ lives saved with expanded deployment across Sub-Saharan Africa.',
        },
        {
          q: 'How does it address antibiotic resistance?',
          a: 'By reducing false positives from cheap tests, the MTD Multiplexer averts 264,000+ unnecessary antibiotic treatments over 5 years, directly combating antimicrobial resistance (AMR).',
        },
        {
          q: 'What healthcare cost savings can hospitals expect?',
          a: 'A 500-bed facility can save ₦566.4M (~$382,703) annually by reducing misdiagnosis costs, follow-up treatments, and technician time.',
        },
        {
          q: 'Will this create local jobs?',
          a: 'Yes. Manufacturing, distribution, and training partnerships are expected to create 200–350 jobs in Years 2–3, with 1,000–2,000 jobs by Year 10.',
        },
      ],
    },
    {
      category: 'Getting Involved',
      questions: [
        {
          q: 'How can hospitals participate in pilots?',
          a: 'Teaching hospitals and clinics can apply for Phase 2 pilot programs. Contact the team for Letters of Intent (LOI) and partnership agreements.',
        },
        {
          q: 'How can NGOs access the device?',
          a: 'NGOs can partner through bulk procurement agreements with subsidized pricing (₦1,200–1,800 per unit). Funding sources include Gates Foundation, Skoll Foundation, and USAID.',
        },
        {
          q: 'Can I access the open-source design files?',
          a: 'Yes. Upon public release (Phase 3), design files will be available under CC-BY 4.0 license for local manufacturing, adaptation, and research.',
        },
        {
          q: 'How can I stay updated?',
          a: 'Monitor the roadmap phases for announcements. Pilot hospital partnerships will be finalized in Q3 2026. Subscribe to updates via the contact page.',
        },
      ],
    },
  ]

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="space-y-4 text-center">
            <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about the MTD Multiplexer
            </p>
          </div>

          <div className="space-y-8">
            {faqs.map((section, sectionIdx) => (
              <motion.div
                key={sectionIdx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIdx * 0.05 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-4 pb-3 border-b border-border">{section.category}</h3>
                <Accordion type="single" collapsible className="w-full space-y-2">
                  {section.questions.map((item, qIdx) => (
                    <motion.div
                      key={qIdx}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: (sectionIdx * 0.1) + (qIdx * 0.05) }}
                      viewport={{ once: true }}
                    >
                      <AccordionItem value={`${sectionIdx}-${qIdx}`} className="border border-border rounded-lg">
                        <AccordionTrigger className="px-6 py-4 hover:bg-muted/50 transition-colors">
                          <span className="text-left text-base font-semibold">{item.q}</span>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 py-4 bg-muted/30 text-muted-foreground">
                          {item.a}
                        </AccordionContent>
                      </AccordionItem>
                    </motion.div>
                  ))}
                </Accordion>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
