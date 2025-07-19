"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getHouseDetails } from "@/app/_api/house";
import { CiLocationOn } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";

type House = {
  _id: string;
  title: string;
  description: string;
  location: string;
  features: string[];
  rent: number | string;
  coverPhoto: string;
  media: { url: string }[];
  landlordContact: string;
};

function HouseDetails() {
  const [house, setHouse] = useState<House | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [mediaIndex, setMediaIndex] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    const getHouse = async () => {
      try {
        setLoading(true);
        const res = await getHouseDetails(id);
        setHouse(res);
      } catch (err: unknown) {
  if (err instanceof Error) {
    setError(err.message);}
      } finally {
        setLoading(false);
      }
    };
    getHouse();
  }, [id]);

  const handleNext = () => {
    if (!house || !house.media?.length) return;
    setMediaIndex((prev) => (prev + 1) % house.media.length);
  };

  const handlePrev = () => {
    if (!house || !house.media?.length) return;
    setMediaIndex((prev) =>
      prev === 0 ? house.media.length - 1 : prev - 1
    );
  };

  // WhatsApp Message
  const message = "Good day, I'm from Campus Crib and I saw your property listing.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = house?.landlordContact
    ? `https://wa.me/${house.landlordContact}?text=${encodedMessage}`
    : "#";

  return (
    <div className="w-full mt-10 px-4 lg:px-20 py-10">
      {loading && (
        <div className="w-full flex items-center justify-center py-20">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-400" />
        </div>
      )}

      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      {house && (
        <div className="flex flex-col gap-6">
          {/* Media Viewer */}
          <div className="relative w-full h-[70vh] bg-gray-200 rounded-xl overflow-hidden">
            {house.media?.length > 0 && (
              <>
                {house.media[mediaIndex].url.toLowerCase().endsWith(".mp4") ? (
                  <video
                    controls
                    className="w-full h-full object-cover"
                    src={house.media[mediaIndex].url}
                  />
                ) : (
                  <Image
                    src={house.media[mediaIndex].url}
                    alt="House media"
                    fill
                    className="object-cover rounded-xl"
                  />
                )}

                {house.media.length > 1 && (
                  <>
                    <button
                      onClick={handlePrev}
                      className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-200"
                    >
                      ←
                    </button>
                    <button
                      onClick={handleNext}
                      className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-200"
                    >
                      →
                    </button>
                  </>
                )}
              </>
            )}
          </div>

          <div className="text-sm text-gray-600 text-center">
            Media {mediaIndex + 1} of {house?.media?.length}
          </div>

          {/* House Info */}
          <div className="bg-white flex justify-between flex-col lg:flex-row p-6 rounded-xl shadow-md">
            <div>
              <h1 className="text-2xl font-bold mb-2">{house.title}</h1>

              <div className="flex items-center text-gray-500 mb-4">
                <CiLocationOn className="mr-1 text-lg" />
                <span className="text-base">{house.location}</span>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                {house.description}
              </p>

              {/* Features */}
              {house.features && house.features.length > 0 && (
                <div className="mb-4">
                  <h3 className="font-semibold mb-2 text-lg">Features:</h3>
                  <ul className="list-disc pl-6 text-sm text-gray-600">
                    {house.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Rent */}
              <div className="text-lg font-semibold text-[#8B5A2B] mt-2">
                Rent: ₦{house.rent}
              </div>
            </div>

            {/* WhatsApp Button */}
            <div className="mt-6 lg:mt-0">
              <a
                href={whatsappURL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#1eb75b] flex items-center gap-2 text-white rounded-[10px] px-4 py-3 w-fit"
              >
                <FaWhatsapp size={20} />
                Connect via WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HouseDetails;
