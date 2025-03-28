import React from 'react'
import { assets } from '../assets/assets'

const Fotter = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.logo} className='mb-5 w-32' alt="" /> 
                <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, quod veniam nesciunt cupiditate accusamus assumenda officia quasi neque esse est aliquam ea, voluptates nulla rerum possimus deleniti saepe tempora doloremque!</p>   
            </div> 
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>

                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                            <li>+91 987654321</li>
                            <li>Contact@Vishnu.com</li>
                </ul>
            </div>
        </div>

        <div >
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2025@ vishnu.com - All Right Reseved.</p>
        </div>

    </div>
  )
}

export default Fotter