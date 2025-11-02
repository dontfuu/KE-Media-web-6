'use client'
import { useLanguage } from '@/lib/language'

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage()
  
  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'vn' : 'en')}
      className="px-4 py-2 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors font-medium"
    >
      {language === 'en' ? 'VN' : 'EN'}
    </button>
  )
}
