'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

const AnimationContext = createContext()

export function AnimationProvider({ children }) {
  const pathname = usePathname()
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [isFirstVisit, setIsFirstVisit] = useState(true)
  const [previousPath, setPreviousPath] = useState(null)
  const [transitionDirection, setTransitionDirection] = useState('forward')

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener('change', handleChange)

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // Track first visit
  useEffect(() => {
    const visited = sessionStorage.getItem('hasVisited')
    if (!visited) {
      sessionStorage.setItem('hasVisited', 'true')
    } else {
      setIsFirstVisit(false)
    }
  }, [])

  // Track route changes for directional animations
  useEffect(() => {
    if (previousPath) {
      const previousIndex = NAV_LINKS.findIndex(link => link.path === previousPath)
      const currentIndex = NAV_LINKS.findIndex(link => link.path === pathname)
      
      if (currentIndex > previousIndex) {
        setTransitionDirection('forward')
      } else {
        setTransitionDirection('backward')
      }
    }
    setPreviousPath(pathname)
  }, [pathname])

  // Disable animations if prefers reduced motion
  const shouldAnimate = !prefersReducedMotion

  return (
    <AnimationContext.Provider value={{
      prefersReducedMotion,
      isFirstVisit,
      shouldAnimate,
      transitionDirection,
      getAnimationProps: (customProps = {}) => ({
        initial: shouldAnimate ? customProps.initial || 'hidden' : false,
        animate: shouldAnimate ? customProps.animate || 'visible' : false,
        exit: shouldAnimate ? customProps.exit || 'hidden' : false,
        transition: shouldAnimate ? customProps.transition || { duration: 0.6 } : { duration: 0 },
        ...customProps
      })
    }}>
      {children}
    </AnimationContext.Provider>
  )
}

export function useAnimationContext() {
  const context = useContext(AnimationContext)
  if (!context) {
    throw new Error('useAnimationContext must be used within an AnimationProvider')
  }
  return context
}

// Helper for navigation links (should be imported from constants)
const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/contact', label: 'Contact' }
]