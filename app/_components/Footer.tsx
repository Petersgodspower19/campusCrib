import React from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-[#F9F4EF] py-16 px-4 lg:px-24">
      <div className="max-w-6xl justify-between flex  flex-col md:flex-row flex-wrap gap-10">
        <div>
          <div className="flex items-center  gap-2 mb-4">
            <Image src={logo} alt="Logo" width={50} height={50} />
            <span className="text-2xl font-semibold text-gray-900">
              CampusCrib
            </span>
          </div>
          <p className="text-gray-600 w-full md:w-[250px]">
            Premium student accommodation platform connecting students with verified properties.
          </p>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2">
            <li>
              <a
                href="/about"
                className="text-gray-600 hover:text-[#8B5A2B] transition"
              >
                About Us
              </a>
            </li>
            <li>
              <Link
                href="/explore"
                className="text-gray-600 hover:text-[#8B5A2B] transition"
              >
                Explore
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-[#8B5A2B] transition"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/about/#faq"
                className="text-gray-600 hover:text-[#8B5A2B] transition"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900">
            Contact Information
          </h3>
          <ul className="flex flex-col gap-2">
            <li className="text-gray-600">
              📍 Port Harcourt Nigeria
            </li>
            <li className="text-gray-600">
              📧 info@campuscrib.com
            </li>
            <li className="text-gray-600">
              📞 +2347061080235
            </li>
          </ul>
        </div>

      </div>

      <div className="text-center mt-10 pt-6 border-t border-gray-300">
        <p className="text-gray-500">
          &copy; {new Date().getFullYear()} CampusCrib. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer;
