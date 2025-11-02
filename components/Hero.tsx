'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '../lib/language'
import Link from 'next/link'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#A3FF47]/10 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t({
              en: 'Turn insight inside out.',
              vn: 'Kế mách, sợ chi ế khách.'
            })}
          </motion.h1>

          <motion.p
            className="text-lg md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {t({
              en: 'Cần thiết – KẾ ngay.',
              vn: 'Cần thiết – KẾ ngay.'
            })}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="px-8 py-4 bg-[#A3FF47] text-black font-bold rounded-lg hover:bg-[#95FF3F] transition-all hover:scale-105"
            >
              {t({ en: "Let's Talk", vn: 'Bắt Đầu Ngay' })}
            </Link>

            <Link
              href="/projects"
              className="px-8 py-4 border border-gray-700 rounded-lg hover:border-[#A3FF47] hover:text-[#A3FF47] transition-all hover:scale-105"
            >
              {t({ en: 'View Work', vn: 'Xem Dự Án' })}
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-700 rounded-full flex justify-center p-2"
        >
          <div className="w-1 h-3 bg-[#A3FF47] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}

