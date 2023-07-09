import React from 'react'

//import components
import TestimonialSlider from './TestimonialSlider'

const Testimonials = () => {
  return (
    <section id='testimonials' className='section bg-secondary'>
        <div className="container mx-auto">
            <div className='flex flex-col items-center text-center'>
                <h2 className='section-title before:absolute relative before:opacity-40 before:hidden before:lg:block before:content-testimonials before:-top-[2rem] before:-left-64'>What other people say</h2>
                <p className='subtitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus assumenda et cumque explicabo cum voluptatibus iusto tempora quae necessitatibus sed?</p>
            </div>
            <TestimonialSlider />
        </div>
    </section>
  )
}

export default Testimonials