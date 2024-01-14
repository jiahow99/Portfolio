import type { Metadata } from 'next'
import './globals.css'
import { poppins } from '@/fonts/fonts'
import 'aos/dist/aos.css'; 
import Cursor from '@/components/Cursor';
import Navbar from '@/components/Home/Navbar';
import Footer from '@/components/Home/Footer';
import NextNProgress from 'nextjs-progressbar';
import ScrollToTop from '@/components/ScrollToTop';
import HamburgerMenu from '@/components/Home/HamburgerMenu';

export const metadata: Metadata = {
  title: 'Kah How - Software Developer',
  description: 'Explore my portfolio showcasing software development skills and projects.',
}

export default function RootLayout({children}:any) {  
  return (
    <html lang="en">            
      <body className={poppins.className}>
        
        <Cursor />
        
        <Navbar />
        <HamburgerMenu />
        
        {children}

        <Footer />

        <ScrollToTop />

      </body>
    </html>
  )
}
