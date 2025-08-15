'use client'

import { motion } from 'framer-motion'
import { Check, Award, Sparkles, Heart, Users, Shield } from 'lucide-react'
import AnimateOnScroll from '../animations/AnimateOnScroll'
import TextReveal from '../animations/TextReveal'

const features = [
  {
    icon: <Sparkles className="w-8 h-8 text-accent" />,
    title: "Creative Designs",
    description: "Unique and personalized themes tailored to your vision"
  },
  {
    icon: <Award className="w-8 h-8 text-accent" />,
    title: "5-Star Rated",
    description: "Consistently top-rated event planners in Nagercoil"
  },
  {
    icon: <Heart className="w-8 h-8 text-accent" />,
    title: "Passionate Team",
    description: "Dedicated professionals who love what they do"
  },
  {
    icon: <Users className="w-8 h-8 text-accent" />,
    title: "1000+ Happy Clients",
    description: "Satisfied customers across Tamil Nadu"
  },
  {
    icon: <Check className="w-8 h-8 text-accent" />,
    title: "End-to-End Service",
    description: "From planning to execution, we handle it all"
  },
  {
    icon: <Shield className="w-8 h-8 text-accent" />,
    title: "Quality Guarantee",
    description: "Premium vendors and materials for flawless events"
  }
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <AnimateOnScroll yOffset={30}>
            <span className="inline-block px-3 py-1 text-sm font-medium bg-accent/10 text-accent rounded-full mb-4">
              Why Choose Us
            </span>
          </AnimateOnScroll>
          
          <AnimateOnScroll yOffset={30} delay={0.1}>
            <TextReveal
              text="The VIP Function Planners Difference"
              as="h2"
              className="text-3xl md:text-4xl font-bold mb-4"
              animationType="slideUp"
            />
          </AnimateOnScroll>
          
          <AnimateOnScroll yOffset={30} delay={0.2}>
            <p className="text-lg text-gray-600">
              We go beyond ordinary event planning to create extraordinary experiences that
              reflect your unique style and personality.
            </p>
          </AnimateOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimateOnScroll 
              key={index} 
              yOffset={30} 
              delay={0.1 * index}
              className="h-full"
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-full flex flex-col"
              >
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll yOffset={30} delay={0.6}>
          <div className="mt-16 bg-gradient-to-r from-accent to-secondary rounded-xl p-8 md:p-12 text-white">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Our Promise to You
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>100% transparent pricing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>No last-minute surprises</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>Dedicated event coordinator</span>
                    </li>
                  </ul>
                </div>
                <div className="relative h-64">
                  <div className="absolute inset-0 bg-[url('/assets/images/team/team-working.webp')] bg-cover bg-center rounded-lg shadow-lg" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg flex items-end p-6">
                    <p className="text-white/90 text-sm">
                      Our team working on a wedding event in Nagercoil
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}