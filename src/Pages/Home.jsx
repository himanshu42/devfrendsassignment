import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaArrowDown } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#1c1c1c] text-white flex flex-col md:flex-row items-center justify-between px-10 py-20 px-30" style={{ marginTop: '-70px' }}>
      {/* Left Text Section */}
      <div className="max-w-xl mt-10">
        <p className="text-[#f4bf37] font-semibold mb-2">Premium Barber Services in Denton</p>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
          Classic Cuts, Modern Style
        </h1>
        <h1 className="text-[#f4bf37] text-4xl md:text-5xl font-extrabold mt-2">
          Premium Barber Shop
        </h1>
        <p className="text-[#71717b] mt-4 text-base leading-relaxed">
          At PMC Barbershop, we combine traditional barbering techniques with modern styling to give you the perfect look. Our experienced barbers deliver precision cuts, beard grooming, and relaxing hot towel shaves in a classic barbershop atmosphere.
        </p>

        {/* Location */}
        <div className="flex bg-[#1b1b1b] items-center gap-2 mt-6 border border-[#3d3d3d] px-4 py-2 rounded-full w-max">
          <FaMapMarkerAlt className="text-[#f4bf37]" />
          <span className='text-[#71717b]'>Denton, TX</span>
        </div>

        {/* Buttons */}
        <div className="mt-6">
          <button className="w-full font-semibold mb-6 flex items-center justify-center gap-2 border border-[#3d3d3d] px-6 py-1 rounded-lg bg-[#1a1a1a] hover:bg-[#f4bf37] hover:text-black transition">
            <FaPhoneAlt />
            Our Services
          </button>
          <button className="w-full font-semibold hover:bg-[#e2b235] flex items-center justify-center gap-2 bg-[#f4bf37] text-white font-semibold px-6 py-1 rounded-lg hover:bg-[#e0a800] transition">
            <FaPhoneAlt />
            Book Now
          </button>
        </div>
        <a href="#aboutpmc">
          <FaArrowDown className='mt-10 mx-auto text-[#e2b235] animate-pulse pb-0 h-15 hover:pb-5 cursor-pointer' />
        </a>
      </div>

      {/* Right Image Section */}
      <div className="mt-10 md:mt-0 md:ml-10 p-5 transition-transform duration-300 transform hover:scale-105">
        <img
          src="/hero.webp"
          alt="Barbershop Team"
          className="max-w-full h-auto shadow-lg"
        />
      </div>
    </div>
  );
};

export default Home;