'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '../lib/language'
import Link from 'next/link'

const featured = [
  {
    id: 1,
    title: { en: 'Brand Launch', vn: 'Ra Mắt Thương Hiệu' },
    category: { en: 'Branding', vn: 'Thương Hiệu' },
  },
  {
    id: 2,
    title: { en: 'Campaign 2024', vn: 'Chiến Dịch 2024' },
    category: { en: 'Campaign', vn: 'Chiến Dịch' },
  },
  {
    id: 3,
    title: { en: 'Digital Platform', vn: 'Nền Tảng Số' },
    category: { en: 'Digital', vn: 'Số Hóa' },
  },
  {
    id: 4,
    title: { en: 'Motion Series', vn: 'Series Động' },
    category: { en: 'Motion', vn: 'Chuyển Động' },
  },
]

export default function Portfolio() {
  const { t, language } = useLanguage()

  return (
    <section id="portfolio" className="py-32 bg-black">
      <div className="container mx-auto px-6">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            {t({ en: 'Featured Work', vn: 'Dự Án Nổi Bật' })}
          </h2>
          <p className="text-xl text-gray-400">
            Lắm mưu nhiều KẾ – Sáng mưu chiều KẾ.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {featured.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden border border-white/10 transition-all group-hover:border-[#A3FF47]">
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#A3FF47]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Placeholder preview */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                  Preview {p.id}
                </div>
              </div>

              <div className="mt-4 space-y-1">
                <span className="text-[#A3FF47] text-sm">
                  {p.category[language]}
                </span>
                <h3 className="text-2xl font-bold transition-colors group-hover:text-[#A3FF47]">
                  {p.title[language]}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/projects"
            className="inline-block px-8 py-4 border border-gray-800 rounded-lg hover:border-[#A3FF47] hover:text-[#A3FF47] transition-all"
          >
            {t({ en: 'View All Projects', vn: 'Xem Tất Cả' })}
          </Link>
        </div>
      </div>
    </section>
  )
}

