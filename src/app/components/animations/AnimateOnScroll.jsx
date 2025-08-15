'use client'

import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function AnimateOnScroll({
  children,
  delay = 0,
  duration = 0.5,
  yOffset = 24,
  xOffset = 0,
  scale = 1,
  rotate = 0,
  once = true,
  className = '',
}) {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: once,
  })

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        rotate: 0,
        transition: { duration, delay },
      })
    }
    if (!inView) {
      controls.start({
        opacity: 0,
        y: yOffset,
        x: xOffset,
        scale: scale,
        rotate: rotate,
      })
    }
  }, [controls, inView, delay, duration, yOffset, xOffset, scale, rotate])

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: yOffset,
        x: xOffset,
        scale: scale,
        rotate: rotate,
      }}
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  )
}