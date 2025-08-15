import './styles/globals.css'
import { Inter, Playfair_Display } from 'next/font/google'
import ClientLayout from './ClientLayout'
import Preloader from './components/common/Preloader'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})


export const metadata = {
  title: 'VIP Function Planners | Best Event Management in Nagercoil',
  description: 'Premium event planning services in Nagercoil - Weddings, Birthdays, Corporate Events with stage decoration, catering, photography & entertainment',
  keywords: 'event management, wedding planners, nagercoil catering, stage decoration, photography',
  openGraph: {
    images: '/assets/images/og-image.jpg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/assets/images/logos/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#4f46e5" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-white text-gray-900`}>
        <ClientLayout>
          {children}
          </ClientLayout>
      </body>
    </html>
  )
}
