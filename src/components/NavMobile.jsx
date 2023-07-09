import React, { useState } from 'react'

//import data
import { navigation } from '../data'

//impor icon
import {HiMenuAlt3, HiOutlineX} from "react-icons/hi"

//import farmer motion
import {motion} from 'framer-motion'

//import components
import Socials from './Socials'

//import reactScrool
import { Link } from 'react-scroll'

const NavMobile = () => {

  const [opened, setOpened] = useState(false)

  //set framer motion variants

  const circleVariants = {
    hidden: {
      scale: 0
    },
    visible:{
      scale: 180,
      transition :{
        type: "spring",
        stiffness: 160,
        damping: 60
      },
    }
  }

  const ulVariants = {
    hidden: {
      opacity: 0
    },
    visible:{
      opacity: 1,
      transition:{
        delay: 0.1
      }
    }
  }


  return (
    <nav className='relative'>
      {/* menu icon  */}
      <div className='cursor-pointer text-white'>
        <HiMenuAlt3 onClick={() => setOpened(true)}  className='w-8 h-8' />
      </div>

      {/* circle  */}
      <motion.div variants={circleVariants} initial="hidden" animate={opened ? "visible" : "hidden"} className='w-4 h-4 rounded-full fixed bg-accent top-0 right-0'></motion.div>

      {/* menu  */}
      <motion.ul variants={ulVariants} initial='hidden' animate={opened? "visible": "hidden"} className={`${opened ? "right-0" : "-right-full"} fixed top-0 bottom-0 w-full flex flex-col items-center justify-center transition-all duration-300 overflow-hidden`}>
        {/* menu icon  */}
        <div className='absolute cursor-pointer top-8 right-8' onClick={() => setOpened(false)}>
          <HiOutlineX className='w-8 h-8'/>
        </div>
        {navigation.map((item, index) => {
          return (
            <li className='mb-5 uppercase' key={index}>
              <Link onClick={() => setOpened(false)} to={item.href} smooth={true} duration={500} offset={-70} className='sm:text-lg md:text-xl cursor-pointer'>{item.name}</Link>
            </li>
          )
        })}
      </motion.ul>
    </nav>
  )
}

export default NavMobile