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
      }} className='w-screen h-[96vh] lg:h-screen text-white px-4 md:px-8 lg:px-20 xl:px-28 2xl:px-40 pt-12 md:pt-14 lg:pt-32 xl:pt-40 2xl:pt-56 overflow-hidden relative m-0'>
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
       <div className='absolute bottom-8 flex flex-col lg:flex-row items-center w-1/2 left-1/2 -translate-x-1/2 lg:-translate-x-0 pl-0 lg:pr-28 lg:justify-between'>
            <button className='py-2 border border-white lg:-translate-x-1/2 px-12 rounded-xl bg-white/5 backdrop-blur-xl'>Official page</button>
            <div className='flex gap-4 items-center'>
                <div className='w-32 lg:w-36 h-[6px] bg-amber-800 cursor-pointer'>

                </div>
                <div className='w-32 lg:w-36 h-1 bg-slate-400 cursor-pointer'>

                </div>
            </div>
       </div>
        
    </div>
  )
}
