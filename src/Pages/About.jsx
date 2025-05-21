import React from 'react';
import { IoMdQuote } from "react-icons/io";

const About = () => {
  return (
    <section className="bg-[#1a1a1a] text-white py-16 px-4" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className='w-80 h-80 bg-white rounded-full bg-yellow-400/10' style={{position:'absolute', top:-100, right:-100}}></div>
        <div className='w-70 h-70 bg-white rounded-full bg-yellow-400/10' style={{position:'absolute', bottom:-100, left:-100}}></div>
        <div className='mb-10 bottomline flex flex-col items-center'>
          <h3 className="text-[#f4bf37] text-sm font-semibold w-full text-center storycon">Our Story</h3>
          <h1 className="text-4xl font-bold w-full text-center">About PMC Barbershop</h1>
          <div className='underline bg-[#f4bf37] rounded-full mt-1'></div>
          <p className='w-200 text-center text-[#70707a] mt-5 text-lg'>Established in 2018, PMC Barbershop has been providing premium grooming services to the men of Denton, TX. Our mission is to deliver exceptional haircuts and grooming services in a welcoming, classic barbershop environment.</p>
        </div>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2 aboutimgdiv">
          <div className="relative rounded-lg overflow-hidden">
            <div className="w-full h-auto bg-gray-600 flex items-center justify-center overflow-hidden">
              <img src={'/about.webp'} className='aboutimg'/>
            </div>
            <div className="tiltdiv absolute shadow-lg bottom-4 right-4 bg-[#f4bf37] text-whitew font-bold py-2 px-4 rounded-md">
              5+ years
            </div>
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="w-full md:w-1/2 space-y-6">
        <div className='flex flex-row gap-5 items-center'>
          <div className='bg-[#f4bf37] w-3 h-30'></div>
          <p className="leading-relaxed text-lg text-[#70707a]">
            Established in 2018, PMC Barbershop has been providing premium grooming services to the men of Denton, TX. Our mission is to deliver exceptional haircuts and grooming services in a welcoming, classic barbershop environment.
          </p>
        </div>
          <div className="bg-[#292929] p-6 pt-1 rounded-lg quotediv">
            <IoMdQuote className='aboutquote' />
            <p className="text-[#71717b] italic">
              We take pride in our attention to detail and personalized service, ensuring each client leaves looking and feeling their best. Our skilled barbers combine traditional techniques with modern trends to create custom styles that suit each individual’s personality and lifestyle.
            </p>
            <div className='linediv'></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;