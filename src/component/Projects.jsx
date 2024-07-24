import React from 'react'
import { appData, webData } from '../lib/ProjectsData'
import ProjectsCard from './ProjectsCard'

const Projects = () => {
    return (
        <div className='w-full'>
            <div className=''>
                <p className='ml-6 text-xl sm:text-2xl md:text-4xl font-medium text-[#141313]'>Mobile Applications</p>
                <div className='flex flex-col gap-4 mt-4'>
                    {appData.map((data, index) => (<ProjectsCard key={index} name={data.name} img={data.img} description={data.description} />))}
                </div>
            </div>

            <div className='mt-16'>
                <p className='ml-6 text-xl sm:text-2xl md:text-4xl font-medium text-[#141313]'>Website Projects</p>
                <div className='flex flex-col gap-4 mt-4'>
                    {webData.map((data, index) => (<ProjectsCard key={index} name={data.name} img={data.img} description={data.description} />))}
                </div>
            </div>
        </div>
    )
}

export default Projects