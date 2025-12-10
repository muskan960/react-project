
import React from 'react'
import { Link } from 'react-router-dom'
import { HandHeart, Award, Truck, Phone } from "lucide-react";


function Blinder({ darkMode }) {
  return (
    <div className={`w-full py-16  p-15 mt-5 ${darkMode ? 'bg-[#555555]' : 'bg-gray-50'}`}>
      <div className='lg:container mx-auto px-4'>
        <div className='flex flex-col lg:flex-row gap-12 items-center lg:items-stretch'>

          {/* Left Side - Image */}
          <div className="w-full lg:w-1/2">
            <img
              className='w-full h-full lg:h-[570px] object-cover rounded-2xl shadow-lg'
              src="/src/assets/blinder.jpeg"
              alt="Blinder"
            />
          </div>

          {/* Right Side - Content */}
          <div className={`w-full lg:w-1/2  p-10 lg:p-12 rounded-2xl shadow-md flex flex-col items-center lg:items-start h-[570px] ${darkMode ? 'bg-black' : 'bg-[#eaeaea]'}`}>

            {/* Add padding at top so text is not touching top */}
            <div className='space-y-5 w-full text-center lg:text-left mt-16'>
              <span className={`text-sm font-medium font-sans uppercase tracking-widest ${darkMode ? 'text-white' : 'text-gray-400'}`} >Women Collections</span>

              <h3 className={`text-4xl sm:text-5xl lg:text-5xl font-extrabold font-serif leading-snug tracking-tight ${darkMode ? 'text-white' : 'text-gray-900'}`} >
                Peaky Blinders
              </h3>



              <p className={`text-base text-sm font-sans leading-relaxed ${darkMode ? 'text-white' : 'text-gray-600'}`}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, doloribus! Amet, temporibus, delectus iure optio. Perfect for any occasion.
              </p>

              <div className='flex flex-col  gap-4 justify-center lg:justify-start'>
                <p className={`text-base font-sans font-semibold ${darkMode ? 'text-white' : 'text-gray-700'}`}>
                  Size: <span className={`inline-block px-3 py-1 rounded-md ${darkMode ? 'text-white' : 'text-black'}`}>M</span>
                </p>
                <p className={`text-xl  sm:text-2xl font-bold  ${darkMode ? 'text-white' : 'text-gray-900'}`} >$1000.00</p>
              </div>
            </div>

            {/* Buy Button - just below text */}
            <div className='mt-6 flex justify-center lg:justify-start w-full'>
              <Link
                to='/shop'
                className={`inline-block font-sans text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition ${darkMode ? 'bg-[#8f8d8d]' : 'bg-black'}`}
              >
                Buy Now
              </Link>
            </div>

          </div>

        </div>
        {/* button wrapper */}
<div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-5">

<div className='flex items-center gap-3'>
  <button><HandHeart size={'1.3rem'} color='black' fill='black'/></button>
  <div>
    <h4 className={`text-lg sm:text-xl font-serif font-bold capitalize mb-1 ${darkMode ? 'text-black' : 'text-[#484848]'}`}>
      High Quality
    </h4>
    <span className={`text-sm sm:text-base font-bold ${darkMode ? 'text-black' : 'text-[#484848]'}`}>
      Certified top material
    </span>
  </div>
</div>

<div className='flex items-center gap-3'>
  <button><Award size={'1.3rem'} color='black' fill='black'/></button>
  <div>
    <h4 className={`text-lg sm:text-xl font-serif font-bold capitalize mb-1 ${darkMode ? 'text-black' : 'text-[#484848]'}`}>
      Warranty
    </h4>
    <span className={`text-sm sm:text-base font-bold ${darkMode ? 'text-black' : 'text-[#484848]'}`}>
      Over 2 years
    </span>
  </div>
</div>

<div className='flex items-center gap-3'>
  <button><Truck size={'1.3rem'} color='black' fill='black'/></button>
  <div>
    <h4 className={`text-lg sm:text-xl font-serif font-bold capitalize mb-1 ${darkMode ? 'text-black' : 'text-[#484848]'}`}>
      Free Shipping
    </h4>
    <span className={`text-sm sm:text-base font-bold ${darkMode ? 'text-black' : 'text-[#484848]'}`}>
      Order over $150
    </span>
  </div>
</div>

<div className='flex items-center gap-3'>
  <button><Phone size={'1.3rem'} color='black' fill='black'/></button>
  <div>
    <h4 className={`text-lg sm:text-xl font-serif font-bold capitalize mb-1 ${darkMode ? 'text-black' : 'text-[#484848]'}`}>
      24/7 Support
    </h4>
    <span className={`text-sm sm:text-base font-bold ${darkMode ? 'text-black' : 'text-[#484848]'}`}>
      Dedicated Support
    </span>
  </div>
</div>

</div>


      </div>

    </div>

  )
}

export default Blinder



