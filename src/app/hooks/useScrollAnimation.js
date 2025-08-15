'use client'

import { useEffect, useState, useRef } from 'react'
import { useAnimationContext } from '@/context/AnimationContext'

export function useScrollAnimation(threshold = 0.2) {
  const { prefersReducedMotion } = useAnimationContext()
  const [isInView, setIsInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [prefersReducedMotion, threshold])

  return [ref, isInView]
}