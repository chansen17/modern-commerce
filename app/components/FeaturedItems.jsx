'use client';
import React, { useState } from 'react'
import { filters, products } from '../data'
import Product from './Product';
import { AnimatePresence, motion } from 'framer-motion';

export default function FeaturedItems() {

    const [option, setOption] = useState(null);

    const filtered_items = option ? products.filter(item => item[option] === true) : products;

    console.log('option', option)

  return (
    <section className='py-12'>
        <h2 className='text-xl font-bold uppercase md:text-2xl lg:text-3xl xl:text-4xl'>Must get Esstenials</h2>
        <div className='flex flex-wrap items-center gap-2 py-4'>
            {filters.map((item, i) => (
                <motion.button initial={{ opacity: .5, x: -15 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: .5, delay: i * 0.05 }} onClick={() => setOption(item.type)} key={i} type="button" className={`capitalize px-3 py-1 rounded-full font-bold border border-black/30 focus:border-black hover:bg-black hover:text-gray-50 duration-200 transition-all focus:bg-black focus:text-gray-50`}>{item.name}</motion.button>
            ))}
        </div>
        <motion.div layout className="grid grid-cols-2 gap-3 py-4 md:grid-cols-3">
            <AnimatePresence>
                {filtered_items && filtered_items.map((product, i) => (
                    <Product key={i} product={product} option={option} delay={i} />
                ))}
            </AnimatePresence>
        </motion.div>
    </section>
  )
}
