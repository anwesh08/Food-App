import React from 'react'

function Hero() {
   return (
      <div className='max-w-[1640px] mx-auto p-4'>
         <div className='max-h-[550px] relative'>
            <div className='absolute w-full h-full bg-black/20 text-gray-200 flex flex-col justify-center'>
               <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-brightOrange font-librebaskerville'>Best</span></h1>
               <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'><span className='text-brightOrange font-librebaskerville'>Foods</span> Delivered</h1>
            </div>
            <img className='max-h-[550px] w-full object-cover' src="https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
         </div>
      </div>
   )
}

export default Hero