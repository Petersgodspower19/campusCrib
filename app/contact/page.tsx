"use client";
import React, { useState } from "react";

function ContactPage() {
  const slides = [
    "Campus Crib is your all-in-one platform for securing accommodations near your campus!",
    "We connect students directly with landlords and hostel providers, simplifying the process.",
    "Discover a home away from home with ease, thanks to Campus Crib!",
  ];

  // `current` should be a number
  const [current, setCurrent] = useState<number>(0);

  const handlePrevious = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));  
  };
  
  const handleNext = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));  
  };
  
  return (
    <div
      className="flex flex-col md:flex-row p-10 gap-10 mt-16 bg-white"
     
    >
      {/* left side form */}
      <div className="flex-1 p-6 rounded-md" >
        <h2
          className="text-2xl mb-6 font-semibold"
          style={{ color: "#8B5A2B" }}
        >
          We're here to help
        </h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            className="p-3 rounded-md border-none"
            style={{ background: "#ffffff", color: "#8B5A2B" }}
          />
          <input
            type="email"
            placeholder="Email address"
            className="p-3 rounded-md border-none"
            style={{ background: "#ffffff", color: "#8B5A2B" }}
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="p-3 rounded-md border-none"
            style={{ background: "#ffffff", color: "#8B5A2B" }}
          ></textarea>
          <button
            type="submit"
            className="p-3 font-semibold rounded-md"
            style={{ background: "#8B5A2B", color: "#ffffff" }}
          >
            Send message
          </button>
        </form>
      </div>

      {/* right side slider */}
      <div
        className="flex-1 p-6 rounded-md relative"
      >
        <p
          className="mb-6 text-lg font-semibold"
          style={{ color: "#8B5A2B" }}
        >
          {slides[current]}
        </p>

        {/* Slider controls */}
        <div className="absolute bottom-6 left-6 flex gap-4">
          <button
            onClick={handlePrevious}
            className="p-2 font-semibold rounded-md"
            style={{ background: "#8B5A2B", color: "#ffffff" }}
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="p-2 font-semibold rounded-md"
            style={{ background: "#8B5A2B", color: "#ffffff" }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContactPage;
