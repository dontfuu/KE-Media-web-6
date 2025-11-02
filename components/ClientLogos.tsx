'use client'
import { motion } from 'framer-motion'
import { useLanguage } from '../lib/language'

const clients = [
  { name: 'Client 1', logo: null },
  { name: 'Client 2', logo: null },
  { name: 'Client 3', logo: null },
  { name: 'Client 4', logo: null },
  { name: 'Client 5', logo: null },
  { name: 'Client 6', logo: null },
]

export default function ClientLogos() {
  const { t } = useLanguage()

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h3 className="text-lg uppercase tracking-widest text-gray-400 font-medium">
            {t({ en: 'Trusted by brands', vn: 'Đối tác tin tưởng' })}
          </h3>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="flex items-center justify-center p-6 bg-gray-900/40 border border-gray-800 rounded-xl hover:bg-gray-900 hover:border-[#A3FF47] transition-all duration-300"
            >
              {/* Replace with <Image src="/logos/xxx.svg" ... /> when ready */}
              <span className="text-gray-500 font-semibold tracking-wide">{c.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

