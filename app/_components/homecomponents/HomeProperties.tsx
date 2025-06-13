import React from 'react'
import home1 from "../../../public/assets/home1.jpg"
import home2 from "../../../public/assets/home2.jpg"
import home3 from "../../../public/assets/home3.jpg"
import { CiLocationOn } from "react-icons/ci";
import Image from 'next/image';
import Link from 'next/link';

const houses = [
    {
     name: "Sharp SelfCon",
     description: "Sweet Selfcon like this",
     location: "Aluu, Port Harcourt",
     features: ["Good Netwwork", "Water", "Close to School"],
     rent: "250,000",
     image: home2,
    },
    {
     name: "Sweet 1bed",
     description: "Very good 1bedroom apartment",
     location: "Back of Chem, Port Harcourt",
     features: ["Good Netwwork", "Water", "Close to School"],
     rent: "600,000",
     image: home1,
    },
    {
     name: "3BedRoom Apartment",
     description: "Very nice stress-free 3bed room flat apartment",
     location: "Alakahia, Port Harcourt",
     features: ["Federal Light(Prepaid Meter)","Water", "Good Network"],
     rent: "1,700,000",
     image: home3,
    }
]

function HomeProperties() {
  return (
    <div className='mt-7 px-4 lg:px-14 mb-7 pb-7'>
      <div className='text-center'>
        <h2  
          className='text-gray-800 mb-3 text-[16px] font-semibold tracking-wide uppercase'>
          Featured Properties
        </h2>
        <div  
          className='h-1 bg-[#8B5A2B] w-32 md:w-40 mx-auto mb-3 animate-grow' />
        <p  
          className='text-gray-500 mt-3 py-3 max-w-xl mx-auto'>
          At <span className='text-[#8B5A2B] font-bold'>CampusCrib</span>, 
          we make sure each property in our collection meets 
          rigorous standards for quality, comfort, and student-focused amenities.
        </p>
      </div>

      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
        {houses.map((house, idx) => (
          <div key={idx} 
               className='bg-gray-200 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200'>
            <Image src={house.image} alt={house.name} 
                 className='rounded-md mb-4 w-full h-50 object-cover' />
            <h3 className='text-lg font-semibold mb-1'>{house.name}</h3>
            <p className='text-gray-500 mb-2'>{house.description}</p>
            <div className='flex items-center text-gray-500 mb-2'>
              <CiLocationOn className='mr-1' />
              {house.location}
            </div>
            <ul className='mb-3'>
              {house.features?.map((feature, i) => (
                <li key={i} 
                    className='text-gray-500 text-sm mb-1 ml-4 list-disc'>{feature}</li>
              ))}
            </ul>
            <div className='font-semibold text-[#8B5A2B] mb-2'>
              Rent: NGN {house.rent}
            </div>
            <button 
              className='bg-[#8B5A2B]
              cursor-pointer outline-0 text-gray-100 py-2 px-4 rounded-md w-full transition-transform transform hover:translate-y-[-2px] hover:shadow-lg'>
              View Details
            </button>
          </div>
        ))}
      </div>
      <div className='flex justify-center mt-10 outline-0'>
            <Link
                href="/explore"
                className='border-1 
               outline-0 m-auto text-center border-[#8B5A2B] cursor-pointer text-[#8B5A2B] rounded-[5px] p-[8px] block'
            >
                View all Properties
            </Link>
            </div>

    </div>
  )
}

export default HomeProperties;
