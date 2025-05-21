import React from 'react'

const Services = () => {
    return (
        <section className="bg-[#1a1a1a] text-white py-16 px-4" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className='w-80 h-80 bg-white rounded-full bg-yellow-400/10' style={{ position: 'absolute', top: -120, right: -120 }}></div>
            <div className='w-80 h-80 bg-white rounded-full bg-yellow-400/10' style={{ position: 'absolute', top: -130, right: -80 }}></div>
            <div className='w-70 h-70 bg-white rounded-full bg-yellow-400/10' style={{ position: 'absolute', bottom: -100, left: -100 }}></div>
            <div className='mb-10 bottomline flex flex-col items-center'>
                <h3 className="text-[#f4bf37] text-sm font-semibold w-full text-center storycon">Premium Grooming</h3>
                <h1 className="text-4xl font-bold w-full text-center">Our Barber Services</h1>
                <div className='underline bg-[#f4bf37] rounded-full mt-1'></div>
                <p className='w-200 text-center text-[#70707a] mt-5 text-lg'>Professional barbering services to keep you looking sharp for everyday confidence or special occasions.</p>
            </div>
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
            </div>
            <div className='flex items-center justify-center'>
                <div className='bg-white w-100 h-100 rounded-lg'>
            </div>
            </div>
        </section>
    )
}

export default Services