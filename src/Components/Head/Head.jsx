import React, { useState } from 'react';
import { FaPhoneAlt, FaPalette, FaGlobe, FaBars, FaTimes } from 'react-icons/fa';
import './Head.css'; // Assuming you have a CSS file for styles
import { LuPalette } from "react-icons/lu";
import { FiGlobe,FiPhone } from "react-icons/fi";

const Head = () => {

  return (
<header
  className="flex justify-between items-center p-4 bg-[#1a1a1a]/70 backdrop-blur-md shadow-md pl-30 pr-30 top-0 z-50"
  style={{ position: 'sticky' }}
>        <div>
            <img src="/logo.webp" alt="Logo" className="logo w-13 h-10" />
        </div>

        <div className='flex items-center gap-7'>
            <h1 className='text-white font-semibold hover:text-yellow-500 cursor-pointer'>Home</h1>
            <h1 className='text-white font-semibold hover:text-yellow-500 cursor-pointer'>About</h1>
            <h1 className='text-white font-semibold hover:text-yellow-500 cursor-pointer'>Services</h1>
            <h1 className='text-white font-semibold hover:text-yellow-500 cursor-pointer'>Gallery</h1>
            <h1 className='text-white font-semibold hover:text-yellow-500 cursor-pointer'>Contact</h1>
        </div>

        <div className='flex items-center gap-4'>
            {/* <div className='hover:bg-white/10 hover:text-black rounded-full flex items-center justify-center'> */}
                <LuPalette className="w-8 h-8 text-white hover:text-black/80 p-2 rounded-full hover:bg-white/10" />
            {/* </div> */}
            <FiGlobe className="w-8 h-8 text-white hover:text-black/80 p-2 rounded-full hover:bg-white/10" />
            <div className='flex items-center gap-2'>
                <FiPhone className='text-yellow-500' />
                <h1 className='text-white font-semibold'>+91 1234567890</h1>
            </div>
            <button className='text-white font-semibold px-4 py-2 rounded-lg bg-[#f4bf37] hover:bg-[#e0a800]'>Book an Appointment</button>
        </div>
</header>

  );
};


export default Head;
