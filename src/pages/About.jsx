import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT '} text2={'US'} />

      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam id nisi quam harum aliquam, distinctio culpa veniam odit officiis animi! Enim nobis et eos libero alias autem vero itaque officia.Lorem</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sapiente optio cupiditate ullam inventore! Consequuntur unde facilis repellat ut, porro eveniet! Eligendi sint corrupti excepturi possimus, debitis veniam doloribus veritatis.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut culpa beatae error facilis totam magni temporibus, sunt corrupti magnam tenetur odit voluptates aperiam sed! Adipisci facilis sequi dolore unde libero!</p>
        </div>

      </div>
      <div className='text-4xl py-4'>
        <Title text1={'WHY '} text2={'CHOOSE US'} />

      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non voluptatem voluptate quas at sint ad rerum quia minus. Incidunt commodi beatae assumenda iste eligendi voluptatem quae aperiam earum aliquid libero?</p>

        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id explicabo consequuntur laborum obcaecati dolorem quo debitis recusandae itaque, commodi molestias tempora voluptatum doloribus placeat quia voluptatem! Vero obcaecati incidunt ad?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis earum saepe asperiores necessitatibus nihil sed corrupti natus recusandae. Rerum id delectus iusto officia, dolore corporis. Quod quasi aliquid animi minus?</p>
        </div>

      </div>
      <NewsletterBox />
    </div>
  )
}

export default About