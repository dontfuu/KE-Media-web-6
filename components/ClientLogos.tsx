'use client'
import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/language'

const clients = ['Client 1', 'Client 2', 'Client 3', 'Client 4', 'Client 5', 'Client 6']

export default function ClientLogos() {
  const { t } = useLanguage()
  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-400">{t({ en: 'Trusted By', vn: 'Đối Tác' })}</h3>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((c, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-center justify-center p-6 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors">
              <span className="text-gray-500 font-bold">{c}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
