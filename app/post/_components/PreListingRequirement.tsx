import React from 'react'
import { FaCheck } from "react-icons/fa";

const essentialDocuments = [
    "Valid government-issued ID (Driver's license, National ID, or Passport)",
    "Proof of ownership or authorization to list",
    "Recent utility bill (not older than 3 months)",
    "Tax identification number (optional)"
]

const mediaRequirements = [
    "High-quality photos (minimum 8, showing all areas)",
    "Video tour (minimum 2 minutes walkthrough)",
    "Floor plan (recommended)",
    "360 virtual tour of apartment and area location"
]

function PreListingRequirement() {
  return (
    <div className='p-10'>
    <h2
        className="text-3xl font-semibold mb-10 lg:text-center"
        style={{ color: "#8B5A2B" }}
      >
        Lisiting Requirements
      </h2>

      <div className='flex flex-col gap-6 justify-start lg:justify-center md:flex-row flex-wrap'>
        <div>
            <h1 className='text-xl mb-4 font-semibold text-gray-900'>Essential Documents</h1>
            <ul className='flex flex-col gap-2 items-start'>
              {essentialDocuments.map((item, index) => (
                <li key={index} className='flex text-gray-600 text-[15px] items-center gap-1'>
                    <FaCheck color="#8B5A2B"/>
                    {item}               
                     </li>
              ))}
            </ul>
        </div>

        <div>
            <h1 className='text-xl mb-4 font-semibold text-gray-900'>Media Requirements</h1>
            <ul className='flex flex-col gap-2 items-start'>
              {mediaRequirements.map((item, index) => (
                <li key={index} className='flex text-gray-600 text-[15px] items-center gap-1'>
                    <FaCheck color="#8B5A2B"/>
                    {item}               
                     </li>
              ))}
            </ul>
        </div>
      </div>

    </div>
  )
}

export default PreListingRequirement
