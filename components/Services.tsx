'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '~/lib/language'
import { Lightbulb, Clapperboard, Rocket } from 'lucide-react'

const services = [
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: { en: 'Brand Strategy', vn: 'Chiến lược thương hiệu' },
    desc: {
      en: 'Clear positioning and messaging for brands that want to win attention.',
      vn: 'Định vị & thông điệp rõ ràng cho thương hiệu muốn chiếm spotlight.'
    }
  },
  {
    icon: <Clapperboard className="w-6 h-6" />,
    title: { en: 'Creative Production', vn: 'Sản xuất sáng tạo' },
    desc: {
      en: 'High-converting videos & visuals built for social and ads.',
      vn: 'Video & hình ảnh tối ưu chuyển đổi cho social & ads.'
    }
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: { en: 'Performance Media', vn: 'Media tăng trưởng doanh số' },
    desc: {
      en: 'Content tested, scaled & tracked with real results.',
      vn: 'Nội dung kiểm chứng, tối ưu, đo lường được hiệu quả.'
    }
  }
]

export default function Services() {
  const { t } = useLanguage()

  return (
    <section id="services" className="container mx-auto px-6 py-32">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        {t({ en: 'What we do', vn: 'Chúng tôi làm gì' })}
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl border border-white/10 bg-black/40 hover:border-[#A3FF47] hover:shadow-[0_0_35px_#a3ff4725] transition-all"
          >
            <div className="text-[#A3FF47] mb-4">{s.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{t(s.title)}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{t(s.desc)}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
