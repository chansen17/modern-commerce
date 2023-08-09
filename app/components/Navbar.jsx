import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className='w-full'>
        <div className="flex items-center justify-between px-5 py-4 text-gray-100 shadow-lg bg-neutral-900 rounded-2xl">
            <Link href="/">Modern Commerce</Link>
            <div className="flex items-center gap-3">
                <Link href="/">All Products</Link>
                <Link href="/">Blog</Link>
                <Link href="/cart">Cart</Link>
            </div>
        </div>
    </nav>
  )
}
