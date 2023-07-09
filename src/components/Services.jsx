import React from 'react'

//import data
import { services } from '../data'

const Services = () => {
  return (
    <section id='services' className='section bg-tertiary'>
        <div className='container mx-auto'>
            <div className='flex flex-col items-center text-center'>
                <h2 className='section-title before:content-services before:absolute relative before:opacity-40 before:hidden before:lg:block before:-top-[2rem] before:-left-28'>What I do for clients</h2>
                <p className='subtitle'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus odio dicta quos quam laborum debitis nulla veniam dolores cupiditate perspiciatis.</p>
            </div>
            {/* item grid */}
            <div className='grid lg:grid-cols-4 gap-8'>
                {services.map((service, index) => {
                    const {icon, name, description} = service
                    return (
                        <div className='bg-secondary rounded-2xl p-6' key={index}>
                            <div className='rounded-sm text-accent flex justify-center items-center mb-24 text-[28px] w-12 h-12'>
                                {icon}
                            </div>
                            <h2 className='text-xl font-medium mb-2'>{name}</h2>
                            <p>{description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Services