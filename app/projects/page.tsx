'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/language'
import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    id: 1,
    title: { en: 'Brand Identity System', vn: 'Hệ Thống Nhận Diện Thương Hiệu' },
    client: 'Tech Startup',
    category: { en: 'Branding', vn: 'Thương Hiệu' },
    year: 2024,
    image: '/assets/projects/project-1.jpg'
  },
  {
    id: 2,
    title: { en: 'Product Launch Campaign', vn: 'Chiến Dịch Ra Mắt Sản Phẩm' },
    client: 'E-commerce Brand',
    category: { en: 'Campaign', vn: 'Chiến Dịch' },
    year: 2024,
    image: '/assets/projects/project-2.jpg'
  },
  {
    id: 3,
    title: { en: 'Digital Experience Platform', vn: 'Nền Tảng Trải Nghiệm Số' },
    client: 'Fintech Company',
    category: { en: 'Digital', vn: 'Số Hóa' },
    year: 2024,
    image: '/assets/projects/project-3.jpg'
  },
  {
    id: 4,
    title: { en: 'Social Media Strategy', vn: 'Chiến Lược Truyền Thông' },
    client: 'Fashion Brand',
    category: { en: 'Social', vn: 'Mạng Xã Hội' },
    year: 2023,
    image: '/assets/projects/project-4.jpg'
  },
  {
    id: 5,
    title: { en: 'Motion Graphics Series', vn: 'Series Đồ Họa Chuyển Động' },
    client: 'Media Network',
    category: { en: 'Motion', vn: 'Chuyển Động' },
    year: 2023,
    image: '/assets/projects/project-5.jpg'
  },
  {
    id: 6,
    title: { en: 'Website Redesign', vn: 'Thiết Kế Lại Website' },
    client: 'Corporate',
    category: { en: 'Web Design', vn: 'Thiết Kế Web' },
    year: 2023,
    image: '/assets/projects/project-6.jpg'
  },
  {
    id: 7,
    title: { en: 'Content Strategy & Production', vn: 'Chiến Lược & Sản Xuất Nội Dung' },
    client: 'Food & Beverage',
    category: { en: 'Content', vn: 'Nội Dung' },
    year: 2023,
    image: '/assets/projects/project-7.jpg'
  },
  {
    id: 8,
    title: { en: 'Event Branding', vn: 'Nhận Diện Sự Kiện' },
    client: 'Music Festival',
    category: { en: 'Events', vn: 'Sự Kiện' },
    year: 2023,
    image: '/assets/projects/project-8.jpg'
  },
]

export default function ProjectsPage() {
  const { language, t } = useLanguage()

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            {t({ en: 'Our Work', vn: 'Dự Án' })}
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            {t({ 
              en: 'Selected projects showcasing our strategic approach and creative execution.',
              vn: 'Các dự án tiêu biểu thể hiện cách tiếp cận chiến lược và thực thi sáng tạo của chúng tôi.'
            })}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <Link href={`/projects/${project.id}`}>
                <div className="relative aspect-[4/3] bg-gray-900 rounded-lg overflow-hidden mb-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#A3FF47]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                    [Project Image {project.id}]
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#A3FF47]">{project.category[language]}</span>
                    <span className="text-gray-500">{project.year}</span>
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-[#A3FF47] transition-colors">
                    {project.title[language]}
                  </h3>
                  <p className="text-gray-400">{project.client}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
