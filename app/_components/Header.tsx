"use client"

import Link from 'next/link';
import React, { useState, useEffect } from 'react'
import { IoIosHome } from "react-icons/io";
import { FaInfoCircle } from "react-icons/fa";
import { MdExplore, MdContactSupport } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { usePathname } from "next/navigation";
import logo from "../../public/logo.png"
import Image from 'next/image';


function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Home", path: "/", icon: <IoIosHome /> },
    { label: "Explore", path: "/explore", icon: <MdExplore /> },
    { label: "About", path: "/about", icon: <FaInfoCircle /> },
    { label: "Contact", path: "/contact", icon: <MdContactSupport /> },
    {label: "Post Hostel", path: "/post", icon: <FaPlus />}
  ];

  return (
    <header
      className={`fixed top-0 left-0 bg-white w-full z-50 px-6 lg:px-14 h-16
      flex items-center justify-between transition-all duration-300
      ${isScrolled ? "shadow-lg" : ""}`}
    >
      <Link href="/" className='outline-0'>
      <Image src={logo} alt="logo" className='w-[100px]' />
      </Link>

    
      <div className='hidden lg:flex items-center gap-6'>
        <div className='flex items-center bg-gray-100
         px-3 py-1 rounded-full shadow-inner relative'>
          <FiSearch className='absolute left-3 text-gray-500' />
          <input
            type='text'
            placeholder='Search areas'
            className='pl-9 pr-3 py-1 bg-gray-100 outline-none rounded-full'
          />
        </div>

        <nav className="flex items-center
         text-gray-800 text-[14px] gap-6 uppercase">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`flex items-center gap-2 px-3 py-1 rounded-[5px] 
              ${pathname === link.path ? "bg-[hsl(29,53%,86%)]  font-semibold" 
                : "hover:bg-gray-300"}`}
            >
              {link.icon} {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <button
        aria-label="Open Menu"
        onClick={() => setMenuOpen((prev) => !prev)}
        className="lg:hidden text-2xl"
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="absolute top-16 left-0 w-full bg-gray-50 p-6 shadow-md transition-all duration-500 transform translate-y-0">
          <div className='flex items-center bg-gray-100 px-3 py-1 mb-4 rounded-full shadow-inner relative'>
            <FiSearch className='absolute left-3 text-gray-500' />
            <input
              type='text'
              placeholder='Search areas'
              className='pl-9 pr-3 py-1 w-full bg-gray-100 outline-none rounded-full'
            />
          </div>

          {links.map((link) => (
            <Link
              key={link.path}
              onClick={() => setMenuOpen(false)}
              href={link.path}
              className="flex items-center gap-2 py-2 mb-2 text-gray-800 font-semibold hover:bg-gray-100 px-3 rounded transition"
            >
              {link.icon} {link.label}
            </Link>
          ))}
        </div>
      )}

    </header>
  )
}

export default Header;
