import React from 'react'
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import { BsFillCartFill } from 'react-icons/bs'

function NavBar() {
   return (
      <div className='max-w-[1640px] mx-auto flex items-center justify-between p-4'>
         {/* Menu and Company Name */}
         <div className="flex items-center">
            <div className="cursor-pointer">
               <AiOutlineMenu size={30} />
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
               Best <span className="font-bold">Eats</span>
            </h1>
            <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
               <p className='bg-black text-white p-2 rounded-full'>Delivery</p>
               <p className='p-2'>Pickup</p>
            </div>
         </div>
         {/* Search Input */}
         <div className="md:flex items-center bg-gray-200 rounded-full px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
            <AiOutlineSearch size={20} className='mr-2 cursor-pointer' />
            <input type="text" className='bg-transparent p-2 w-full focus:outline-none' placeholder='Search Foods' />
         </div>
         {/* Cart icon */}
         <button className='hidden md:flex items-center py-2 px-4 rounded-full bg-black text-white'>
            <BsFillCartFill size={20} className='mr-2' />Cart
         </button>
         
         {/* Mobile Menu */}
      </div>
   )
}

export default NavBar