"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    username: "Chinedu Okeke",
    text: "I was stranded looking for a hostel close to Choba. This platform made it so much easier to find a comfortable place near my department!",
    department: "Mass Communication, University of Port Harcourt",
  },
  {
    username: "Amina Bello",
    text: "As a first-year student, I didn't know much about accommodations. The website connected me directly with hostel owners without stress!",
    department: "Medicine, University of Port Harcourt",
  },
  {
    username: "Tunde Adedeji",
    text: "Searching for a room close to my faculty was tough. With this platform, I found a place that fits my budget and is just a short walk away from my lectures.",
    department: "Engineering, University of Port Harcourt",
  },
  {
    username: "Bunmi Alade",
    text: "The platform made it so convenient to compare prices and locations. Now I stay in a comfortable hostel just minutes away from my department!",
    department: "Law, University of Port Harcourt",
  },
];

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1 } },
      { breakpoint: 1280, settings: { slidesToShow: 2 } }
    ],
  };

  return (
    <div className="w-full">
      <Slider {...settings} className="gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="px-2">
            <div className="bg-[#F9F4EF] p-6 rounded-2xl shadow-md flex flex-col h-full">
              <p className="text-gray-700 mb-6 flex-1">“{t.text}”</p>
              <div className="flex items-center mt-auto">
                {/* Initial of the name in a circle */}
                <div className="flex items-center justify-center w-10 h-10 mr-3 rounded-full bg-[#8B5A2B] text-[#F9F4EF] font-semibold">
                   {t.username.charAt(0)}
                </div>
                <div>
                   <h3 className="text-lg font-semibold text-gray-800">{t.username}</h3>
                   <p className="text-sm text-[#8B5A2B]">{t.department}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
