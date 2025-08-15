'use client'

import { motion } from 'framer-motion'
import { Button } from '../ui/button'
import { Phone, Calendar, MessageSquare } from 'lucide-react'
import AnimateOnScroll from '../animations/AnimateOnScroll'
import Link from 'next/link'

export default function CTA({ 
  title = "Ready to Plan Your Dream Event?", 
  description = "Contact us today for a free consultation and quote", 
  primaryButton = { text: "Get Started", link: "/contact" },
  secondaryButton = { text: "Call Now", link: "tel:8778304145" },
  showPattern = true 
}) {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-r from-accent/10 to-secondary/10">
      {/* Decorative elements */}
      {showPattern && (
        <>
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
            <div className="absolute top-0 left-0 w-32 h-32 bg-accent rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-0 left-1/2 w-32 h-32 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          </div>
          <div className="absolute inset-0 bg-[url('/assets/images/patterns/dots.svg')] opacity-5"></div>
        </>
      )}

      <div className="container mx-auto px-4 relative z-10">
        <AnimateOnScroll yOffset={30}>
          <div className="max-w-3xl mx-auto text-center mb-10">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {title}
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {description}
            </motion.p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll yOffset={30} delay={0.2}>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto sm:max-w-none">
            <Button 
              asChild 
              size="lg" 
              className="gap-2 shadow-lg hover:shadow-accent/20 transition-shadow"
              variant="accent"
            >
              <Link href={primaryButton.link}>
                {primaryButton.text}
                <MessageSquare size={18} />
              </Link>
            </Button>
            
            <Button 
              asChild 
              size="lg" 
              variant="outline"
              className="gap-2 border-2 border-gray-300 hover:border-accent transition-colors"
            >
              <Link href={secondaryButton.link}>
                {secondaryButton.text}
                <Phone size={18} />
              </Link>
            </Button>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll yOffset={30} delay={0.4} className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* CTA Card 1 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center"
            >
              <div className="bg-accent/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="text-accent w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Instant Booking</h3>
              <p className="text-gray-600 mb-4">Book your date instantly with our online calendar</p>
              <Button asChild variant="link" className="text-accent p-0">
                <Link href="/booking">Book Now →</Link>
              </Button>
            </motion.div>

            {/* CTA Card 2 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center"
            >
              <div className="bg-accent/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-accent w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Quick Support</h3>
              <p className="text-gray-600 mb-4">Call us directly for immediate assistance</p>
              <Button asChild variant="link" className="text-accent p-0">
                <Link href="tel:8778304145">Call 8778304145 →</Link>
              </Button>
            </motion.div>

            {/* CTA Card 3 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center"
            >
              <div className="bg-accent/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="text-accent w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Get a Quote</h3>
              <p className="text-gray-600 mb-4">Customized quotes within 24 hours</p>
              <Button asChild variant="link" className="text-accent p-0">
                <Link href="/contact">Request Quote →</Link>
              </Button>
            </motion.div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}