'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLanguage } from '../lib/language'

export default function ProjectsClient({ projects }: { projects: any[] }) {
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
