import React from 'react'

import { motion } from 'framer-motion'


//motion
const circleVariants = {
    hidden: {
      scale: 0
    },
    visible:{
      scale: 1,
    }
  }

const Project = ({item}) => {
  return (
    <motion.div variants={circleVariants} initial="hidden" animate="visible" key={item.id} className='flex flex-col items-center text-center w-[300px] md:w-[250px] lg:-[300px]'>
        <div className='mb-8'>
            <img className='rounded-2xl' src={item.image} alt="" />
        </div>
        <p className='capitalize text-sm text-accent mb-4'>{item.category}</p>
        <h2 className='text-2xl font-semibold mb-3 capitalize'>{item.name}</h2>
    </motion.div>
  )
}

export default Project