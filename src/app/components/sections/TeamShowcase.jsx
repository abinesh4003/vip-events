'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import AnimateOnScroll from '../animations/AnimateOnScroll'

const teamMembers = [
  {
    name: 'Ramesh Kumar',
    role: 'Founder & CEO',
    image: '/assets/images/team/ramesh.webp',
    experience: '12 years'
  },
  // Add other team members
]

export default function TeamShowcase() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <AnimateOnScroll yOffset={30}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The creative minds behind your perfect event
            </p>
          </div>
        </AnimateOnScroll>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <AnimateOnScroll key={member.name} yOffset={50} delay={0.1 * index}>
              <motion.div whileHover={{ y: -5 }} className="text-center">
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-accent mb-1">{member.role}</p>
                <p className="text-sm text-gray-500">{member.experience} experience</p>
              </motion.div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}