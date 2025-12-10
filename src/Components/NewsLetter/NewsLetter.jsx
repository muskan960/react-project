import React from 'react'

function NewsLetter({darkMode}) {
    return (

        <div className='w-full pt-[150px] pb-[50px]'>
            <div className="lg:container mx-auto">
                <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-6 lg:gap-8">

                    {/* left side */}
                    <div className='w-full sm:w-[280px] md:w-[350px] lg:w-[450px] min-h-[400px] md:min-h-[500px] lg:min-h-[600px]'>
                        <img className="w-full h-full object-cover rounded-lg" src="/src/assets/img1.png" alt="" />
                    </div>

                    {/* middle side */}
                    <div className={`flex flex-col items-center lg:items-start gap-4 sm:gap-5 w-full sm:max-w-[400px] md:max-w-[500px] lg:max-w-[550px] p-6 sm:p-8 shadow-2xl rounded-xl ${darkMode ? 'bg-black' : 'bg-gray-200'}`}>
                        <h1 className={`text-2xl sm:text-3xl lg:text-4xl capitalize font-bold text-center ml-3 ${darkMode ? 'text-white' : 'text-[#484848]'}`}>
                            Subscribe To our Newsletter
                        </h1>
                        <p className={`text-sm sm:text-base lg:text-base font-normal max-w-[100%] w-full text-center mb-3 font-sans ${darkMode ? 'text-white' : 'text-[#8a8a8a]'}`}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, doloribus! Amet, temporibus, delectus iure optio. Perfect for any occasion.
                        </p>
                        <form className='w-full flex flex-col gap-3 sm:gap-4 mb-3'>
                            <input className={`w-full h-[48px] sm:h-[56px] rounded-sm shadow pl-3 mb-3 outline-none ${darkMode ? 'bg-[#8f8f8f] text-white' : 'bg-[#d9d9d9] text-white'}`} type="text" placeholder='demo@gmail.com' />
                            <button className={`text-lg sm:text-xl capitalize font-normal font-sans px-6 sm:px-8 py-2.5 rounded-lg max-w-[207px] w-full h-[50px] sm:h-[56px] flex items-center justify-center text-center cursor-pointer mx-auto ${darkMode ? 'bg-[#8f8f8f] text-white' : 'bg-black text-white'}`} type="submit">
                                Subscribe
                            </button>
                        </form>
                    </div>

                    {/* right side */}
                    <div className='w-full sm:w-[250px] md:w-[300px] lg:w-[350px] min-h-[400px] md:min-h-[500px] lg:min-h-[600px]'>
                        <img className="w-full h-full object-cover rounded-lg" src="/src/assets/girl.png" alt="" />
                    </div>

                </div>
            </div>
        </div>




    )
}

export default NewsLetter