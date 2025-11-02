'use client'
import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/language'
import Link from 'next/link'

export default function CTA() {
  const { t } = useLanguage()
  return (
    <section className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            {t({ en: 'Ready to Create?', vn: 'Sẵn Sàng Sáng Tạo?' })}
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            {t({
              en: "Let's turn your insights inside out and create something remarkable together.",
              vn: 'Hãy cùng biến ý tưởng của bạn thành hiện thực và tạo ra điều đặc biệt.'
            })}
          </p>
          <Link href="/contact" className="inline-block px-12 py-5 bg-[#A3FF47] text-black text-lg font-bold rounded-lg hover:bg-[#8DE033] transition-all hover:scale-105">
            {t({ en: 'Start a Project', vn: 'Bắt Đầu Dự Án' })}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
