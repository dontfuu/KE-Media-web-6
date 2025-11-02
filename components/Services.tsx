'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/language'

const services = [
  {
    icon: '🎯',
    title: { en: 'Brand Strategy', vn: 'Chiến Lược Thương Hiệu' },
    description: { 
      en: 'Strategic positioning and brand identity that resonates with your audience.',
      vn: 'Định vị chiến lược và nhận diện thương hiệu phù hợp với khách hàng của bạn.'
    }
  },
  {
    icon: '✨',
    title: { en: 'Creative Production', vn: 'Sản Xuất Sáng Tạo' },
    description: { 
      en: 'Premium content creation from concept to execution across all channels.',
      vn: 'Sản xuất nội dung cao cấp từ ý tưởng đến thực thi trên mọi kênh.'
    }
  },
  {
