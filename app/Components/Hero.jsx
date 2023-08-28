"use client"
import React from 'react'
import {motion, easeInOut} from 'framer-motion'

import { fadeIn } from '@/utils/Variants'

import localFont from 'next/font/local'

import {BsFillStopwatchFill, BsSpeedometer} from 'react-icons/bs'



const myFont = localFont({src:'../../fonts/brigendsexpanded-nrek1.otf'})

export default function Hero() {
  return (
    <div style={{
        backgroundImage:`url('https://cdn.motor1.com/images/mgl/ko6VAN/s3/porsche-911-dakar-versatility.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }} className='w-screen h-screen text-white px-4 md:px-8 lg:px-20 xl:px-28 2xl:px-40 pt-20 md:pt-14 lg:pt-32 xl:pt-40 2xl:pt-56 overflow-hidden relative'>
        <div className='leading-3 lg:leading-8'>
            <p>PORSCHE 911</p>
            <motion.h1 
                variants={fadeIn('down', 0)} 
                initial={'initial'} 
                whileInView={'show'} 
                viewport={{once:false, amount:0.6}} 
                className={`${myFont.className} text-6xl lg:text-[88px]`}
            >DAKAR</motion.h1>            
        </div>
        <div className='absolute left-4 md:left-8 lg:left-20 xl:left-28 2xl:left-40 bottom-36 lg:bottom-32 xl:bottom-36 font-extrabold text-black md:text-lg leading-6 tracking-tight'>
            <div className='flex gap-2 items-center'>
                <BsFillStopwatchFill></BsFillStopwatchFill>
                <p className='underline'>0 - 100:</p>
                <p>3,4s</p>
            </div>
            <div className='flex gap-2 items-center'>
                <BsSpeedometer />
                <p className='underline'>Top speed:</p>
                <p>245 <span className='text-sm'>km/h</span></p>
            </div>
            <div className='flex gap-2 items-center'>
                <BsSpeedometer />
                <p className='underline'>Top speed:</p>
                <p>245 <span className='text-sm'>km/h</span></p>
            </div>
            
        </div>
        <div className="absolute left-1/2 bottom-12 w-1/2 flex justify-between items-center lg:pr-28 flex-col lg:flex-row gap-4 lg:gap-0">
            <button className='border border-white text-white font-semibold px-10 lg:px-8 2xl:px-16 bg-white/10 backdrop-blur-xl py-[6px] rounded-xl hover:bg-white hover:border-white hover:text-black transition-colors duration-1000 -translate-x-1/2'>Oficial Page</button>
            <div className="-translate-x-[25%] lg:-translate-x-0 flex items-center gap-4">
                <div className='w-36 h-[6px] bg-amber-800 rounded-md cursor-pointer'></div>
                <div className='w-36 h-1 bg-white/30 rounded-md cursor-pointer'></div>
            </div>
        </div>
    </div>
  )
}
