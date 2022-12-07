import React, { useState } from 'react'
import { data } from '../Data/data'

function Foods() {
   console.log(data)
   const [foods, setFoods] = useState(data);

   // Filter By Type
   const filterType = (category) => {
      setFoods(data.filter(items => {
         return items.category === category
      }))
   }

   // Filter By Price
   const filterPrice = (price) => {
      setFoods(data.filter(items => {
         return items.price === price
      }))
   }
   return (
      <div className='max-w-[1640px] mx-auto px-4 py-12 text-white'>
         <h1 className='text-brightOrange font-bold text-center text-5xl font-librebaskerville'>Top Rated Menu Items</h1>
         {/* Filter Row */}
         <div className='flex flex-col lg:flex-row justify-between'>
            {/* Filter Type */}
            <div>
               <p className='font-bold text-2xl mb-4 font-librebaskerville text-brightOrange tracking-wider'>Filter Type</p>
               <div className='flex justify-between flex-wrap max-w-[600px] w-full mt-4'>
                  <button onClick={() => setFoods(data)} type='button' className='border border-brightOrange text-white hover:bg-brightOrange hover:scale-105 duration-300 ease-in-out rounded-full mx-2 text-lg px-3 py-1 font-vollkorn'>All</button>
                  <button onClick={() => filterType('burger')} type='button' className='border border-brightOrange text-white hover:bg-brightOrange hover:scale-105 duration-300 ease-in-out rounded-full mx-2 text-lg px-3 py-1 font-vollkorn'>Burgers</button>
                  <button onClick={() => filterType('pizza')} type='button' className='border border-brightOrange text-white hover:bg-brightOrange hover:scale-105 duration-300 ease-in-out rounded-full mx-2 text-lg px-3 py-1 font-vollkorn'>Pizza</button>
                  <button onClick={() => filterType('salad')} type='button' className='border border-brightOrange text-white hover:bg-brightOrange hover:scale-105 duration-300 ease-in-out rounded-full mx-2 text-lg px-3 py-1 font-vollkorn'>Salads</button>
                  <button onClick={() => filterType('chicken')} type='button' className='border border-brightOrange text-white hover:bg-brightOrange hover:scale-105 duration-300 ease-in-out rounded-full mx-2 text-lg px-3 py-1 font-vollkorn'>Chickens</button>
               </div>
            </div>
            {/* Filter Price */}
            <div>
               <p className='font-bold text-2xl mb-4 font-librebaskerville text-brightOrange tracking-wider'>Filter Price</p>
               <div className='flex justify-between max-w-[400px] w-full mt-4'>
                  <button onClick={() => filterPrice('$')} type='button' className='border border-brightOrange text-white hover:bg-brightOrange hover:scale-105 duration-300 ease-in-out rounded-full mx-2 text-lg px-3 py-1 font-vollkorn'>$</button>
                  <button onClick={() => filterPrice('$$')} type='button' className='border border-brightOrange text-white hover:bg-brightOrange hover:scale-105 duration-300 ease-in-out rounded-full mx-2 text-lg px-3 py-1 font-vollkorn'>$$</button>
                  <button onClick={() => filterPrice('$$$')} type='button' className='border border-brightOrange text-white hover:bg-brightOrange hover:scale-105 duration-300 ease-in-out rounded-full mx-2 text-lg px-3 py-1 font-vollkorn'>$$$</button>
                  <button onClick={() => filterPrice('$$$$')} type='button' className='border border-brightOrange text-white hover:bg-brightOrange hover:scale-105 duration-300 ease-in-out rounded-full mx-2 text-lg px-3 py-1 font-vollkorn'>$$$$</button>
               </div>
            </div>
         </div>
         {/* Display Foods */}
         <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8'>
            {foods.map((items, index) => (
               <div key={index} className='rounded-xl border shadow-md shadow-gray-200 bg-offWhite hover:scale-105 duration-300 ease-in-out'>
                  <img className='rounded-t-xl w-full h-[250px] object-cover' src={items.image} alt={items.name} />
                  <div className='flex justify-between px-6 py-4'>
                     <p className='font-bold text-black text-xl font-vollkorn'>{items.name}</p>
                     <p>
                        <span className='bg-brightOrange text-white rounded-full px-3 font-semibold font-vollkorn tracking-wider'>{items.price}</span>
                     </p>
                  </div>
               </div>
            ))}
         </div>
      </div>
   )
}

export default Foods