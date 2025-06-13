"use client"
import React  from "react";

function PremiumProperties() {
  return (
    <div className='text-center px-4 lg:px-14 py-6'>
      <h2  
          className='text-gray-800 mb-3 text-[16px] font-semibold tracking-wide uppercase'>
        Our Properties
      </h2>

      <h1  
          className='text-2xl md:text-5xl text-gray-900 font-semibold mt-2 mb-4'>
        Student Housing Designed Just For You
      </h1>

      <div  
          className='h-1 bg-[#8B5A2B] w-32 md:w-40 mx-auto mb-3 animate-grow' />

      <p  
         className='text-gray-500 mt-3 py-3 max-w-xl mx-auto'>
        At <span className='text-[#8B5A2B] font-bold'>CampusCrib</span>, we provide comfortable, convenient, and affordable living spaces tailored for students. Find a place that feels like home while you pursue your education.
      </p>
    </div>
  )
}

export default PremiumProperties;
