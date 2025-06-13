import Link from 'next/link'
import React from 'react'

function Hero() {
  return (
    <div className='bg-white w-full mt-16 mb-7 py-8'>
       <h2 className='text-[14px] uppercase mb-7
        text-[#8B5A2B] text-center font-bold'>About CampusCrib</h2>
    <div className='text-center'>
        <h2 className='text-4xl font-semibold mb-6 text-gray-900 leading-tight'>
            Transforming Your <span className='text-[#8B5A2B]'>Student Living Experience</span>
        </h2>
        <div  
          className='h-1 bg-[#8B5A2B] w-32 mt-[-5px] md:w-40 mx-auto mb-3 animate-grow' />
       
        <p className='text-gray-600 mt-2 w-[100%] px-6 text-lg leading-relaxed'>
            We blend comfortable living spaces with the ease of campus life, making sure your move 
            is smooth, simple, and tailored to your needs.
        </p>
    </div>  
   <Link href="/explore" className='flex items-center mt-9 justify-center'>
    <button className='bg-[#8B5A2B] text-white w-fit rounded-[20px]
    border-0 outline-0 m-auto p-[10px] text-center cursor-pointer'>Explore Hostels</button>
   </Link>
    </div>
  )
}

export default Hero
