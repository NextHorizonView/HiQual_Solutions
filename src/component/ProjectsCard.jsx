import React from 'react'

const ProjectsCard = ({ img, description, name }) => {
    return (
        <div className='flex flex-col items-center p-4 bg-white rounded-2xl'>
            <div>
                <img src={img} alt={name} />
                <p className='text-lg font-medium text-left sm:text-xl md:text-2xl'>{name}</p>
                <p className='text-sm text-[#5B5B5B] text-left sm:w-[70%] sm:text-base md:text-lg'>{description}</p>
            </div>
        </div>
    )
}

export default ProjectsCard