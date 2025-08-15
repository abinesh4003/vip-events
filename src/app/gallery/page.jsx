'use client'

import { useState } from 'react'
import Image from 'next/image'
import LightGallery from 'lightgallery/react'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'
import lgVideo from 'lightgallery/plugins/video'
import { Button } from '../components/ui/button'
import { ArrowRight, Instagram } from 'lucide-react'
import AnimateOnScroll from '../components/animations/AnimateOnScroll'
import TextReveal from '../components/animations/TextReveal'
import Link from 'next/link'
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'
import 'lightgallery/css/lg-video.css'

const galleryItems = [
  {
    id: 1,
    image: '/assets/images/gallery/wedding-1.webp',
    category: 'Weddings',
    title: 'Traditional Tamil Wedding',
    type: 'image'
  },
  {
    id: 2,
    image: '/assets/images/gallery/wedding-2.webp',
    category: 'Weddings',
    title: 'Floral Mandap Decor',
    type: 'image'
  },
  {
    id: 3,
    image: '/assets/images/gallery/birthday-1.webp',
    category: 'Birthdays',
    title: 'Princess Theme Birthday',
    type: 'image'
  },
  {
    id: 4,
    image: '/assets/images/gallery/corporate-1.webp',
    category: 'Corporate',
    title: 'Annual Day Event',
    type: 'image'
  },
  {
    id: 5,
    thumbnail: '/assets/images/gallery/video-thumbnail.webp',
    video: '/assets/videos/event-highlight.mp4',
    category: 'Highlights',
    title: 'Wedding Highlights',
    type: 'video'
  },
  {
    id: 6,
    image: '/assets/images/gallery/wedding-3.webp',
    category: 'Weddings',
    title: 'Reception Decor',
    type: 'image'
  },
  {
    id: 7,
    image: '/assets/images/gallery/birthday-2.webp',
    category: 'Birthdays',
    title: 'Superhero Birthday',
    type: 'image'
  },
  {
    id: 8,
    image: '/assets/images/gallery/corporate-2.webp',
    category: 'Corporate',
    title: 'Product Launch',
    type: 'image'
  }
]

const categories = ['All', 'Weddings', 'Birthdays', 'Corporate', 'Highlights']

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredItems =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory)

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center bg-gray-900">
        <Image
          src="/assets/images/gallery/hero.webp"
          alt="Our Gallery"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <AnimateOnScroll yOffset={30}>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <TextReveal text="Our Portfolio" animationType="slideUp" />
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll yOffset={30} delay={0.2}>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our collection of beautifully executed events
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <AnimateOnScroll yOffset={30}>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? 'default' : 'outline'}
                  onClick={() => setActiveCategory(category)}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </AnimateOnScroll>

          {/* Gallery Grid */}
          <LightGallery
            speed={500}
            plugins={[lgThumbnail, lgZoom, lgVideo]}
            selector=".gallery-item"
            elementClassNames="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredItems.map((item, index) => (
              <AnimateOnScroll
                key={item.id}
                yOffset={50}
                delay={0.1 * Math.floor(index / 3)}
                className="relative group overflow-hidden rounded-xl shadow-lg"
              >
                {item.type === 'video' ? (
                  <a
                    href={item.video}
                    data-src={item.video}
                    data-video={JSON.stringify({
                      source: [{ src: item.video, type: 'video/mp4' }],
                      attributes: { preload: false, controls: true }
                    })}
                    className="gallery-item"
                    data-sub-html={`<h4>${item.title}</h4><p>${item.category} Event</p>`}
                  >
                    <div className="aspect-[4/3] relative">
                      <Image
                        src={item.thumbnail || item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center">
                          <svg
                            className="w-8 h-8 text-accent"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M6.3 2.8L17 10 6.3 17.2V2.8z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </a>
                ) : (
                  <a
                    href={item.image}
                    data-src={item.image}
                    className="gallery-item"
                    data-sub-html={`<h4>${item.title}</h4><p>${item.category} Event</p>`}
                  >
                    <div className="aspect-[4/3] relative">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                        <span className="text-sm font-medium text-accent mb-1">
                          {item.category}
                        </span>
                        <h3 className="text-lg font-bold text-white">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </a>
                )}
              </AnimateOnScroll>
            ))}
          </LightGallery>

          {/* CTA */}
          <AnimateOnScroll
            yOffset={30}
            delay={0.3}
            className="mt-16 text-center"
          >
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <Button asChild size="lg" className="gap-2">
                <Link href="/contact">
                  Book Your Event <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="gap-2"
              >
                <Link
                  href="https://instagram.com/vipfunctionplanners"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Follow on Instagram <Instagram className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
