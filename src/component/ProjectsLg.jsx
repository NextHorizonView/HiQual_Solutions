import React from 'react'
import ProjectsCard from './ProjectsCard'
import { appData, webData } from '../lib/ProjectsData'

const ProjectsLg = () => {
    return (
        <div className='flex items-end h-full'>
            <p className='text-[100px] font-medium' id='mobile-projects'>Mobile <br /><span className='text-[#8C8C8C]'>Applications</span></p>
            <div className='flex h-full gap-4 ml-8' >
                {appData.map((data, index) => (<ProjectsCard type='app' id={data.id} key={index} name={data.name} img={data.img1} description={data.description} />))}
            </div>
            <p className='text-[75px] font-medium ml-20' id='website-projects'>Website <br /><span className='text-[#8C8C8C] text-[100px]'>Projects</span></p>
            <div className='flex h-full gap-4 ml-8' >
                {webData.map((data, index) => (<ProjectsCard type='web' id={data.id} key={index} name={data.name} img={data.img1} description={data.description} />))}
            </div>
        </div>
    )
}

export default ProjectsLg