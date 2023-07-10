import React, { useState, useEffect } from 'react'

import { Link, animateScroll as scroll } from 'react-scroll'
import { HiChevronUp } from "react-icons/hi";


const BackToTopBtn = () => {

    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            return window.scrollY > 600 ? setShow(true) : setShow(false)
        })
    }, [])

    const scrollToTop = () => {
        scroll.scrollToTop();
    }
    
  return (
    show && (
    <button onClick={scrollToTop} className={`flex w-12 h-12 bg-accent hover:bg-accent-hover text-white rounded-full fixed right-10 bottom-16 lg:right-20 lg:bottom-20 justify-center items-center cursor-pointer transition-all`}><HiChevronUp className='w-6 h-6'/></button>
    ))
}

export default BackToTopBtn