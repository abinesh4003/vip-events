'use client'

import { useAnimationContext } from '../../context/AnimationContext'
import { motion, AnimatePresence } from 'framer-motion'
import { Player } from '@lottiefiles/react-lottie-player'
import { useState, useEffect } from 'react'

export default function Preloader() {
  const { isFirstVisit } = useAnimationContext()
  const [isVisible, setIsVisible] = useState(isFirstVisit)

  useEffect(() => {
    if (!isFirstVisit) {
      setIsVisible(false)
      return
    }
    const timer = setTimeout(() => setIsVisible(false), 3000)
    return () => clearTimeout(timer)
  }, [isFirstVisit])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center"
        >
          <div className="w-48 h-48">
            <Player autoplay loop src="/assets/lottie/loading-animation.json" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-4 text-lg font-medium text-gray-700"
          >
            VIP Function Planners
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.8 }}
            className="mt-2 text-sm text-gray-500"
          >
            Creating unforgettable moments...
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
