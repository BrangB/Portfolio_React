import React from 'react'

//import image
import bgImage from '../assets/img/banner-woman2.webp'

const Hero = () => {
  return (
    <section id='home' className='lg:h-[95vh] flex items-center bg-primary lg:bg-cover lg:bg-no-repeat lg:bg-center py-32 lg:py-0 overflow-hidden'>
        <div className='container mx-auto h-full'>
            <div className='flex items-center justify-center h-full pt-8'>
                {/* left side */}
                <div className='flex flex1 flex-col items-center lg:items-start'>
                    <p className='text-lg mb-[22px] text-accent'>Hi, I'm Brang</p>
                    <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:7xl lg:leading-[1.2] fontbold md:tracking-[-2px]'>I Build & Design <br/> Web Interfaces</h1>
                    <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eligendi quo voluptatibus voluptatem tempora nobi.</p>
                    <button className='btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all'>Work with me</button>
                </div>
                {/* right side  */}
                <div className='hidden lg:flex flex-1 justify-end items-end h-full'>
                    <img src={bgImage} alt="" />
                </div>

            </div>
        </div>
    </section>
  )
}

export default Hero