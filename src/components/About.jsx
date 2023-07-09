import React from 'react'


//import image
import image from '../assets/img/about.webp'

const About = () => {
  return (
    <section id='about' className='section bg-secondary'>
        <div className='container mx-auto'>
            <div className="flex flex-col xl:flex-row gap-24">
                <img className='object-cover h-full w-[480px] md:mx-auto lg:mx-0 rounded-2xl' src={image} alt="" />
                <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
                    <div className='flex flex-col'>
                        <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about before:absolute relative before:-top-[2rem] before:opacity-40 before:hidden before:lg:block'>
                            Brang Tsawm Aung
                        </h2>
                        <p className='text-accent mb-4 '>Freelance Web Developer</p>
                        <hr className='mb-8 opacity-5'/>
                        <p className='mb-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio aspernatur tempore, rerum expedita quod veniam ipsa? Quos ratione soluta corrupti. <br/> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, hic?</p>
                    </div>
                    <button className="btn btn-md bg-accent hover:bg-accent-hover transition-all">Contact Me</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About