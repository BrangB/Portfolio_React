import React from 'react'

//import data
import { testimonials } from '../data'

//import swiper
import 'swiper/css';
import 'swiper/css/pagination'
import '../swiper.css'

import {Swiper, SwiperSlide} from 'swiper/react'

import {Autoplay, Pagination} from 'swiper'

const TestimonialSlider = () => {
  return (
    <>
        <Swiper pagination={{clickable: true}} autoplay={{delay: 2500, disableOnInteraction: false}} modules={[Autoplay, Pagination]} className='mySwiper w-[85%]'>
            {testimonials.map((item, index) => {
                const {authorImg, authorText, authorName, authorPosition} = item
                return <SwiperSlide key={index}> 
                    <div className='flex flex-col lg:flex-row gap-12 lg:gap-32 '>
                        <div className='w-48 h-48 lg:w-[600px] lg:h-[328px] '>
                            <img src={authorImg} className='rounded-xl' alt="" />
                        </div>
                        <div className='flex flex-col max-w-2xl'>
                            <h5 className='font-body font-normal text-2xl mb-8 italic'>{authorText}</h5>
                            <div>
                                <p className='text-accent text-lg'>{authorName}</p>
                                <p>{authorPosition}</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            })}
        </Swiper>
    </>
  )
}

export default TestimonialSlider