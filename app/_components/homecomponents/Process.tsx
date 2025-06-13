import React from 'react'
import { FaHome, FaComments, FaMoneyBillAlt } from 'react-icons/fa'

function Process() {
  const steps = [
    {
      icon: <FaHome size={40} color="#8B5A2B" />,
      title: "Find Your Ideal Home",
      description: "Browse through our listings and select a home that suits your lifestyle and preferences."
    },
    {
      icon: <FaComments size={40} color="#8B5A2B" />,
      title: "Chat With The Owner",
      description: "Contact the landlord or agent directly to ask questions and clarify details."
    },
    {
      icon: <FaMoneyBillAlt size={40} color="#8B5A2B" />,
      title: "Confirm & Make Payment",
      description: "Once you’re ready, proceed to make a payment directly to the owner or agent."
    }
  ]

  return (
    <div className='bg-[#f5eee6]   w-full py-6'>
      <div className='text-center px-6 lg:px-14 mb-10'>
        <h1 className='text-3xl font-semibold text-[#8B5A2B] mb-2'>
          How CampusCrib Works
        </h1>
        <p className='text-gray-500'>
          Our streamlined process makes finding and securing premium student accommodation effortless.
        </p>
      </div>

      <div className='flex flex-col md:flex-row items-center justify-center gap-8 px-6 lg:px-14'>
        {steps.map((step, idx) => (
          <div key={idx} className='flex flex-col items-center p-6 bg-[#ffffff] shadow-md rounded-md w-full md:w-1/3 transition transform hover:scale-105 duration-500'>
            {step.icon}
            <h2 className='text-lg font-semibold mt-4 mb-2'>{step.title}</h2>
            <p className='text-gray-500'>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Process
