import React from 'react'

//import data
import { brands } from '../data'

const Brands = () => {
  return (
    <section className='min-h-[146px] bg-tertiary flex items-center'>
        <div className='flex justify-evenly items-center md:justify-between mx-auto flex-wrap container'>
            {brands.map((brand, index) => {
                return (
                    <div key={index}>
                        <img src={brand.img} alt="" />
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default Brands