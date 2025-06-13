import React from 'react'
import Hero from './_components/Hero'
import Mission from '../_components/homecomponents/Mission'
import Stats from './_components/Stats'
import Faq from './_components/Faq'
import Testimonial from '../_components/homecomponents/Testimonial'

function About() {
  return (
    <div className='overflow-0'>
      <Hero />
      <Mission />
      <Stats />
      <Faq />
      <Testimonial />
    </div>
  )
}

export default About
