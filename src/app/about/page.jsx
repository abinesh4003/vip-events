'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Clock, Users, Award, Heart } from 'lucide-react'
import { Button } from '../components/ui/button'
import AnimateOnScroll from '../components/animations/AnimateOnScroll'
import TextReveal from '../components/animations/TextReveal'
import TeamShowcase from '../components/sections/TeamShowcase'
import Link from 'next/link'

export default function AboutUs() {
  const stats = [
    { value: '10+', label: 'Years Experience', icon: <Clock className="w-6 h-6" /> },
    { value: '500+', label: 'Events Managed', icon: <Users className="w-6 h-6" /> },
    { value: '100%', label: 'Client Satisfaction', icon: <Heart className="w-6 h-6" /> },
    { value: '25+', label: 'Awards Won', icon: <Award className="w-6 h-6" /> }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center bg-gray-900 overflow-hidden">
        <Image
          src="/assets/images/about/team-working.webp"
          alt="VIP Function Planners Team"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <AnimateOnScroll yOffset={30}>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <TextReveal text="Our Story" animationType="slideUp" />
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll yOffset={30} delay={0.2}>
            <p className="text-xl text-gray-300 mb-8">
              Creating unforgettable moments in Nagercoil since 2012
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll yOffset={30} delay={0.4}>
            <Button asChild size="lg" variant="accent">
              <Link href="/contact">Get to Know Us</Link>
            </Button>
          </AnimateOnScroll>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll yOffset={50} className="order-2 lg:order-1">
              <div className="relative rounded-xl overflow-hidden shadow-xl aspect-[4/3]">
                <Image
                  src="/assets/images/about/founder.webp"
                  alt="Our Founder"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimateOnScroll>
            
            <div className="order-1 lg:order-2">
              <AnimateOnScroll yOffset={30}>
                <span className="inline-block px-3 py-1 text-sm font-medium bg-accent/10 text-accent rounded-full mb-4">
                  About Us
                </span>
              </AnimateOnScroll>
              <AnimateOnScroll yOffset={30} delay={0.1}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <TextReveal 
                    text="Turning Moments Into Memories" 
                    animationType="slideUp" 
                  />
                </h2>
              </AnimateOnScroll>
              <AnimateOnScroll yOffset={30} delay={0.2}>
                <div className="prose max-w-none text-gray-600 space-y-4">
                  <p>
                    Founded in 2012, VIP Function Planners has grown from a small event management team 
                    to Nagercoil's most trusted name in celebrations. Our journey began with a simple 
                    passion for creating beautiful events and has evolved into a full-service planning 
                    powerhouse.
                  </p>
                  <p>
                    What sets us apart is our attention to detail and commitment to understanding each 
                    client's unique vision. We don't just plan events - we craft experiences that reflect 
                    your personality and leave lasting impressions.
                  </p>
                  <p>
                    From intimate gatherings to grand weddings, our team of creative professionals brings 
                    expertise in design, coordination, and flawless execution to every event.
                  </p>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimateOnScroll yOffset={30}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Clients Choose Us
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Numbers that speak volumes about our dedication and expertise
              </p>
            </div>
          </AnimateOnScroll>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <AnimateOnScroll 
                key={stat.label} 
                yOffset={50} 
                delay={0.1 * index}
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-xl shadow-sm text-center border border-gray-100"
                >
                  <div className="text-accent flex justify-center mb-3">
                    {stat.icon}
                  </div>
                  <p className="text-3xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </p>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamShowcase />

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-accent/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AnimateOnScroll yOffset={30}>
              <span className="inline-block px-3 py-1 text-sm font-medium bg-accent/10 text-accent rounded-full mb-4">
                Our Mission
              </span>
            </AnimateOnScroll>
            <AnimateOnScroll yOffset={30} delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <TextReveal 
                  text="Excellence in Every Event" 
                  animationType="slideUp" 
                />
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll yOffset={30} delay={0.2}>
              <div className="prose max-w-none mx-auto text-gray-700 space-y-4">
                <p>
                  To create magical, stress-free celebrations that exceed expectations through 
                  innovative design, meticulous planning, and genuine care for every detail.
                </p>
                <p>
                  We believe every event should tell a story - your story. Our team works tirelessly 
                  to ensure your celebration reflects your personality, values, and dreams.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll yOffset={30} delay={0.3} className="mt-8">
              <Button asChild size="lg" variant="accent">
                <Link href="/contact">Plan Your Event</Link>
              </Button>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  )
}