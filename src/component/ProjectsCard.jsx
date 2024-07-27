import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion';

const ProjectsCard = ({ img, description, name, type, id }) => {
    const navigate = useNavigate();
    const onClickHandler = () => {
        navigate(`/projects/${type}/${id}`)
    }
    return (
        <div onClick={onClickHandler} className='flex flex-col items-center w-full bg-white rounded-2xl lg:min-w-[400px] lg:justify-end lg:rounded-[40px] cursor-pointer'>
            <div className='flex flex-col h-full'>
                <img className='object-cover w-full h-full rounded-lg lg:rounded-[40px]' src={img} alt={name} />
                <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-10px' }}
                    transition={{ duration: 0.5 }}
                    className='px-6 mt-2 text-lg font-medium text-left sm:text-xl md:text-2xl'>{name}</motion.p>
                <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-10px' }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className='text-sm px-6 text-[#5B5B5B] text-left sm:w-[70%] sm:text-base md:text-lg'>{description}</motion.p>
            </div>
        </div>
    )
}

export default ProjectsCard

// translate3d(-39.0073px, 0px, 0px);