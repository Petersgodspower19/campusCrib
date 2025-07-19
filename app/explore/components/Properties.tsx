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

function Properties() {
  const [houses, setHouses] = useState<House[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError("");
      const data = query ? await filterHouse(query) : await getAllHouses();
      setHouses(data);
      if (data.length === 0 && query) {
        toast.info(`No houses found in "${query}".`);
      }
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
    <div className='mt-7 px-4 lg:px-14 mb-7 pb-7'>
      {loading && (
        <div className="text-center text-[#8B5A2B] text-lg py-10 font-semibold animate-pulse">
          Fetching houses...
        </div>
      )}

      {error && (
        <p className="text-red-500 mb-6 text-center">{error}</p>
      )}

      {!loading && !error && houses.length === 0 && (
        <div className="text-center text-gray-600 mt-12">
          {query
            ? `No houses found in "${query}". Try searching another location.`
            : "No houses available at the moment."}
        </div>
      )}

      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
        {houses.map((house) => (
          <div key={house._id}
            className='bg-gray-200 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200'>
            <Image
              src={house.coverPhoto}
              width={500}
              height={300}
              loading='lazy'
              alt={house.title}
              className='rounded-md mb-4 w-full h-50 object-cover'
            />
            <h3 className='text-lg font-semibold mb-1'>{house.title}</h3>
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
            <Link
              href={`/explore/${house._id}`}
              className="block"
            >
              <button
                className="bg-[#8B5A2B] cursor-pointer w-full text-center text-white py-2 px-4 rounded-md transition-transform transform hover:translate-y-[-2px] hover:shadow-lg"
              >
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Properties;
