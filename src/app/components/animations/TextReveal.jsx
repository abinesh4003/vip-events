'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function TextReveal({
  text,
  delay = 0,
  duration = 0.5,
  stagger = 0.02,
  className = '',
  once = true,
  as = 'p',
  animationType = 'slideUp',
}) {
  const [hasAnimated, setHasAnimated] = useState(false)
  const words = text.split(' ')

  const animations = {
    slideUp: {
      hidden: { y: 20, opacity: 0 },
      visible: { y: 0, opacity: 1 },
    },
    slideDown: {
      hidden: { y: -20, opacity: 0 },
      visible: { y: 0, opacity: 1 },
    },
    slideLeft: {
      hidden: { x: 20, opacity: 0 },
      visible: { x: 0, opacity: 1 },
    },
    slideRight: {
      hidden: { x: -20, opacity: 0 },
      visible: { x: 0, opacity: 1 },
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
  }

  const animationVariant = animations[animationType] || animations.slideUp

  const MotionComponent = motion[as]

  return (
    <MotionComponent
      initial="hidden"
      animate={once && hasAnimated ? 'visible' : 'hidden'}
      onViewportEnter={() => !hasAnimated && setHasAnimated(true)}
      className={`${className} overflow-hidden`}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          style={{ display: 'inline-block' }}
          variants={animationVariant}
          transition={{
            duration,
            delay: delay + i * stagger,
            ease: [0.16, 0.77, 0.47, 0.97],
          }}
        >
          {word + (i !== words.length - 1 ? ' ' : '')}
        </motion.span>
      ))}
    </MotionComponent>
  )
}