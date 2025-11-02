import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ClientProviders from '../lib/ClientProviders' //

const inter = Inter({ subsets: ['latin', 'vietnamese'] })

export const metadata: Metadata = {
  title: 'KẾ Media - Turn insight inside out',
  description: 'Premium creative media agency in Vietnam. Cần thiết – KẾ ngay.',
  keywords: 'creative agency, media, branding, vietnam, ke media',
  openGraph: {
    title: 'KẾ Media',
    description: 'Turn insight inside out.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <ClientProviders>   {/* ✅ Wrapper ở đây */}
          <Header />
          <main>{children}</main>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  )
}
