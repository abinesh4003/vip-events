'use client'

import { motion } from 'framer-motion'
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { Button } from '../ui/button'
import AnimateOnScroll from '../animations/AnimateOnScroll'

export default function Testimonials({ testimonials }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    )
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    )
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <AnimateOnScroll yOffset={30}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll yOffset={50} delay={0.2}>
          <div className="max-w-4xl mx-auto relative">
            {/* Testimonial Card */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg p-8 md:p-10 relative"
            >
              <Quote className="absolute top-6 left-6 text-gray-200 w-8 h-8" />
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-accent">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonials[currentIndex].rating
                            ? 'fill-accent text-accent'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <blockquote className="text-lg italic text-gray-700 mb-6">
                    "{testimonials[currentIndex].content}"
                  </blockquote>
                  <div>
                    <p className="font-bold text-gray-900">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonials[currentIndex].role}
                    </p>
                    <p className="text-sm text-gray-400 mt-1">
                      {testimonials[currentIndex].date}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Navigation Arrows */}
            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Google Reviews */}
        <AnimateOnScroll yOffset={30} delay={0.4} className="mt-16">
          <div className="bg-accent/10 rounded-xl p-6 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold mb-4 text-center">
              Our Google Reviews
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {testimonials.slice(0, 2).map((review, index) => (
                <motion.div
                  key={`google-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="bg-white p-4 rounded-lg shadow-sm"
                >
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating
                            ? 'fill-accent text-accent'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-2">"{review.content}"</p>
                  <p className="text-sm font-medium text-gray-900">
                    - {review.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}