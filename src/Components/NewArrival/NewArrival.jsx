import React from 'react'
import { Star } from "lucide-react";

function NewArrival({darkMode}) {
  const newArrivalCategories = [
    {
      id: 1,
      name: "men's fasion",
      categories: "men"
    },
    {
      id: 2,
      name: "women fasion",
      categories: "women"
    },
    {
      id: 3,
      name: "women accessories",
      categories: "women_accessories"
    },
    {
      id: 4,
      name: "men accessories",
      categories: "men"
    },
    {
      id: 5,
      name: "discount deals",
      categories: "discount_deals"
    },


  ];
  const newArrivalProducts = [
    {
      id: 1,
      name: " shiny dress",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: 40,
      image: "/src/assets/new1.png",
      rating: 5,
      stoke: 10

    },
    {
      id: 2,
      name: " Long dress",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      price: 30,
      image: "/src/assets/imgh.png",
      rating: 4.5,
      stoke: 10

    },
    {
      id: 3,
      name: " Long KOat dress",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      price: 70,
      image: "/src/assets/new4.png",
      rating: 3.5,
      stoke: 10

    },
    {
      id: 4,
      name: " short switer",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: 60,
      image: "/src/assets/new3.png",
      rating: 4.5,
      stoke: 10

    },
    {
      id: 5,
      name: " color full dress",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      price: 50,
      image: "/src/assets/new2.png",
      rating: 5,
      stoke: 10

    },
    {
      id: 6,
      name: " short fork dress",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      price: 60,
      image: "/src/assets/deal6.png",
      rating: 4.5,
      stoke: 10

    },
  ]
  return (
    <div className='w-full  pt-[50px]'>
      <div className='lg-container mx-auto'>
  
        <div className="text-center mb-18">
          <h3 className={`text-3xl text-[40px] text-[#484848] font-sans font-bold capitalize mb-5 ${darkMode ? 'text-black' : 'text-[#484848]'}`}>New Arrival</h3>
          <p className={`text-base text-md  font-sans ${darkMode ? 'text-black' : 'text-[#8a8a8a]'}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className='flex items-center justify-center gap-10 mb-10'>
          {
            newArrivalCategories.map((category) => (
              <button className={`text-base text-[#8a8a8a] font-sans font-normal capitalize cursor-pointer ${category.id === 2 ?  'px-2 py-2.5 bg-black rounded-sm text-white' : `${darkMode ? 'text-black' : 'text-[#8a8a8a]'}`}`} key={category.id}>
                {category.name}
              </button>
            ))
          }
        </div>

 <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-10 p-4 sm:p-6 lg:p-12">
  {newArrivalProducts.map((product) => (
    <div
      key={product.id}
      className={`${darkMode ? 'bg-transparent border-none shadow-none' : 'bg-white border-gray-200 shadow-md'} 
        hover:shadow-xl transition-shadow p-5 rounded-lg`}
    >

      <div className={`w-full h-[200px] sm:h-[220px] lg:h-[240px] rounded-lg overflow-hidden flex items-center justify-center ${darkMode ? 'bg-black' : 'bg-gray-100'}`}>
        <img
          src={product.image}
          alt={product.name}
          className="max-w-full max-h-full object-contain"
        />
      </div>

      <div className="mt-4 space-y-2">
        <div>
          <h4 className={`text-lg font-semibold capitalize ${darkMode ? 'text-black' : 'text-gray-800'}`}>{product.name}</h4>
          <p className={`text-sm sm:text-md text-[#8a8a8a] leading-snug ${darkMode ? 'text-black' : 'text-[#8a8a8a]'}`}>{product.description}</p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(Math.ceil(product.rating))].map((_, index) => (
            <span key={index}>
              <Star size={14} className="fill-yellow-400 text-yellow-400" />
            </span>
          ))}
        </div>

        {/* Price & Stock */}
        <div className="flex items-center justify-between mt-3">
          <p className={`font-semibold text-lg ${darkMode ? 'text-black' : 'text-[#8a8a8a]'}`}>${product.price}</p>
          {product.stoke > 0 ? (
            <span className="text-xs text-red-500 font-semibold bg-red-100 px-2 py-1 rounded">Almost Sold Out</span>
          ) : (
            <span className="text-xs text-gray-600">{product.stoke}</span>
          )}
        </div>
      </div>
    </div>
  ))}
</div>
<div className=' flex items-center justify-center'>
  <button className='text-base text-white font-sans font-normal capitalize px-8 cursor-pointer py-2.5 bg-black rounded-md'>view more</button>
</div>

      </div>
    </div>
  

  )
}

export default NewArrival