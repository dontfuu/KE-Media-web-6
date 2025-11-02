'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '../lib/language'

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Text Block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              {t({ en: 'About KẾ Media', vn: 'Về KẾ Media' })}
            </h2>

            <p className="text-lg md:text-xl text-gray-400 mb-6 leading-relaxed">
              {t({
                en: 'We are a creative agency that turns insights inside out. With strategy, creativity, and execution, we help brands stand out.',
                vn: 'Chúng tôi là agency sáng tạo biến insights thành hiện thực. Với chiến lược, sáng tạo và thực thi, chúng tôi giúp thương hiệu nổi bật.'
              })}
            </p>

            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              {t({
                en: 'Our team of strategists, designers, and creators collaborate to build memorable brand experiences.',
                vn: 'Đội ngũ chiến lược gia, designer và creator của chúng tôi hợp tác để tạo nên trải nghiệm thương hiệu đáng nhớ.'
              })}
            </p>
          </motion.div>

          {/* Image / Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-gray-900 hover:border-[#A3FF47] hover:shadow-[0_0_40px_#A3FF4725] transition-all"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#A3FF47]/15 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center text-gray-600 text-sm md:text-base">
              [ Team Photo / Office Shot / Behind The Scenes ]
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

