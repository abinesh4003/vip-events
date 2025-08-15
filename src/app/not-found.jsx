// app/not-found.jsx
'use client' // Essential for using client-side features

import Link from 'next/link'
import { Button } from '../components/ui/button'
import { useEffect } from 'react'

export default function NotFound() {
  // Optional: Log 404 errors to analytics
  useEffect(() => {
    console.log('404 page visited')
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-160px)] text-center p-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild>
          <Link href="/" className="text-lg">
            Return to Homepage
          </Link>
        </Button>
      </div>
    </div>
  )
}