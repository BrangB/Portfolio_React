import React, { useState, useEffect } from 'react'

//import project data
import { projectsData } from '../data'

//import project nav data
import { projectsNav } from '../data'
import Project from './Project'

const Projects = () => {

    const [item, setItem] = useState({name: 'all'})
    const [proejcts, setProjects] = useState([])
    const [active, setActive] = useState(0)
    
    useEffect(() => {
        if(item.name === 'all'){
            setProjects(projectsData)
        }else{
            const newProjects = projectsData.filter(project => {
                return project.category.toLowerCase() === item.name;
            })
            setProjects(newProjects)
        }
    }, [item])
    
    const handlerClick = (e, index) => {
        setItem({name : e.target.textContent.toLowerCase()})
        setActive(index)
    }

  return (
    <div className='container flex flex-col items-center'>
        <nav className='mb-12 max-w-xl mx-auto'>
            <ul className='flex flex-col md:flex-row justify-evenly items-center text-white'>
                {projectsNav.map((item, index) => {
                    return (
                        <li onClick={(e) => handlerClick(e,index)} key={index} className={`${active === index ? "active" : ''} cursor-pointer capitalize m-4`}>
                            {item.name}
                        </li>
                    )
                })}
            </ul>
        </nav>
        {/* product grid item  */}
        <section className='grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-6 lg:gap-x-8 lg:gap-y-6 place-items-center'>
            {proejcts.map(item => {
                return <Project item={item} key={item.id} />
            })}
        </section>
    </div>
  )
}

export default Projects