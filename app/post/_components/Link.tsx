import React from 'react'
import { FaWhatsapp } from "react-icons/fa";

function Link() {
  const phone = process.env.NEXT_PUBLIC_PHONE;
  const message = `Hello CampusCrib, I want to list my premium hostel with the following details:
*Appartment Name:*
*Target School:*
*Location:*
*Price Range:*
*Number of Rooms:*
*Key Amenities:*
*My Contact Information:*
Full Name:
Phone:
Email:

I understand and agree to the 10% premium service fee.`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${phone}?text=${encodedMessage}`;

  return (
    <div className='text-center mb-7'>
      <h1 className='text-4xl font-semibold mb-6 text-gray-900 leading-tight'>Ready to List your Apartment?</h1>
      <div
        className='h-1 bg-[#8B5A2B] w-32 mt-[-5px] md:w-40 mx-auto mb-3 animate-grow'
      />
      <a
        href={whatsappURL}
        target="_blank"
        rel="noreferrer"
        className='bg-[#8B5A2B] gap-3  flex items-center text-white w-fit m-auto p-[8px] rounded-[20px] mt-5 cursor-pointer transition-all duration-500 ease-in-out hover:shadow-lg'
      >
        <FaWhatsapp />
        Connect With Us
      </a>
    </div>
  )
}

export default Link;
