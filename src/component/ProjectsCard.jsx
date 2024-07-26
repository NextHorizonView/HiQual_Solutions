import React from 'react'

const ProjectsCard = ({ img, description, name }) => {
    return (
        <div className='flex flex-col items-center w-full bg-white rounded-2xl lg:min-w-[400px] lg:justify-end lg:rounded-[40px]'>
            <div className='flex flex-col h-full'>
                <img className='object-cover h-full rounded-lg lg:rounded-[40px]' src={img} alt={name} />
                <p className='px-6 mt-2 text-lg font-medium text-left sm:text-xl md:text-2xl'>{name}</p>
                <p className='text-sm px-6 text-[#5B5B5B] text-left sm:w-[70%] sm:text-base md:text-lg'>{description}</p>
            </div>
        </div>
    )
}

export default ProjectsCard