import Link from 'next/link'
import React from 'react'

function Hero() {
  return (
    <div className='bg-white w-full mt-16 mb-7 py-8'>
       <h2 className='text-[14px] uppercase mb-7
        text-[#8B5A2B] text-center font-bold'>Post Appartments</h2>
    <div className='text-center'>
        <h2 className='text-4xl font-semibold mb-6 text-gray-900 leading-tight'>
            List Your  <span className='text-[#8B5A2B]'>Premium Hostel</span>
        </h2>
        <div  
          className='h-1 bg-[#8B5A2B] w-32 mt-[-5px] md:w-40 mx-auto mb-3 animate-grow' />
       
        <p className='text-gray-600 mt-2 w-[100%] px-6 text-lg leading-relaxed'>
            Boost visibility for your premium student accommodations by listing them on our platform — and connect directly 
            with thousands of verified students looking for a place to stay.
        </p>
    </div>  
    </div>
  )
}

export default Hero
