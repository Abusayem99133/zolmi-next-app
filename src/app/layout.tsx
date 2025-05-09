// src/app/layout.tsx
import '../../src/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import TickerHeader from '../components/TickerHeader'
import Navbar from '../components/Navbar'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Best Salon Software Dubai | Zolmi Salon Management System UAE',
  description: 'Transform your UAE salon with Zolmi\'s all-in-one salon management software. Smart scheduling, client management, and analytics tools trusted by leading Dubai salons.',
  openGraph: {
    title: 'Best Salon Software Dubai | Zolmi Salon Management System UAE',
    description: 'Transform your UAE salon with Zolmi\'s all-in-one salon management software. Smart scheduling, client management, and analytics tools trusted by leading Dubai salons.',
    images: [{
      url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&h=630&q=80',
      width: 1200,
      height: 630,
      alt: 'Zolmi Salon Software'
    }]
  }
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TickerHeader />   
        <Navbar />           
        <main className="pt-20">{children}</main> 
        <Footer/>
      </body>
    </html>
  )
}
