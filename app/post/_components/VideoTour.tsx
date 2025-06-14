import React from "react";
import { FaVideo } from "react-icons/fa";

const guidelines = [
  "At least 2 minutes in length, clearly showing all areas",
  "Must include exterior, rooms, bathrooms, kitchen, and communal spaces",
  "Higher video quality is preferred (we can recommend a videographer if needed)",  
  "Submit through Google Drive, Dropbox, or WeTransfer",
  "Must be recent (within the last 2 months)",  
  "Clear narration or subtitles are a plus",
]

function VideoTour() {
  return (
    <div
      className="bg-[#F9F4EF] p-6 mb-6 w-full max-w-2xl mx-auto rounded-xl shadow-md transition-all duration-500 ease-in-out hover:shadow-2xl"
    >
      {/* Header */}
      <h2
        className="text-2xl flex items-center gap-2 mb-6 font-semibold"
        style={{ color: "#8B5A2B" }}
      >
        <FaVideo color="#8B5A2B" size={24} />
        Video Tour Guidelines
      </h2>

      {/* List */}
      <ul className="flex flex-col gap-3">
        {guidelines.map((item, index) => (
          <li
            key={index}
            className="text-gray-600 text-[15px] p-2 rounded-md transition-all duration-500 ease-in-out hover:bg-[#EADFCC]"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default VideoTour;
