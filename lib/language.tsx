'use client'

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useCallback,
  useMemo,
} from 'react'

export type LanguageType = 'en' | 'vn'

interface LanguageContextType {
  language: LanguageType
  setLanguage: (lang: LanguageType) => void
  t: (text: { en: string; vn: string }) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<LanguageType>('vn') // default VN
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        const saved = localStorage.getItem('ke-media-language')
        if (saved === 'en' || saved === 'vn') {
          setLanguageState(saved)
        }
      }
    } catch (e) {
      // localStorage không khả dụng -> bỏ qua
    } finally {
      setMounted(true)
    }
  }, [])

  const setLanguage = useCallback(
    (lang: LanguageType) => {
      setLanguageState(lang)
      if (typeof window !== 'undefined' && mounted) {
        try {
          localStorage.setItem('ke-media-language', lang)
        } catch (e) {
          // ignore localStorage write errors
        }
      }
    },
    [mounted]
  )

  const t = useCallback(
    (text: { en: string; vn: string }) => {
      return text[language] ?? text.en
    },
    [language]
  )

  const value = useMemo(() => ({ language, setLanguage, t }), [language, setLanguage, t])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within LanguageProvider')
  return context
}