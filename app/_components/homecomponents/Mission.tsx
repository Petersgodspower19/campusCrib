"use client"
import React, { useEffect, useRef } from 'react'
import missionPoster from "../../../public/assets/misson-poster.jpg"
import { MdVerified } from "react-icons/md";

function Mission() {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.error('Autoplay prevented!', error);
        });
      }
    }
  }, []);

  const features = [
    "Verified Listings", "Direct Contact", "Virtual Tours"
  ]

  return (
    <div className='bg-[#F9F4EF] w-full px-4 lg:px-14 py-20'>
      {/* Heading Section */}
      <div className='flex items-center gap-2 mt-4 mb-10'>
        <div className='h-1 w-24 bg-[#8B5A2B]' />
        <h1 className='text-[#8B5A2B] uppercase tracking-wider font-semibold text-lg'>
          Our Mission
        </h1>
      </div>

      <div className='flex flex-col md:flex-row gap-10 items-center justify-between'>
        <div className='flex-1'>
          <h2 className='text-4xl font-semibold mb-6 text-gray-900 leading-tight'>
            Transforming Your <span className='text-[#8B5A2B]'>Student Living Experience</span>
          </h2>

          <p className='text-gray-600 mt-2 text-lg mb-4 leading-relaxed'>
            At CampusCrib, we’re reshaping the way students find their home away from home.
            With verified listings, high‑quality photos, and direct communication with landlords, 
            we take the stress out of securing accommodations.
          </p>

          <p className='text-gray-600 mt-2 text-lg leading-relaxed'>
            We blend comfortable living spaces with the ease of campus life, making sure your move 
            is smooth, simple, and tailored to your needs.
          </p>
         <div className='flex mt-3 items-center gap-4 flex-wrap'>
  {features.map((feature, idx) => (
    <div
            key={idx}
            className='flex items-center gap-1 px-3 py-1 rounded-md 
                        bg-[#F9F4EFcc] backdrop-blur-md border border-[#ffffff33] shadow-sm'
            >
            <MdVerified color='#8B5A2B' />
            <p className='text-gray-900'>{feature}</p>
            </div>
        ))} 
        </div>
        </div>

        {/* Video */}
        <section className='flex-1 relative overflow-hidden rounded-lg shadow-md w-full'>
            <video
                ref={videoRef}
                className="w-full h-[300px] object-cover rounded-lg shadow-md transition-transform duration-500 hover:scale-105"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster={missionPoster.src}
            >
                <source src="/assets/misson.mp4" type="video/mp4" />
            </video>
            </section>

      </div>
    </div>
  )
}

export default Mission
