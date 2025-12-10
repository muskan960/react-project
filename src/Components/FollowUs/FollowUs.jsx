import React from 'react'

function FollowUs({darkMode}) {
    const followers = [
        {
            id: 1,
            image: "/src/assets/blind8.png",
            width: "256",
            height: "308",
        },
        {
            id: 2,
            image: "/src/assets/blind2.png",
            width: "256",
            height: "380",
        },
        {
            id: 3,
            image: "/src/assets/blind.png",
            width: "256",
            height: "308",
        },
        {
            id: 4,
            image: "/src/assets/blind7.png",
            width: "256",
            height: "380",
        },
        {
            id: 5,
            image: "/src/assets/drese11.png",
            width: "256",
            height: "308",
        },
        {
            id: 6,
            image: "/src/assets/blind3.png",
            width: "256",
            height: "380",
        },
        {
            id: 7,
            image: "/src/assets/blind9.png",
            width: "256",
            height: "308",
        },
    ]
    return (
        <div>

            <div className='w-full flex flex-col items-center mb-[80px] px-4 text-center mt-5'>
                <h3 className={`text-4xl sm:text-5xl lg:text-5xl font-serif font-semibold capitalize mb-4 sm:mb-5 leading-snug ${darkMode ? 'text-black' : 'text-[#484848]'}`}>
                    Follow Us On Instagram
                </h3>
                <p className={`text-sm sm:text-base font-sans font-normal max-w-[614px] w-full leading-relaxed ${darkMode ? 'text-black' : 'text-[#8a8a8a]'}`}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, doloribus! Amet, temporibus, delectus iure optio. Perfect for any occasion.
                </p>
            </div>

            <div className="flex items-center gap-1 justify-center">
                {followers?.map((follower) => (
                    <div
                        key={follower?.id}
                        style={{
                            width: `${follower?.width}px`,
                            height: `${follower?.height}px`,
                        }}
                        className={`flex items-center justify-center rounded-lg  overflow-hidden
                 sm:w-[200px] sm:h-[240px]
                 md:w-[220px] md:h-[280px]
                 lg:w-[256px] lg:h-[308px] ${darkMode ? 'bg-black' : 'bg-gray-200'}`}
                    >
                        <img
                            src={follower?.image}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default FollowUs