'use client'
import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type LanguageType = 'en' | 'vn'

interface LanguageContextType {
  language: LanguageType
  setLanguage: (lang: LanguageType) => void
  t: (text: { en: string; vn: string }) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<LanguageType>('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem('ke-media-language') as LanguageType
    if (saved) setLanguageState(saved)
  }, [])

  const setLanguage = (lang: LanguageType) => {
    setLanguageState(lang)
    if (mounted) localStorage.setItem('ke-media-language', lang)
  }

  const t = (text: { en: string; vn: string }) => text[language]

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within LanguageProvider')
  return context
}
