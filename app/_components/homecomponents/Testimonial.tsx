import React from 'react'
import Testimonials from './Testimonials'

function Testimonial() {
  return (
    <section className='py-16 px-4 lg:px-24'>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-12">
        <div className="space-y-4">
          <h1 className="text-3xl lg:text-4xl font-semibold text-black">
            Students <span className="text-[#8B5A2B]">Testimonials</span>
          </h1>
          <h2 className="text-4xl lg:text-5xl font-bold text-black">
            Hear What Our <span className="text-[#8B5A2B]">Students</span> Have to Say
          </h2>
          <p className="text-gray-800 opacity-80">
            Welcome to our testimonials section, where you can discover what our
            satisfied students have to say about our housing platform.
          </p>
        </div>

        <Testimonials />
      </div>
    </section>
  )
}

export default Testimonial
