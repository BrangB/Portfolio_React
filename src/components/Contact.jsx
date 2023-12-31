import React from 'react'

//import data
import { contact } from '../data'

const Contact = () => {
  return (
    <section className='bg-primary section' id='contact'>
        <div className='container mx-auto'>
            <div className='flex flex-col items-center text-center'>
                <h2 className='section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block'>Contact Me</h2>
                <p className='subtitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus vitae consequuntur illum veritatis accusamus consectetur sequi maiores! Doloremque, aut voluptates.</p>
            </div>
            <div className='flex flex-col lg:gap-x-8 lg:flex-row'>
                <div className='flex flex-col items-start space-y-8 flex-1 mb-12 lg:mb-0 lg:pt-2'>
                    {contact.map((item, index) => {

                        const {icon, title, subtitle, description} = item;
                        return(
                            <div className='flex flex-col lg:flex-row gap-x-4' key={index}>
                                <div className='text-accent rounded-sm flex items-start justify-center w-14 h-14 mt-2 mb-4 lg:mb-0 text-2xl'>{icon}</div>
                                <div>
                                    <h4 className='font-body text-xl mb-1'>{title}</h4>
                                    <p className='mb-1'>{subtitle}</p>
                                    <p className='font-normal text-accent'>{description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <form className='w-full max-w-[780px] space-y-8'>
                    <div className='flex gap-8'>
                        <input type="text" className='input' placeholder='Your Name' />
                        <input type="email" className='input' placeholder='Your Email' />
                    </div>
                    <input type="text" className='input' placeholder='Subject' />
                    <textarea className='textarea' placeholder='Your Message'></textarea>
                    <button className='btn btn-lg bg-accent hover:bg-accent-hover'>Send Message</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact