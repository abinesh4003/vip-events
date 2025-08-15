'use client'

import { Button } from '../ui/button'
import { motion } from 'framer-motion'
import { PlayCircle,Pause, Play, VolumeX, Volume2 } from 'lucide-react'
import { useRef, useState } from 'react'
import TextReveal from '../animations/TextReveal'

export default function Hero({ title, subtitle, ctaText, videoSrc }) {
  const videoRef = useRef(null)
  const [isMuted, setIsMuted] = useState(true)
  const [isPlaying, setIsPlaying] = useState(true)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <section className="relative h-screen max-h-[800px] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover"
          poster="/assets/images/hero/hero-poster.webp"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <div className="max-w-4xl mx-auto">
          <TextReveal
            text={title}
            as="h1"
            animationType="slideUp"
            delay={0.2}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          />
          <TextReveal
            text={subtitle}
            as="p"
            animationType="slideUp"
            delay={0.4}
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button size="lg" className="gap-2">
              {ctaText}
              <PlayCircle size={20} />
            </Button>
          </motion.div>
        </div>

        {/* Video Controls */}
        <div className="absolute bottom-8 right-8 flex gap-3">
          <button
            onClick={togglePlay}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
          >
            {isPlaying ? (
              <Pause className="text-white" size={20} />
            ) : (
              <Play className="text-white" size={20} />
            )}
          </button>
          <button
            onClick={toggleMute}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            aria-label={isMuted ? 'Unmute video' : 'Mute video'}
          >
            {isMuted ? (
              <VolumeX className="text-white" size={20} />
            ) : (
              <Volume2 className="text-white" size={20} />
            )}
          </button>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-white rounded-full mt-2"
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}