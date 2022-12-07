import React from 'react'
import { categories } from '../Data/data'

function Category() {
   console.log(categories)
   return (
      <div className='max-w-[1640px] mx-auto px-4 py-12'>
         <h1 className='text-5xl font-bold text-brightOrange text-center font-librebaskerville'>Top Rated Menu Items</h1>
         {/* Category */}
         <div className='grid grid-cols-2 md:grid-cols-4 gap-8 py-10'>
            {categories.map((items, index) => (
               <div key={index} className='bg-offWhite rounded-xl p-4 flex justify-between items-center shadow-sm shadow-offWhite'>
                  <h2 className='font-bold text-lg sm:text-xl font-vollkorn'>{items.name}</h2>
                  <img src={items.image} alt={items.name} className='w-28' />
               </div>
            ))}
         </div>
      </div>
   )
}

export default Category