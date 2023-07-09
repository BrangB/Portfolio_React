import React from 'react'

//import data
import { social } from '../data'

const Socials = () => {
  return (
    <ul className='space-x-6 flex'>
        {social.map((item, index) => {
            return(
                <li className='flex items-center justify-center text-accent ' key={index}>
                    <a className='text-base' href={item.href}>{item.icon}</a>
                </li>
            )
        })}
    </ul>
  )
}

export default Socials