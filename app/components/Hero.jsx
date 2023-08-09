'use client';
import { motion } from 'framer-motion';
import { FaChevronCircleDown, FaPhone } from 'react-icons/fa';

export default function Hero() {
  return (
    <div className='grid h-full grid-cols-1 gap-3 py-12 md:grid-cols-2'>
        <motion.div initial={{ x: -30 }} whileInView={{ duration: .5, x: 0 }} className='shadow-xl relative z-10 flex flex-col justify-end w-full overflow-hidden bg-center bg-cover p-7 rounded-2xl h-96 lg:h-[500px] xl:h-[600px] md:h-full' style={{ backgroundImage: `url('https://images.pexels.com/photos/2962377/pexels-photo-2962377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`}}>
            <div className='absolute top-0 left-0 w-full h-full bg-black/20 -z-10' />
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <button className="flex items-center justify-between gap-3 px-3 py-2 text-sm transition-colors duration-200 rounded-full bg-gray-50 lg:text-lg hover:bg-gray-950 hover:text-gray-50">
                    <span className='uppercase bg-bold'>learn more</span>
                    <span><FaChevronCircleDown className=''/></span>
                </button>
                <button className="flex items-center justify-between gap-3 px-3 py-2 text-sm text-white transition-colors duration-200 border rounded-full bg-none lg:text-lg hover:bg-gray-950 hover:text-gray-50">
                    <span className='uppercase bg-bold'>Contact Us</span>
                    <span><FaPhone className=''/></span>
                </button>
            </div>
        </motion.div>
        <motion.div initial={{ x: 30 }} whileInView={{ x: 0 }} transition={{ duration: .5 }} className='grid w-full grid-rows-3 gap-2'>
            <div className='flex flex-col justify-between h-full row-span-2 p-8 overflow-hidden shadow-xl bg-neutral-200 rounded-2xl'>
                <h1 className='text-3xl font-black capitalize xl:text-5xl md:text-3xl lg:text-4xl'>Real Designs by real artists for real people.</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
                <motion.div initial={{ y: 15 }} whileInView={{ y: 0 }} transition={{ duration: .5 }} className="relative flex flex-col justify-end px-4 overflow-hidden bg-blue-300 bg-center bg-cover shadow-xl group py-7 h-28 md:h-full rounded-2xl" style={{ backgroundImage: `url('https://images.pexels.com/photos/35185/hats-fedora-hat-manufacture-stack.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`}}>
                    {/* gradient */}
                    <div className='absolute top-0 left-0 w-full h-full bg-black/40' />
                    <p className='z-10 text-lg font-bold text-gray-100 uppercase transition-transform duration-200 md:text-xl group-hover:-translate-y-2'>#trending</p>
                </motion.div>
                <motion.div initial={{ y: 15 }} whileInView={{ y: 0 }} transition={{ duration: 1 }} className="relative flex flex-col justify-end px-4 overflow-hidden bg-red-300 bg-center bg-cover shadow-xl group py-7 h-28 md:h-full rounded-2xl" style={{ backgroundImage: `url('https://images.pexels.com/photos/744365/pexels-photo-744365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`}}>
                <div className='absolute top-0 left-0 w-full h-full bg-black/40' />
                    <p className='z-10 text-lg font-bold text-gray-100 uppercase transition-transform duration-200 md:text-xl group-hover:-translate-y-2'>#classics</p>
                </motion.div>
            </div>
        </motion.div>
    </div>
  )
}
