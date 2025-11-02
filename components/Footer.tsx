'use client'

import Link from 'next/link'
import { useLanguage } from '../lib/language'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-black border-t border-white/10 text-gray-400">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4">
              KẾ <span className="text-[#A3FF47]">Media</span>
            </h3>
            <p className="mb-6">
              {t({
                en: 'Have KẾ – never go broke.',
                vn: 'Có KẾ – thành ra khó Ế.'
              })}
            </p>

            {/* Socials */}
            <div className="flex gap-3">
              {[
                { label: 'FB', link: '#' },
                { label: 'IG', link: '#' },
                { label: 'TT', link: '#' },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.link}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:bg-[#A3FF47] hover:text-black transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">
              {t({ en: 'Quick Links', vn: 'Liên Kết' })}
            </h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-[#A3FF47]">{t({ en: 'Home', vn: 'Trang Chủ' })}</Link></li>
              <li><Link href="/projects" className="hover:text-[#A3FF47]">{t({ en: 'Projects', vn: 'Dự Án' })}</Link></li>

