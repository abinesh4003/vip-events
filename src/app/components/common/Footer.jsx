'use client'

import Link from 'next/link'
import Image from 'next/image'
import { NAV_LINKS } from '../../constants/navLinks'
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Youtube } from 'lucide-react'
import { Button } from '../ui/button'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/assets/images/logos/logo-light.webp"
                alt="VIP Function Planners"
                width={160}
                height={80}
              />
            </Link>
            <p className="text-gray-300 mb-4">
              Turning moments into memories with premium event planning services in Nagercoil.
            </p>
            <div className="flex gap-4">
              <Link href="#" aria-label="Instagram">
                <Instagram className="text-gray-400 hover:text-white transition-colors" />
              </Link>
              <Link href="#" aria-label="Facebook">
                <Facebook className="text-gray-400 hover:text-white transition-colors" />
              </Link>
              <Link href="#" aria-label="YouTube">
                <Youtube className="text-gray-400 hover:text-white transition-colors" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.path}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/stage-decoration" className="text-gray-300 hover:text-white transition-colors">
                  Stage Decoration
                </Link>
              </li>
              <li>
                <Link href="/services/catering" className="text-gray-300 hover:text-white transition-colors">
                  Catering Services
                </Link>
              </li>
              <li>
                <Link href="/services/entertainment" className="text-gray-300 hover:text-white transition-colors">
                  Entertainment
                </Link>
              </li>
              <li>
                <Link href="/services/photography" className="text-gray-300 hover:text-white transition-colors">
                  Photography
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="mt-1 flex-shrink-0 text-accent" size={18} />
                <div>
                  <p className="text-gray-300">8778304145</p>
                  <p className="text-sm text-gray-400">Mon-Sun, 8AM-10PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-1 flex-shrink-0 text-accent" size={18} />
                <div>
                  <p className="text-gray-300">contact@vipfunctionplanners.com</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 flex-shrink-0 text-accent" size={18} />
                <div>
                  <p className="text-gray-300">
                    13/71 South Street keezha Asaripallam, Nagercoil, Tamil Nadu 629201
                  </p>
                </div>
              </li>
            </ul>
            <Button asChild variant="accent" className="mt-4 w-full">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>
            &copy; {currentYear} VIP Function Planners. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}