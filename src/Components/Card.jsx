import React from 'react'

function Card() {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/* Card 1*/}
      <div className='rounded-xl relative hover:scale-105 duration-300 ease-in-out'>
         {/* Overlay */}
         <div className='absolute h-full w-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-lg md:text-xl lg:text-3xl px-2 pt-4 lg:mb-4 mx-4 font-librebaskerville'>Sun's out, BOGO out</p>
            <p className='text-lg lg:text-2xl px-2 mx-4 font-vollkorn'>Through 8/26</p>
            <button className='border-offWhite bg-offWhite text-black text-md lg:text-xl px-4 py-1 absolute bottom-4 rounded-full mx-4'>Order Now</button>
         </div>
         <img className='rounded-xl object-cover w-full max-h-[160px] md:max-h-[240px] lg:max-h-[270px]' src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>
      {/* Card 2*/}
      <div className='rounded-xl relative hover:scale-105 duration-300 ease-in-out'>
         {/* Overlay */}
         <div className='absolute h-full w-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-xl lg:text-3xl px-2 pt-4 lg:mb-4 mx-4 font-librebaskerville'>New Resturant</p>
            <p className='text-lg lg:text-2xl px-2 mx-4 font-vollkorn'>Added Daily</p>
            <button className='border-offWhite bg-offWhite text-black text-xl px-4 py-1 absolute bottom-4 rounded-full mx-4'>Order Now</button>
         </div>
         <img className='rounded-xl object-cover w-full max-h-[160px] md:max-h-[240px] lg:max-h-[270px]' src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>
      {/* Card 3*/}
      <div className='rounded-xl relative hover:scale-105 duration-300 ease-in-out'>
         {/* Overlay */}
         <div className='absolute h-full w-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-xl lg:text-3xl px-2 pt-4 lg:mb-4 mx-4 font-librebaskerville'>We Deliver Desserts Too</p>
            <p className='text-lg lg:text-2xl px-2 mx-4 font-vollkorn'>Tasty Treats</p>
            <button className='border-offWhite bg-offWhite text-black text-xl px-4 py-1 absolute bottom-4 rounded-full mx-4'>Order Now</button>
         </div>
         <img className='rounded-xl object-cover w-full max-h-[160px] md:max-h-[240px] lg:max-h-[270px]' src="https://images.pexels.com/photos/1098592/pexels-photo-1098592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>
    </div>
  )
}

export default Card