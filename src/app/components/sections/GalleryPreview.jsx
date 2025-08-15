'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Instagram } from 'lucide-react'
import { Button } from '../ui/button'
import LightGallery from 'lightgallery/react'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'
import AnimateOnScroll from '../animations/AnimateOnScroll'

// Import lightgallery CSS
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'

const galleryItems = [
  {
    id: 1,
    image: '/assets/images/gallery/weddings/wedding-1.webp',
    category: 'Weddings',
    title: 'Grand Wedding Stage',
    cols: 'md:col-span-2',
    rows: 'md:row-span-2'
  },
  {
    id: 2,
    image: '/assets/images/gallery/weddings/wedding-2.webp',
    category: 'Weddings',
    title: 'Floral Mandap Decor'
  },
  {
    id: 3,
    image: '/assets/images/gallery/birthdays/birthday-1.webp',
    category: 'Birthdays',
    title: 'Princess Birthday Theme'
  },
  {
    id: 4,
    image: '/assets/images/gallery/corporate/corporate-1.webp',
    category: 'Corporate',
    title: 'Annual Day Event'
  },
  {
    id: 5,
    image: '/assets/images/gallery/weddings/wedding-3.webp',
    category: 'Weddings',
    title: 'Elegant Reception'
  },
  {
    id: 6,
    image: '/assets/images/gallery/birthdays/birthday-2.webp',
    category: 'Birthdays',
    title: 'Superhero Birthday Party',
    cols: 'md:col-span-2'
  }
]

export default function GalleryPreview() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <AnimateOnScroll yOffset={30}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Event Gallery
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our portfolio of beautifully executed events in Nagercoil
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll yOffset={50} delay={0.2}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative group overflow-hidden rounded-xl shadow-md ${item.cols || ''} ${item.rows || ''}`}
                whileHover={{ scale: 1.02 }}
              >
                <LightGallery
                  speed={500}
                  plugins={[lgThumbnail, lgZoom]}
                  elementClassNames="w-full h-full cursor-pointer"
                >
                  <a
                    href={item.image}
                    className="lg:zoomable"
                    data-sub-html={`<h4>${item.title}</h4><p>${item.category} Event</p>`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <span className="text-sm font-medium text-accent mb-1">
                        {item.category}
                      </span>
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    </div>
                  </a>
                </LightGallery>
              </motion.div>
            ))}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll yOffset={30} delay={0.4}>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Button asChild size="lg" className="gap-2">
              <Link href="/gallery">
                View Full Gallery <ArrowRight size={18} />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="gap-2">
              <Link 
                href="https://instagram.com/yourprofile" 
                target="_blank"
                rel="noopener noreferrer"
              >
                Follow on Instagram <Instagram size={18} />
              </Link>
            </Button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}