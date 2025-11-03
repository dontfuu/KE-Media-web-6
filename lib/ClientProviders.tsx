'use client'

import React from 'react'
import { LanguageProvider } from './language'

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>
}
