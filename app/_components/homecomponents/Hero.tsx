"use client"
import React from "react";
import Slider from "react-slick"
import hero1 from "../../../public/assets/hero1.jpg";
import hero2 from "../../../public/assets/hero2.jpg";
import hero3 from "../../../public/assets/hero3.jpg";
import hero4 from "../../../public/assets/hero4.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const hero = [
  {
    text: "Your Home Away From Home",
    subtext: "Comfortable accommodations for all.",
    bg: hero3,
  },
  {
    text: "Tranquil Bedrooms",
    subtext: "Your Personal Sanctuary for rest and relaxation",
    bg: hero1,
  },
  {
  text: "A Haven Designed Just for You",
  subtext: "Comfortable, stylish, and perfect for making lasting memories at home.",
  bg: hero2,
},
  
];


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
  return (
    <div className="w-full mt-12 py-4 overflow-x-hidden">
      <Slider {...settings}>
        {hero.map((item, idx) => (
          <div
            key={idx}
            className="relative w-full min-h-screen flex items-center justify-center text-center"
          >
            <Image src={item.bg} alt={item.text} 
            className="absolute top-0 left-0 w-full h-full object-cover" />
            {/* Black overlay for contrast; adjust or remove if it's too dark */}
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