'use client'
import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/language'

export default function About() {
  const { t } = useLanguage()
  return (
    <section className="py-32 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              {t({ en: 'About KẾ Media', vn: 'Về KẾ Media' })}
            </h2>
            <p className="text-xl text-gray-400 mb-6">
              {t({ 
                en: 'We are a creative agency that turns insights inside out. With strategy, creativity, and execution, we help brands stand out.',
                vn: 'Chúng tôi là agency sáng tạo biến insights thành hiện thực. Với chiến lược, sáng tạo và thực thi, chúng tôi giúp thương hiệu nổi bật.'
              })}
            </p>
            <p className="text-xl text-gray-400">
              {t({
                en: 'Our team of strategists, designers, and developers work together to create memorable brand experiences.',
                vn: 'Đội ngũ chiến lược gia, designer và developer của chúng tôi hợp tác tạo ra trải nghiệm thương hiệu đáng nhớ.'
              })}
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative aspect-square bg-gray-900 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#A3FF47]/20 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center text-gray-600">
              [Team Photo]
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
