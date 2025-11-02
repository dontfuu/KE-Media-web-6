'use client'

import { useLanguage } from '~/lib/language'

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'vn' : 'en')}
      className="px-3 py-1.5 text-xs border border-white/20 rounded-md hover:border-[#A3FF47] hover:text-[#A3FF47] transition-all"
    >
      {language === 'en' ? 'VN' : 'EN'}
    </button>
  )
}
