'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../../lib/language'

export default function ContactPage() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', company: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              {t({ en: "Let's Talk", vn: 'Liên Hệ' })}
            </h1>
            <p className="text-xl text-gray-400">
              {t({ 
                en: 'Ready to turn your insights inside out? Get in touch.',
                vn: 'Sẵn sàng biến ý tưởng thành hiện thực? Hãy liên hệ ngay.'
              })}
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  {t({ en: 'Name', vn: 'Họ Tên' })}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:border-[#A3FF47] focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  {t({ en: 'Email', vn: 'Email' })}
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:border-[#A3FF47] focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                {t({ en: 'Company', vn: 'Công Ty' })}
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:border-[#A3FF47] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                {t({ en: 'Message', vn: 'Tin Nhắn' })}
              </label>
              <textarea
                required
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:border-[#A3FF47] focus:outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full md:w-auto px-8 py-4 bg-[#A3FF47] text-black font-bold rounded-lg hover:bg-[#8DE033] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' 
                ? t({ en: 'Sending...', vn: 'Đang gửi...' })
                : t({ en: 'Send Message', vn: 'Gửi Tin Nhắn' })
              }
            </button>

            {status === 'success' && (
              <p className="text-[#A3FF47]">
                {t({ en: 'Message sent successfully!', vn: 'Gửi tin nhắn thành công!' })}
              </p>
            )}
            {status === 'error' && (
              <p className="text-red-500">
                {t({ en: 'Something went wrong. Please try again.', vn: 'Có lỗi xảy ra. Vui lòng thử lại.' })}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </div>
  )
}


