'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function ServiceCard({ service }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 h-full flex flex-col"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold mb-3">{service.title}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <ul className="mb-4 space-y-2">
          {service.features.slice(0, 3).map((feature, i) => (
            <li key={i} className="flex items-start">
              <span className="text-accent mr-2">✓</span>
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="px-6 pb-6">
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center text-accent font-medium hover:text-accent/80 transition-colors"
        >
          View details <ArrowRight className="ml-1 w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  )
}