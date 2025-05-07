// src/app/layout.tsx
import '../../src/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import TickerHeader from '../components/TickerHeader'
import Navbar from '../components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Your App Name',
  description: 'Your app description',
}

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
      </body>
    </html>
  )
}
