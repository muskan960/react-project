import React from 'react'

function Brand({ darkMode }) {
  return (
    <div className={`w-full min-h-[100px] pt-5 ${darkMode ? 'bg-[#555555]' : 'bg-white'}`}>
      <div className='lg:container mx-auto'>
        <div className="flex item-center justify-betweem gap-8  ">
 
          <div className='cursor-pointer'>
            <img src="/src/assets/jacuzi.png" alt="" />
          </div>

          <div className='cursor-pointer'>
            <img src="/src/assets/brsnd.png" alt="" />
          </div>
      
          <div className='cursor-pointer'>
            <img src="/src/assets/PRADA.png" alt="" />
          </div>

          <div className='cursor-pointer'>
            <img src="/src/assets/brang4.png" alt="" />
          </div>

          <div className='cursor-pointer'>
            <img src="/src/assets/imgr.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Brand


