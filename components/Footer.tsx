'use client'

import Link from 'next/link'
import { useLanguage } from '../lib/language'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-black border-t border-white/10 text-gray-400">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4">
              KẾ <span className="text-[#A3FF47]">Media</span>
            </h3>
            <p className="text-gray-400 mb-6">
              {t({
                en: 'Có KẾ – thành ra khó Ế.',
                vn: 'Có KẾ – thành ra khó Ế.',
              })}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-[#A3FF47] hover:text-black transition-colors">FB</a>
              <a href="#" className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-[#A3FF47] hover:text-black transition-colors">IG</a>
              <a href="#" className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-[#A3FF47] hover:text-black transition-colors">LI</a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">{t({ en: 'Quick Links', vn: 'Liên Kết' })}</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-[#A3FF47] transition-colors">{t({ en: 'Home', vn: 'Trang Chủ' })}</Link></li>
              <li><Link href="/projects" className="hover:text-[#A3FF47] transition-colors">{t({ en: 'Projects', vn: 'Dự Án' })}</Link></li>
              <li><Link href="/contact" className="hover:text-[#A3FF47] transition-colors">{t({ en: 'Contact', vn: 'Liên Hệ' })}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">{t({ en: 'Contact', vn: 'Liên Hệ' })}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>hello@kemedia.vn</li>
              <li>+84 123 456 789</li>
              <li>Hanoi, Vietnam</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} KẾ Media. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
