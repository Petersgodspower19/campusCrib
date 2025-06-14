import React from "react";
import { MdVerifiedUser, MdAttachMoney, MdThumbUp } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

const process = [
  {
    icon: <MdVerifiedUser size={40} color="#8B5A2B" />,
    heading: "Validation",
    text: "We carry out a thorough and secure check to make sure all listings are trustworthy and reliable.",
    requirements: [
      "Confirm your identity",
      "Background screening",
      "Safe and encrypted processing",
    ],
  },
  {
    icon: <MdAttachMoney size={40} color="#8B5A2B" />,
    heading: "Platform Fee",
    text: "A small service fee of 10% covers promotions, vetting, and all platform services.",
    requirements: [
      "Completely transparent pricing",
      "No hidden charges",
      "All-inclusive service",
    ],
  },
  {
    icon: <MdThumbUp size={40} color="#8B5A2B" />,
    heading: "Final Approval",
    text: "We aim to approve your listing quickly, typically within 24-48 hours, while assuring the highest standards.",
    requirements: [
      "Rapid review process",
      "Quality control check",
    ],
  },
]

function ListingProcess() {
  return (
    <div className="p-10">
      <h2
        className="text-3xl font-semibold mb-10 text-center"
        style={{ color: "#8B5A2B" }}
      >
        How It Works
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10">
        {process.map((item, idx) => (
          <div
            key={idx}
            className="p-6 rounded-md shadow-lg border transform transition-all duration-500 ease-in-out hover:shadow-2xl hover:-translate-y-2"
            style={{ borderColor: "#8B5A2B" }}
          >
            {/* Icon at the top */}
            <div className="flex justify-center mb-4">
              {item.icon}
            </div>

            {/* Heading */}
            <h3
              className="text-2xl font-semibold mb-2 text-center"
              style={{ color: "#8B5A2B" }}
            >
              {item.heading}
            </h3>

            {/* Text */}
            <p className="mb-4 text-gray-600 text-center">
              {item.text}
            </p>

            {/* Requirements List */}
            <ul className="flex flex-col gap-2">
              {item.requirements.map((req, i) => (
                <li key={i} className="flex items-center gap-2">
                   <FaCheck color="#8B5A2B" /> {req}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListingProcess;
