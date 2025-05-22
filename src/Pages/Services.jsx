import React from 'react'

const Services = () => {
    return (
        <section className="bg-[#1a1a1a] text-white py-16 px-4" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className='w-80 h-80 bg-white rounded-full bg-yellow-300/10' style={{ position: 'absolute', top: -120, right: -120 }}></div>
            <div className='w-80 h-80 bg-white rounded-full bg-yellow-300/10' style={{ position: 'absolute', top: -130, right: -80 }}></div>
            <div className='w-70 h-70 bg-white rounded-full bg-yellow-300/10' style={{ position: 'absolute', bottom: -100, left: -100 }}></div>
            <div className='mb-10 bottomline flex flex-col items-center'>
                <h3 className="text-[#f4bf37] text-sm font-semibold w-full text-center storycon">Premium Grooming</h3>
                <h1 className="text-4xl font-bold w-full text-center">Our Barber Services</h1>
                <div className='underline bg-[#f4bf37] rounded-full mt-1'></div>
                <p className='w-200 text-center text-[#70707a] mt-5 text-lg'>Professional barbering services to keep you looking sharp for everyday confidence or special occasions.</p>
            </div>
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
            </div>
            <div className='flex items-center justify-center flex-wrap gap-10'>
                <div className='serviceCard bg-[#222222] border-1 border-[#3d3d3d] w-90 h-130 rounded-xl transition transform hover:-translate-y-2 hover:shadow-lg hover:border-[#615129] z-10 p-8 pt-15'>
                    <div className='bg-[#2d2d2d] rounded-lg w-20 h-20 flex items-center justify-center p-4 imgdiv'>
                        <img src={'/hair-styling-icon.svg'} className='w-full h-40 rounded-t-lg' alt="Haircut" />
                    </div>  
                    <h1 className='mt-8 text-xl font-bold'>Haircuts</h1> 
                    <p className='mt-8 text-[#686871]'>Our skilled barbers deliver precision haircuts tailored to your style and face shape. From classic cuts to modern fades, we ensure you leave looking sharp and confident.</p>  
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px'}} className='mt-4 text-[#686871] pb-15'>
                        <li>Classic Cuts</li>
                        <li>Modern Styles</li>
                    </ul>            
                </div>
                <div className='serviceCard bg-[#222222] border-1 border-[#3d3d3d] w-90 h-130 rounded-xl transition transform hover:-translate-y-2 hover:shadow-lg hover:border-[#615129] z-10 p-8 pt-15'>
                    <div className='bg-[#2d2d2d] rounded-lg w-20 h-20 flex items-center justify-center p-4 imgdiv'>
                        <img src={'/makeup-icon.svg'} className='w-full h-40 rounded-t-lg' alt="Haircut" />
                    </div>  
                    <h1 className='mt-8 text-xl font-bold'>Beard Services</h1> 
                    <p className='mt-8 text-[#686871]'>Maintain your facial hair with our premium beard services. Our barbers specialize in perfect beard shaping, precise trims, and luxurious hot towel shaves for the ultimate grooming experience.Beard Trims</p>  
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px'}} className='mt-4 text-[#686871] pb-15'>
                        <li>Beard Trims</li>
                        <li>Beard Shaping</li>
                    </ul>            
                </div>
                <div className='serviceCard bg-[#222222] border-1 border-[#3d3d3d] w-90 h-130 rounded-xl transition transform hover:-translate-y-2 hover:shadow-lg hover:border-[#615129] z-10 p-8 pt-15'>
                    <div className='bg-[#2d2d2d] rounded-lg w-20 h-20 flex items-center justify-center p-4 imgdiv'>
                        <img src={'/skincare-icon.svg'} className='w-full h-40 rounded-t-lg' alt="Haircut" />
                    </div>  
                    <h1 className='mt-8 text-xl font-bold'>Premium Services</h1> 
                    <p className='mt-8 text-[#686871]'>Enhance your look with our premium barbering services including expert hair coloring, revitalizing scalp treatments, and styling for special occasions when you need to look your absolute best.</p>  
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px'}} className='mt-4 text-[#686871] pb-15'>
                        <li>Hair Coloring</li>
                        <li>Scalp Treatments</li>
                    </ul>            
                </div>
            </div>
        </section>
    )
}

export default Services