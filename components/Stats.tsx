'use client'
import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/language'
import { useEffect, useState } from 'react'

const stats = [
  { value: 150, suffix: '+', label: { en: 'Projects Completed', vn: 'Dự Án Hoàn Thành' } },
  { value: 50, suffix: '+', label: { en: 'Happy Clients', vn: 'Khách Hàng Hài Lòng' } },
  { value: 10, suffix: '+', label: { en: 'Years Experience', vn: 'Năm Kinh Nghiệm' } },
  { value: 25, suffix: '+', label: { en: 'Team Members', vn: 'Thành Viên' } }
]

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = target / steps
    let current = 0
    
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    
    return () => clearInterval(timer)
  }, [target])
  
  return <span>{count}{suffix}</span>
}

export default function Stats() {
  const { language } = useLanguage()
  return (
    <section className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#A3FF47] mb-4">
                <Counter target={s.value} suffix={s.suffix} />
              </div>
              <p className="text-gray-400">{s.label[language]}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
