'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '../ui/button'
import AnimateOnScroll from '../animations/AnimateOnScroll'

export default function ServicesGrid({ services }) {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <AnimateOnScroll yOffset={20}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Premium Services
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll yOffset={20} delay={0.2}>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From stunning decorations to delicious catering, we handle every detail to make your event unforgettable.
            </p>
          </AnimateOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <AnimateOnScroll
              key={service.id}
              yOffset={30}
              delay={0.1 * index}
              className="h-full"
            >
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-md overflow-hidden h-full flex flex-col border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {service.description}
                  </p>
                  <ul className="mb-4 space-y-1">
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
                    href={service.path}
                    className="inline-flex items-center text-accent font-medium hover:text-accent/80 transition-colors"
                  >
                    View details <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </motion.div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll yOffset={20} delay={0.4} className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/services">View All Services</Link>
          </Button>
        </AnimateOnScroll>
      </div>
    </section>
  )
}