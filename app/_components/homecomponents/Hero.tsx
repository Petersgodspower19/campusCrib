"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import hero1 from "../../../public/assets/hero1.jpg";
import hero2 from "../../../public/assets/hero2.jpg";
import hero3 from "../../../public/assets/hero3.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

// Slider content
const hero = [
  { text: "Your Home Away From Home", subtext: "Comfortable accommodations for all.", bg: hero3 },
  { text: "Tranquil Bedrooms", subtext: "Your Personal Sanctuary for rest and relaxation", bg: hero1 },
  { text: "A Haven Designed Just for You", subtext: "Comfortable, stylish, and perfect for making lasting memories at home.", bg: hero2 },
];

// Slider settings
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
};

function Hero() {
  const [loading, setLoading] = useState(new Array(hero.length).fill(true));

  const handleLoad = (index: number) => {
    setLoading((prev) => {
      const newState = [...prev];
      newState[index] = false;
      return newState;
    });
  };

  return (
    <div className="w-full mt-12 py-4 overflow-x-hidden">
      <Slider {...settings}>
        {hero.map((item, idx) => (
          <div key={idx} className="relative w-full min-h-screen flex items-center justify-center text-center">
            {/* Loading spinner while the photo is loading */}
            {loading[idx] && (
              <div className="absolute w-full h-full flex items-center justify-center z-10">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-400" />
              </div>
            )}

            <Image
              src={item.bg}
              alt={item.text}
              fill
              priority
              className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500"
              onLoad={() => handleLoad(idx)}
            />

            {/* Black overlay for contrast */}
            <div className="absolute w-full h-full bg-black/50" />

            {/* Centered content */}
            <div className="absolute w-full h-full flex flex-col items-center justify-center p-4">
              <h1 className="text-4xl font-semibold text-gray-100 mb-2">
                {item.text}
              </h1>
              <p className="text-lg text-gray-200">
                {item.subtext}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Hero;
