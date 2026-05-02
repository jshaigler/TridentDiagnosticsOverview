'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FileText, Linkedin, X } from 'lucide-react'

export default function CTA() {
  const [showLinkedInModal, setShowLinkedInModal] = useState(false)

  return (
    <section id="cta" className="py-20 bg-gradient-to-br from-blue-500/10 via-transparent to-blue-500/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-balance">
              Ready to Transform Diagnostics in Africa?
            </h2>
            <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
              Join us in bringing affordable, accurate, rapid diagnostics to remote communities.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="https://canva.link/e5xiveymolxig54"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <FileText size={20} />
              View Pitch Deck
            </motion.a>

            <motion.button
              onClick={() => setShowLinkedInModal(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-border hover:bg-muted rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <Linkedin size={20} />
              Follow Us
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* LinkedIn Split Modal */}
      <AnimatePresence>
        {showLinkedInModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setShowLinkedInModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.25 }}
              className="bg-card border border-border rounded-2xl p-8 w-full max-w-md shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">Follow a Founder</h3>
                <button
                  onClick={() => setShowLinkedInModal(false)}
                  className="p-2 hover:bg-muted rounded-lg transition-colors"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>

              <p className="text-sm text-muted-foreground mb-6">
                Connect with the founders of Trident Diagnostics on LinkedIn.
              </p>

              <div className="flex flex-col gap-4">
                {[
                  {
                    name: 'Joshua Haigler',
                    role: 'Co-Founder',
                    url: 'https://www.linkedin.com/in/joshua-haigler/',
                  },
                  {
                    name: 'Jeremy Muchilwa',
                    role: 'Co-Founder',
                    url: 'https://www.linkedin.com/in/jeremy-muchilwa-109b62213/',
                  },
                ].map((person) => (
                  <motion.a
                    key={person.url}
                    href={person.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-4 p-4 border border-border rounded-xl hover:border-blue-500/50 hover:bg-muted/50 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Linkedin size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="font-semibold group-hover:text-blue-500 transition-colors">{person.name}</div>
                      <div className="text-sm text-muted-foreground">{person.role}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
