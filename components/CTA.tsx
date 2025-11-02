'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '../lib/language'
import Link from 'next/link'

export default function CTA() {
  const { t } = useLanguage()

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* subtle neon background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#A3FF47]/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            {t({ en: 'Ready to Create?', vn: 'Sẵn Sàng Sáng Tạo?' })}
          </h2>

          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            {t({
              en: "Let's turn your insights inside out and create something remarkable together.",
              vn: 'Hãy cùng biến ý tưởng của bạn thành hiện thực và tạo ra điều đặc biệt.'
            })}
          </p>

          <Link
            href="/contact"
            className="inline-block px-12 py-5 bg-[#A3FF47] text-black text-lg font-bold rounded-lg hover:bg-[#95FF3F] hover:scale-105 transition-all shadow-[0_0_30px_#A3FF4725]"
          >
            {t({ en: 'Start a Project', vn: 'Bắt Đầu Dự Án' })}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

