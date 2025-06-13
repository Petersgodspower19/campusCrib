"use client"
import React from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true });

  const stats = [
    { number: 50, suffix: '+', label: 'Apartments' },
    { number: 50, suffix: '+', label: 'Students Accommodated' },
    { number: 100, suffix: '%', label: 'Satisfaction Rate' },
    { number: 24, suffix: 'x7', label: 'Support Availability' },
  ]

  return (
    <div ref={ref} className='flex flex-col bg-white
     md:flex-row flex-wrap items-center justify-between gap-3 py-16 px-6 lg:px-24'>
      {stats.map((item, idx) => (
        <div key={idx} className='flex flex-col items-center p-4'>
          <span className='text-4xl font-semibold text-[#8B5A2B]'>
            {inView ? <CountUp start={0} end={item.number} duration={2} suffix={item.suffix} /> : 0}
          </span>
          <p className='text-gray-600 mt-2'>{item.label}</p>
        </div>
      ))}
    </div>
  )
}

export default Stats
