'use client'
import Link from 'next/link'
import React, { useState } from 'react'

function Faq() {
  const faqs = [
    {
      question: "How does CampusCrib help me find accommodation?",
      answer: "CampusCrib connects you directly with landlords and property owners near your school. We provide verified listings and a convenient way to search and filter accommodations based on your preferences."
    },
    {
      question: "Are all accommodations verified?",
      answer: "Yes. We manually verify all accommodations on CampusCrib to make sure they match their listings and are suitable for student living."
    },
    {
      question: "Can I contact the landlord directly?",
      answer: "Of course! Once you find a place you like, you can contact the landlord directly through CampusCrib to ask questions or arrange a viewing."
    },
    {
      question: "How much does it cost to use CampusCrib?",
      answer: "Using CampusCrib is completely free for students. There are no hidden charges or fees for accessing listings and contacting landlords."
    },
    {
      question: "What if I need help or support?",
      answer: "We provide 24/7 support to help you resolve any issues. You can reach us through our contact page or email us directly for assistance."
    }
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
            Frequently Asked Questions
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
