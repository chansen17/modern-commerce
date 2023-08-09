import React from 'react'
import { FaPlay } from 'react-icons/fa'

export default function Video() {
  return (
    <div className='py-12'>
        <h2 className='mb-8 text-4xl font-black text-justify md:text-5xl lg:text-6xl xl:text-7xl'>Want to design? No worries, we got you!</h2>
        {/* video */}
        <div className='relative grid place-items-center h-[400px] rounded-2xl w-full bg-cover bg-center' style={{ backgroundImage: `url('https://images.pexels.com/photos/5699141/pexels-photo-5699141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`}}>
            <button className='grid w-16 h-16 border rounded-full place-items-center bg-gray-900/30 backdrop-blur-sm border-white/50'>
                <FaPlay className='text-2xl text-white' />
            </button>
        </div>
    </div>
  )
}
