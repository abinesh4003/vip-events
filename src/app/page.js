import { SERVICES } from './constants/services'
import { TESTIMONIALS } from './constants/testimonials'
import Hero from './components/sections/Hero'
import ServicesGrid from './components/sections/ServicesGrid'
import Testimonials from './components/sections/Testimonials'
import CTA from './components/sections/CTA'
import GalleryPreview from './components/sections/GalleryPreview'
import WhyChooseUs from './components/sections/WhyChooseUs'
import AnimateOnScroll from './components/animations/AnimateOnScroll'

export default function Home() {
  return (
    <>
      <Hero 
        title="Turning Moments Into Memories"
        subtitle="Premium Event Management in Nagercoil"
        ctaText="Book Consultation"
        videoSrc="/assets/videos/hero/event-highlight-reel.mp4"
      />

      <AnimateOnScroll yOffset={50} delay={0.2}>
        <WhyChooseUs />
      </AnimateOnScroll>

      <AnimateOnScroll yOffset={50} delay={0.3}>
        <ServicesGrid services={SERVICES.slice(0, 4)} />
      </AnimateOnScroll>

      <AnimateOnScroll yOffset={50} delay={0.4}>
        <GalleryPreview />
      </AnimateOnScroll>

      <AnimateOnScroll yOffset={50} delay={0.5}>
        <Testimonials testimonials={TESTIMONIALS} />
      </AnimateOnScroll>

      <AnimateOnScroll yOffset={50} delay={0.6}>
        <CTA 
          title="Ready to Plan Your Perfect Event?"
          description="Contact us today for a free consultation and quote"
          primaryButton={{ text: 'Get Started', link: '/contact' }}
          secondaryButton={{ text: 'Call Now', link: 'tel:8778304145' }}
        />
      </AnimateOnScroll>
    </>
  )
}