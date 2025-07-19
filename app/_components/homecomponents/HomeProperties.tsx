"use client"
import React, { useCallback, useEffect, useState } from 'react'
import { CiLocationOn } from "react-icons/ci";
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { filterHouse, getAllHouses } from '@/app/_api/house';
import { toast } from 'react-toastify';


type House = {
  _id: string;
  title: string;
  description: string;
  location: string;
  features: string[];
  rent: number | string;
  coverPhoto: string;
};


function HomeProperties() {
  const [houses, setHouses] = useState<House[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

   const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const data = query ? await filterHouse(query) : await getAllHouses();
      setHouses(data);
    } catch (err) {
      let message = "Failed to fetch houses";
  if (err instanceof Error) {
    message = err.message;
  }
      toast.error(message);
      setError(message);
      setHouses([]);
    } finally {
      setLoading(false);
    }
  }, [query]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);


  return (
    <div className='mt-7 px-4 lg:px-10 mb-7 pb-7'>
      {loading && (
        <h1 className='text-center'>Fetching houses....</h1>
      )}

      {error && <p className="text-red-500 mb-4">{error}</p>}

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
  {[...houses].reverse().slice(0, 3).map((house, idx) => (
    <div key={idx} 
         className='bg-gray-200 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200'>
      <Image src={house?.coverPhoto} 
      width={500}
        height={300}
      loading='lazy' alt={house.title} 
           className='rounded-md mb-4 w-full h-50 object-cover' />
      <h3 className='text-lg font-semibold mb-1'>{house?.title}</h3>
      <p className='text-gray-500 mb-2'>{house?.description}</p>
      <div className='flex items-center text-gray-500 mb-2'>
        <CiLocationOn className='mr-1' />
        {house?.location}
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
