import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className='w-full'>
        <div className="flex items-center justify-between px-5 py-6 shadow-lg text-neutral-900 bg-neutral-200 rounded-2xl">
            <Link href="/" className='text-xl font-black'>Modern Commerce</Link>
            <div className="flex items-center gap-3">
                <Link href="/">All Products</Link>
                <Link href="/">Blog</Link>
                <Link href="/cart">Cart</Link>
            </div>
        </div>
    </nav>
  )
}
