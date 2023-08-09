'use client';
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaGlobe, FaRecycle } from 'react-icons/fa'

export default function Banner() {
  return (
    <div className='grid grid-cols-1 gap-3 py-12 text-gray-900 md:grid-cols-3'>
        <motion.div initial={{ x: -30 }} whileInView={{ x: 0 }} transition={{ duration: .5 }} className="flex flex-col justify-between py-12 space-y-6 bg-gradient-to-b from-orange-600 to-amber-600 md:col-span-2 px-7 rounded-2xl">
            <h2 className="text-4xl font-black md:text-5xl lg:text-6xl xl:text-7xl">We're chaging the way things get made</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className='space-y-2'>
                    <div className='flex items-center gap-3'>
                        <FaGlobe />
                        <span className='text-lg font-semibold md:text-xl'>Our Mission</span>
                    </div>
                    <p className='text-sm md:text-md'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem.</p>
                </div>
                <div className='space-y-2'>
                    <div className='flex items-center gap-3'>
                        <FaRecycle />
                        <span className='text-lg font-semibold md:text-xl'>Sustainability</span>
                    </div>
                    <p className='text-sm md:text-md'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem.</p>
                </div>
            </div>
        </motion.div>
        <motion.div initial={{ x: 30 }} whileInView={{ x: 0 }} transition={{ duration: .5 }} className='overflow-hidden md:col-span-1 rounded-2xl'>
            <Image className='object-cover w-full h-80 md:h-full' src="https://images.pexels.com/photos/5325885/pexels-photo-5325885.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" height={900} width={500} alt="banner image" />
        </motion.div>
    </div>
  )
}
