'use client'

import { AnimationProvider } from '../app/context/AnimationContext'
import { Toaster } from './components/ui/Toaster'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Preloader from './components/common/Preloader'

export default function ClientLayout({ children }) {
  return (
    <AnimationProvider>
      <Preloader />
      <Header />
      <main className="min-h-[calc(100vh-320px)]">
        {children}
      </main>
      <Footer />
      <Toaster />
    </AnimationProvider>
  )
}
