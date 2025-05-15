import React from 'react';

const About = () => {
  return (
    <section className="bg-[#1a1a1a] text-white py-16 px-4" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className='w-80 h-80 bg-white rounded-full bg-yellow-400/10' style={{position:'absolute', top:-100, right:-100}}></div>
        <div className='w-70 h-70 bg-white rounded-full bg-yellow-400/10' style={{position:'absolute', bottom:-100, left:-100}}></div>
        <div className='mb-10 bottomline'>
          <h3 className="text-[#f4bf37] text-sm font-semibold w-full text-center storycon">Our Story</h3>
          <h1 className="text-4xl font-bold w-full text-center">About PMC Barbershop</h1>
        </div>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2">
          <div className="relative rounded-lg overflow-hidden">
            <div className="w-full h-64 bg-gray-600 flex items-center justify-center">
              <span className="text-gray-400">Image Placeholder</span>
            </div>
            <div className="absolute bottom-4 left-4 bg-yellow-400 text-black font-bold py-2 px-4 rounded">
              5+ YEARS
            </div>
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <p className="text-gray-400 leading-relaxed">
            Established in 2018, PMC Barbershop has been providing premium grooming services to the men of Denton, TX. Our mission is to deliver exceptional haircuts and grooming services in a welcoming, classic barbershop environment.
          </p>
          <div className="bg-gray-800 p-6 rounded-lg">
            <p className="text-gray-300 italic">
              "We take pride in our attention to detail and personalized service, ensuring each client leaves looking and feeling their best. Our skilled barbers combine traditional techniques with modern trends to create custom styles that suit each individual’s personality and lifestyle."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;