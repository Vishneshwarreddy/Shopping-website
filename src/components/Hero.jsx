import React from 'react'
import { assets } from '../assets/assets'
const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row  border border-gray-400'>
        {/*Hero Left Side justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700*/}
        <img className='w-full sm:w-1/2 flex ' src={assets.hero_img2} alt="" />
        
           {/*Hero Right Side */}
           <img className='w-full sm:w-1/2 flex ' src={assets.hero_img} alt="" />
           
    </div>
  )
}

export default Hero