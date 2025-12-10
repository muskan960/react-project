
import React from 'react'
import { Link } from 'react-router-dom'


function Deal({ darkMode }) {
  const highlights = [
    { title: "Best Seller", subtitle: "Top pick of the month", img: "/src/assets/deal6.png" },
    { title: "Limited Offer", subtitle: "Grab before it's gone", img: "/src/assets/deal3.png" },
    { title: "New Arrival", subtitle: "Fresh deals this week", img: "/src/assets/deal2.png" },
  ]

  return (
    <div className="w-full min-h-[700px] p-6 sm:p-12">
      <div className="lg:container mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-12">

          <div className="w-full lg:max-w-[500px]">
            <h3 className={`text-[40px] sm:text-[50px] font-sans leading-tight text-[#222] font-semibold mb-3  ${darkMode ? 'text-black' : 'text-[#222]'}`}>
              Deals Of The Month
            </h3>

            <p className={`text-[#666] font-sans text-[16px] leading-relaxed mb-8 ${darkMode ? 'text-black' : 'text-[#666]'}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Iure accusantium consectetur, voluptate quidem ad molestiae
              soluta ratione maxime incidunt. Hic modi possimus perferendis
              quaerat pariatur deleniti cupiditate a eius asperiores.
            </p>

            <Link
              to="/deal"
              className="inline-block bg-black text-white px-7 py-3 font-sans rounded-md text-sm tracking-wide hover:bg-[#333] transition"
            >
              Buy Now
            </Link>

            <div className="mt-10">
              <h3 className={`text-lg font-semibold font-sans text-[#222] mb-4 ${darkMode ? 'text-black' : 'text-[#222]'}`}>
                Hurry, Before It's tOo Late
              </h3>

              <div className="flex items-center gap-4 flex-wrap">
                {["02", "06", "05", "02"].map((val, idx) => (
                  <div key={idx} className={`flex flex-col items-center ${darkMode ? 'bg-black' : 'bg-gray-100'} px-4 py-3 rounded-md`}>
                    <h5 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-[#555555]'}`}>{val}</h5>
                    <p className="text-sm font-sans font-bold text-gray-500">
                      {["Days", "Hr", "Mins", "Secs"][idx]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1">
         
          </div>

          <div className="w-full lg:max-w-[400px] flex flex-col gap-6">

            <h3 className={`text-3xl sm:text-4xl font-semibold ${darkMode ? 'text-black' : 'text-[#222]'}`}>
              Featured Highlights
            </h3>

            {highlights.map((item, idx) => (
              <div key={idx} className={`flex items-center gap-4 p-3 sm:p-4 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 ${darkMode ? 'bg-black' : 'bg-white'}`}>
                <img src={item.img} alt={item.title} className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg" />
                <div className="flex flex-col">
                  <h4 className={`text-base sm:text-lg font-semibold ${darkMode ? 'text-white' : 'text-[#222]'}`}>{item.title}</h4>
                  <p className={`text-xs sm:text-sm text-gray-500 ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>{item.subtitle}</p>
                </div>
              </div>
            ))}

            <Link to="/" className={`mt-4 inline-block text-center text-white py-2 px-6 rounded-lg font-semibold text-sm hover:scale-105 transition-transform duration-300 ${darkMode ? 'bg-black' : ' bg-gradient-to-r from-pink-500 to-orange-500'}`}>
              See All Deals
            </Link>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Deal
