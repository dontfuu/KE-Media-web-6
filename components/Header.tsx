'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import LanguageToggle from './LanguageToggle'
import { useLanguage } from '@/lib/language'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-lg border-b border-gray-800' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            KẾ <span className="text-[#A3FF47]">Media</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="hover:text-[#A3FF47] transition-colors">
              {t({ en: 'Home', vn: 'Trang Chủ' })}
            </Link>
            <Link href="/projects" className="hover:text-[#A3FF47] transition-colors">
              {t({ en: 'Projects', vn: 'Dự Án' })}
            </Link>
            <Link href="/contact" className="hover:text-[#A3FF47] transition-colors">
              {t({ en: 'Contact', vn: 'Liên Hệ' })}
            </Link>
            <LanguageToggle />
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pt-6 pb-4 space-y-4"
          >
            <Link href="/" className="block hover:text-[#A3FF47] transition-colors">
              {t({ en: 'Home', vn: 'Trang Chủ' })}
            </Link>
            <Link href="/projects" className="block hover:text-[#A3FF47] transition-colors">
              {t({ en: 'Projects', vn: 'Dự Án' })}
            </Link>
            <Link href="/contact" className="block hover:text-[#A3FF47] transition-colors">
              {t({ en: 'Contact', vn: 'Liên Hệ' })}
            </Link>
            <LanguageToggle />
          </motion.nav>
        )}
      </div>
    </motion.header>
  )
}
