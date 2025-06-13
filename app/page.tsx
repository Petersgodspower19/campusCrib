import React from 'react'
import Hero from './_components/homecomponents/Hero'
import PremiumProperties from './_components/homecomponents/PremiumProperties'
import HomeProperties from './_components/homecomponents/HomeProperties'
import Process from './_components/homecomponents/Process'
import Mission from './_components/homecomponents/Mission'
import Testimonial from './_components/homecomponents/Testimonial'

function Home() {
  return (
    <div className='z-0 overflow-x-hidden'>
      <Hero />
      <PremiumProperties />
      <HomeProperties />
      <Process />
      <Mission />
      <Testimonial />
    </div>
  )
}

export default Home