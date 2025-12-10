import React from 'react'
import { Link } from 'react-router-dom'
function Banner({ darkMode }) {
    return (
        <div className="w-full pt-[70px] px-6 ">
            <div className="lg:max-w-[1200px] mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    <div
                        className={`w-full sm:max-w-[400px] md:w-[350px] min-h-[350px] sm:min-h-[600px] rounded-lg overflow-hidden flex items-center justify-center ${darkMode ? 'bg-black' : 'bg-[#e0e0e0]'}`}>
                        <img src="/src/assets/banner1.png"
                            alt="Left Banner"
                            className="w-full h-full object-cover"
                        />
                    </div>
            
                    <div className="flex flex-col items-baseline justify-center" style={{ height: '590px' }}>

                 
                        <div className='max-w-[426px] min-h-[150px] w-full object-cover'>
                            <img src="/src/assets/banner4.png" alt="" className='w-full h-full object-cover' />
                        </div>

                  
                        <div className="text-center flex flex-col items-center mt-4 mb-4">
                            <h3 className={`text-[#484848] text-[92px] font-sans font-medium uppercase leading-[1] ${darkMode ? 'text-black' : 'text-[#484848]'}`}>
                                Ultimate<br />
                                <span className='text-white text-stroke text-[180px]'>Sale</span>
                            </h3>
                            <p className={`text-[#484848] text-xl font-bold font-sans uppercase mb-5 ${darkMode ? 'text-black' : 'text-[#484848]'}`}>New Collection</p>
                            <Link to={''} className='text-white font-sans font-medium px-6 py-2.5  bg-black rounded-lg inline-block'>
                                Shop Now
                            </Link>
                        </div>

                    </div>

                    <div className={`w-full sm:max-w-[400px] md:w-[350px] min-h-[350px] sm:min-h-[600px] bg-[#e0e0e0] rounded-lg overflow-hidden flex items-center justify-center ${darkMode ? 'bg-black' : 'bg-[#e0e0e0]'}`}>
                        <img
                            src="/src/assets/banner2.png"
                            alt="Right Banner"
                            className="w-full h-full object-cover"
                        />
                    </div>

                </div>
            </div>
        </div>


    )
}

export default Banner 





