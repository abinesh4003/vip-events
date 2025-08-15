'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NAV_LINKS, MOBILE_NAV_LINKS } from '../../constants/navLinks'
import { Button } from '../ui/button'
import { Phone, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/images/logos/logo.webp"
            alt="VIP Function Planners"
            width={70}
            height={60}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <div key={link.id} className="relative group">
              <Link
                href={link.path}
                className={`px-2 py-1 text-sm font-medium transition-colors ${
                  pathname === link.path
                    ? 'text-accent'
                    : 'text-gray-700 hover:text-accent'
                }`}
              >
                {link.label}
              </Link>
              {link.subLinks && (
                <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md py-2 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity">
                  {link.subLinks.map((subLink) => (
                    <Link
                      key={subLink.path}
                      href={subLink.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-accent"
                    >
                      {subLink.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>

        {/* Contact Button (Desktop) */}
        <Button asChild className="hidden md:flex gap-2" variant="accent">
          <Link href="tel:8778304145">
            <Phone size={16} />
            Call Now
          </Link>
        </Button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="container mx-auto px-4 py-3">
              <nav className="flex flex-col gap-2">
                {MOBILE_NAV_LINKS.map((link) => (
                  <Link
                    key={link.id}
                    href={link.path}
                    className={`px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                      pathname === link.path
                        ? 'bg-accent/10 text-accent'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="flex items-center gap-3">
                      {link.icon && <Phone size={18} />}
                      {link.label}
                    </div>
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}