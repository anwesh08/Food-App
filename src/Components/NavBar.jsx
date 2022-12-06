import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai'
import { FaShoppingCart, FaWallet, FaUserFriends } from 'react-icons/fa'
import { MdFavorite, MdHelp } from 'react-icons/md'
import { TbTruckDelivery } from 'react-icons/tb'
import { BsFillSaveFill } from 'react-icons/bs'

function NavBar() {
   const [nav, setNav] = useState(false);
   return (
      <div className='max-w-[1640px] mx-auto flex items-center justify-between p-4'>
         {/* Menu and Company Name */}
         <div className="flex items-center">
            <div onClick={() => setNav(!nav)} className="cursor-pointer">
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
            <FaShoppingCart size={20} className='mr-2' />Cart
         </button>

         {/* Mobile Menu */}
         {/* Overlay */}
         {nav ? <div onClick={() => { setNav(!nav) }} className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div> : ''}
         {/* Side Drawer Menu */}
         <div className={nav ? "fixed left-0 top-0 w-[300px] h-screen bg-white z-10 duration-500" : "fixed -left-full w-[300px] h-screen bg-white z-10 duration-300"}>
            <AiOutlineClose onClick={() => { setNav(!nav) }} size={30} className='absolute right-4 top-4 cursor-pointer' />
            <h2 className="text-2xl p-4">
               Best <span className="font-bold">Eats</span>
            </h2>
            <nav>
               <ul className="flex flex-col p-4 text-gray-800">
                  <li className='flex py-4 text-xl cursor-pointer'><TbTruckDelivery size={25} className='mr-4' /> Orders</li>
                  <li className='flex py-4 text-xl cursor-pointer'><MdFavorite size={25} className='mr-4' /> Favorites</li>
                  <li className='flex py-4 text-xl cursor-pointer'><FaWallet size={25} className='mr-4' /> Wallet</li>
                  <li className='flex py-4 text-xl cursor-pointer'><MdHelp size={25} className='mr-4' /> Help</li>
                  <li className='flex py-4 text-xl cursor-pointer'><AiFillTag size={25} className='mr-4' /> Promotions</li>
                  <li className='flex py-4 text-xl cursor-pointer'><BsFillSaveFill size={25} className='mr-4' /> Best Ones</li>
                  <li className='flex py-4 text-xl cursor-pointer'><FaUserFriends size={25} className='mr-4' /> Invite Friends</li>
               </ul>
            </nav>
         </div>
      </div>
   )
}

export default NavBar