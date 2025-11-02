'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/language'
import Link from 'next/link'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#A3FF47]/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight"
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
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto"
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
              className="px-8 py-4 bg-[#A3FF47] text-black font-bold rounded-lg hover:bg-[#8DE033] transition-all hover:scale-105"
            >
              {t({ en: "Let's Talk", vn: 'Bắt Đầu Ngay' })}
            </Link>
            <Link
              href="/projects"
              className="px-8 py-4 border border-gray-800 rounded-lg hover:border-[#A3FF47] transition-all hover:scale-105"
            >
              {t({ en: 'View Work', vn: 'Xem Dự Án' })}
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-800 rounded-full flex justify-center p-2"
        >
          <div className="w-1 h-3 bg-[#A3FF47] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
