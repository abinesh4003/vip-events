'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Star, Calendar, Users, Check, Phone } from 'lucide-react'
import { Button } from '../components/ui/button'
import AnimateOnScroll from '../components/animations/AnimateOnScroll'
import TextReveal from '../components/animations/TextReveal'
import ServiceCard from '../components/ui/ServiceCard'
import Link from 'next/link'

const services = [
  {
    id: 1,
    title: "Stage Decoration",
    slug: "stage-decoration",
    description: "Transform your venue into a breathtaking setting with our luxury stage décor services in Nagercoil",
    image: "/assets/images/services/stage-decoration.webp",
    features: [
      "Custom theme designs",
      "Wedding mandap creations",
      "Birthday backdrops",
      "LED screen integration",
      "Floral arrangements"
    ],
    details: [
      {
        title: "Wedding Stage Designs",
        content: "From traditional South Indian mandaps to contemporary floral arches, we create stunning focal points for your ceremony.",
        image: "/assets/images/services/wedding-stage.webp"
      },
      {
        title: "Birthday Themes",
        content: "Customized themes from princess castles to superhero setups for memorable birthday celebrations.",
        image: "/assets/images/services/birthday-theme.webp"
      }
    ]
  },
  {
    id: 2,
    title: "Catering Services",
    slug: "catering",
    description: "Authentic Tamil cuisine with both vegetarian and non-vegetarian options for all events",
    image: "/assets/images/services/catering.webp",
    features: [
      "Traditional wedding feasts",
      "Hygienic food preparation",
      "Buffet setup",
      "Special diet options",
      "Professional serving staff"
    ],
    details: [
      {
        title: "Wedding Catering",
        content: "Complete traditional meals with 11 kootu, 5 curry, 3 payasam, variety rice, sweets and snacks.",
        image: "/assets/images/services/wedding-catering.webp"
      },
      {
        title: "Non-Veg Specialties",
        content: "Flavorful biryanis, chicken & mutton curries, seafood specialties, grills and festive starters.",
        image: "/assets/images/services/non-veg.webp"
      }
    ]
  },
  {
    id: 3,
    title: "Entertainment",
    slug: "entertainment",
    description: "Professional DJs, live performances and unique couple entry concepts",
    image: "/assets/images/services/entertainment.webp",
    features: [
      "DJ with latest music",
      "Couple entry concepts",
      "Live games & activities",
      "Welcome dolls & girls",
      "Themed performances"
    ],
    details: [
      {
        title: "Couple Entry Specials",
        content: "Make a grand statement with snow fog, fire shots, floral pathways or royal-themed arrivals.",
        image: "/assets/images/services/couple-entry.webp"
      },
      {
        title: "DJ Music",
        content: "Energetic music mixing with latest Tamil, Hindi and English tracks to keep guests dancing.",
        image: "/assets/images/services/dj-music.webp"
      }
    ]
  },
  {
    id: 4,
    title: "Photography & Videography",
    slug: "photography",
    description: "Cinematic coverage that captures every magical moment of your special day",
    image: "/assets/images/services/photography.webp",
    features: [
      "Pre-wedding shoots",
      "Candid photography",
      "4K video coverage",
      "Drone shots",
      "Album design"
    ],
    details: [
      {
        title: "Cinematic Videography",
        content: "Professional storytelling through video with dramatic angles and editing.",
        image: "/assets/images/services/videography.webp"
      },
      {
        title: "Pre-Wedding Shoots",
        content: "Romantic location shoots at beaches, hills or heritage sites before your big day.",
        image: "/assets/images/services/pre-wedding.webp"
      }
    ]
  },
  {
    id: 5,
    title: "Special Stalls",
    slug: "stalls",
    description: "Enhance your event with fun food stalls and interactive counters",
    image: "/assets/images/services/stalls.webp",
    features: [
      "Popcorn & cotton candy",
      "Chocolate fountain",
      "Pani puri counters",
      "Wine & mocktail bars",
      "Custom printed balloons"
    ],
    details: [
      {
        title: "Interactive Food Stalls",
        content: "Live counters where guests can customize their snacks with various toppings.",
        image: "/assets/images/services/food-stalls.webp"
      },
      {
        title: "Drink Stations",
        content: "Elegant wine counters and creative mocktail bars with fresh ingredients.",
        image: "/assets/images/services/drink-station.webp"
      }
    ]
  }
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center bg-gray-900">
        <Image
          src="/assets/images/services/hero.webp"
          alt="Our Services"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <AnimateOnScroll yOffset={30}>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <TextReveal text="Our Premium Services" animationType="slideUp" />
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll yOffset={30} delay={0.2}>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Complete event solutions tailored to your unique vision
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <AnimateOnScroll yOffset={30}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                One-Stop Event Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From decor to catering, we handle every detail so you can enjoy your celebration
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimateOnScroll 
                key={service.id} 
                yOffset={50} 
                delay={0.1 * index}
                className="h-full"
              >
                <ServiceCard service={service} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimateOnScroll yOffset={30}>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Why VIP Function Planners?
                </h2>
                <p className="text-lg text-gray-600">
                  What makes us the best event management company in Nagercoil
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimateOnScroll yOffset={30} delay={0.1}>
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-accent/10 p-3 rounded-full">
                      <Star className="text-accent w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">5-Star Quality</h3>
                      <p className="text-gray-600">
                        Premium vendors and materials ensure flawless execution of every event detail.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll yOffset={30} delay={0.2}>
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-accent/10 p-3 rounded-full">
                      <Calendar className="text-accent w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Stress-Free Planning</h3>
                      <p className="text-gray-600">
                        Single point of contact handles all vendors and logistics from start to finish.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll yOffset={30} delay={0.3}>
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-accent/10 p-3 rounded-full">
                      <Users className="text-accent w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Experienced Team</h3>
                      <p className="text-gray-600">
                        10+ years of expertise in handling all types of events across South Tamil Nadu.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll yOffset={30} delay={0.4}>
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-accent/10 p-3 rounded-full">
                      <Check className="text-accent w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Custom Packages</h3>
                      <p className="text-gray-600">
                        Flexible services tailored to your budget without compromising on quality.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-accent to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimateOnScroll yOffset={30}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Plan Your Perfect Event?
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll yOffset={30} delay={0.1}>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and quote
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll yOffset={30} delay={0.2}>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-accent hover:bg-gray-100">
                <Link href="/contact">
                  Get a Quote
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link href="tel:8778304145">
                  <Phone className="mr-2 w-4 h-4" />
                  Call Now
                </Link>
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}