'use client';
import './globals.css'
import { Raleway } from 'next/font/google'
import { CartProvider, useCart } from "react-use-cart";
import Navbar from './components/Navbar';

const raleway = Raleway({ subsets: ['latin'], weight: ['100', '300', '500', '800', '900'] })



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
          <CartProvider>
            <div className="max-w-6xl px-5 py-12 mx-auto">
              <Navbar />
              {children}
            </div>
          </CartProvider>
      </body>
    </html>
  )
}
