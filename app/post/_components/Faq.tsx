'use client'
import Link from 'next/link'
import React, { useState } from 'react'

function Faq() {
  const faqs = [
    {
      question: "How is the 10% service fee calculated?",
      answer: "The fee is 10% of the total annual price you set for your hostel. For example, at ₦500,000 per year, the service fee would be ₦50,000 payable upon successful booking."
    },
    {
      question: "What's included in the verification process?",
      answer: "We verify property ownership, ID authenticity, and conduct background checks to ensure a safe platform for students and property owners alike."
    },
    
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <section id="faq" className='bg-white w-full px-3 lg:px-14 py-20'>
      <div className='flex flex-col lg:flex-row gap-10'>
        <div className='flex-1 space-y-6'>
          <div className='flex items-center gap-2 mb-4'>
            <div className='h-1 w-24 bg-[#8B5A2B]' />
            <h1 className='text-[#8B5A2B] uppercase tracking-wider font-semibold text-lg'>
              FAQ
            </h1>
          </div>
          <h2 className='text-3xl font-semibold mb-4'>
            Frequently Asked Questions About Lisitings
          </h2>
          <p className='text-gray-500 mb-6'>
            Have more questions? Reach out to us.
          </p>
          <div className='flex gap-4'>
            <Link
              href='/contact'
              className='px-4 py-2 bg-[#8B5A2B] text-gray-100 font-semibold rounded-md shadow-md'
            >
              Contact Details
            </Link>
          </div>
        </div>
        <div className='flex-1 flex flex-col gap-6'>
          {faqs.map((item, i) => (
            <div key={i} className='p-6 bg-[#F9F4EF] rounded-lg shadow-md transition-transform duration-500 hover:shadow-lg'>
              <div 
                onClick={() => handleToggle(i)} 
                className='flex justify-between items-center cursor-pointer'
              >
                <h2 className='text-xl font-semibold'>{item.question}</h2>
                <span className='text-xl font-semibold'>{openIndex === i ? '−' : '+'}</span>
              </div>
              {openIndex === i && (
                <p className='text-gray-600 mt-4'>{item.answer}</p>
              )}

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faq
