import React from 'react'

const Commitment = () => {
    return (
        <section className="bg-[#1a1a1a] text-white py-16 px-4" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className='w-80 h-80 bg-white rounded-full bg-yellow-300/10' style={{ position: 'absolute', top: -70, right: -70 }}></div>
            <div className='w-80 h-80 bg-white rounded-full bg-yellow-300/10' style={{ position: 'absolute', top: -130, left: -150 }}></div>
            <div className='w-70 h-70 bg-white rounded-full bg-yellow-300/10' style={{ position: 'absolute', bottom: -100, left: -100 }}></div>
            <div className='w-90 h-90 bg-white rounded-full bg-yellow-300/10' style={{ position: 'absolute', bottom: -120, right: -120 }}></div>
            <div className='mb-10 bottomline flex flex-col items-center'>
                <h3 className="text-[#f4bf37] text-sm font-semibold w-full text-center storycon">Our Commitment</h3>
                <h1 className="text-4xl font-bold w-full text-center">Why Choose PMC Barbershop?</h1>
                <div className='underline bg-[#f4bf37] rounded-full mt-1'></div>
                <p className='w-200 text-center text-[#70707a] mt-5 text-lg'>What makes us the premier barbershop in Denton, TX.</p>
            </div>
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
            </div>
            <div className='flex items-center justify-center flex-wrap gap-10'>
                <div className='commitmentCard bg-[#222222] border-1 border-[#3d3d3d] w-100 h-90 rounded-xl transition transform hover:-translate-y-2 hover:shadow-lg hover:border-[#f4bf37] z-10 p-8'>
                    <div className='bg-[#373225] rounded-2xl w-15 h-15 flex items-center justify-center p-4 Comtextdiv'>
                        {/* <img src={'/hair-styling-icon.svg'} className='w-full h-40 rounded-t-lg' alt="Haircut" /> */}
                        <span className='text-[#f4bf37] text-md'>User</span>
                    </div>
                    <h1 className='mt-8 text-xl font-bold'>Expert Barbers</h1>
                    <p className='mt-8 text-[#686871]'>Our team consists of certified barbers with years of experience in classic and modern cutting techniques, beard grooming, and men's styling.</p>
                </div>
                <div className='commitmentCard bg-[#222222] border-1 border-[#3d3d3d] w-100 h-90 rounded-xl transition transform hover:-translate-y-2 hover:shadow-lg hover:border-[#f4bf37] z-10 p-8'>
                    <div className='bg-[#373225] rounded-2xl w-15 h-15 flex items-center justify-center p-4 Comtextdiv'>
                        {/* <img src={'/hair-styling-icon.svg'} className='w-full h-40 rounded-t-lg' alt="Haircut" /> */}
                        <span className='text-[#f4bf37] text-md'>Scissors</span>
                    </div>
                    <h1 className='mt-8 text-xl font-bold'>Premium Tools & Products</h1>
                    <p className='mt-8 text-[#686871]'>We use only high-quality barbering tools and premium men's grooming products to ensure the best results for your hair and skin..</p>
                </div>
                <div className='commitmentCard bg-[#222222] border-1 border-[#3d3d3d] w-100 h-90 rounded-xl transition transform hover:-translate-y-2 hover:shadow-lg hover:border-[#f4bf37] z-10 p-8'>
                    <div className='bg-[#373225] rounded-2xl w-15 h-15 flex items-center justify-center p-4 Comtextdiv'>
                        {/* <img src={'/hair-styling-icon.svg'} className='w-full h-40 rounded-t-lg' alt="Haircut" /> */}
                        <span className='text-[#f4bf37] text-md'>Home</span>
                    </div>
                    <h1 className='mt-8 text-xl font-bold'>Classic Barbershop Experience</h1>
                    <p className='mt-8 text-[#686871]'>Enjoy a comfortable, clean shop with a classic barbershop atmosphere where you can relax while getting a great cut or shave.</p>
                </div>
            </div>
        </section>
    )
}

export default Commitment