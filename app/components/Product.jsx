'use client';
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion';

export default function Product({ product, option, delay }) {
    console.log('option: ', option);
    return (
        <motion.div initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0}} transition={{ duration: .5, delay: delay * 0.05 }} className='relative w-full overflow-hidden h-80 sm:h-96 xl:h-[500px] group rounded-2xl'>
            {product?.sale === true && (
                <div className="absolute px-3 py-2 text-sm font-bold text-red-500 bg-gray-100 rounded-full top-3 left-3">Flash Sale 🔥</div>
            )}
            {product?.new_arrival === true && (
                <div className="absolute px-3 py-2 text-sm font-bold bg-gray-100 rounded-full top-3 right-3">New Arrival</div>
            )}
            {product?.best_seller === true && (
                <div className="absolute px-3 py-2 text-sm opacity-75 bottom-3 right-3">🔥</div>
            )}
            {product && option == 'seasonal' && (
                <div className="absolute px-3 py-2 text-sm font-bold bg-gray-100 rounded-full left-3 bottom-3">{product.collection}</div>
            )}
            <Image src={product?.image} height={900} width={900} className='object-cover w-full h-full' alt="product image" />
            <div className='absolute top-0 left-0 grid w-full h-full transition-all duration-300 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-black/80 place-items-center'>
                <div className=''>
                    <button className='px-3 py-2 text-xs font-bold uppercase rounded-full sm:text-sm bg-gray-50'>Add to Cart</button>
                </div>
            </div>
        </motion.div>
    )
}
