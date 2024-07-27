import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { webData, appData } from '../lib/ProjectsData';

const ProjectDetail = () => {
  const { type, id } = useParams();
  const [projectData, setProjectData] = useState(null);
  useEffect(() => {
    if (typeof Number(id) !== 'number') return;
    if (type === 'web') {
      const data = webData.find((data) => data.id === +id);
      if (data) setProjectData(data);
    } else if (type === 'app') {
      const data = appData.find((data) => data.id === +id);
      if (data) setProjectData(data);
    }
  }, [type, id])
  return (
    projectData ?
      <div className='flex flex-col w-full h-full px-[35px] py-[40px]  items-center bg-[#EDF2F6] gap-8'>
        <div className='flex flex-col w-full gap-8 lg:flex-row'>
          <div className='flex flex-col items-start justify-center w-full lg:w-[30%] px-4 py-8 bg-white rounded-lg'>
            <p className='text-[#3A3131] text-xl sm:text-2xl font-bold'>Projects</p>
            <div className='mt-6'>
              <p className='text-[#3A3131] text-lg sm:text-xl font-bold'>{projectData.name}</p>
              <p className='text-[#3A3131] font-medium text-lg sm:text-xl'>{projectData.description}</p>
            </div>
          </div>
          <div className='flex flex-col items-start w-full lg:w-[70%] px-4 py-8 bg-white rounded-lg'>
            <p className='text-[#3A3131] text-lg sm:text-xl font-bold'>Technologies used</p>
            <p className='text-[#3A3131] font-medium text-lg sm:text-xl'>{projectData.technologies}</p>
          </div>
        </div>
        <div className='flex flex-col gap-8 lg:flex-row'>
          <div className='flex flex-col gap-4 w-full lg:w-[30%]'>
            <div className='p-4 w-full flex justify-center bg-white rounded-[30px]'>
              <img className='object-contain rounded-[30px]' src={projectData.img1} />
            </div>
            <div className='p-4 w-full flex justify-center bg-white rounded-[30px]'>
              <img className='object-contain rounded-[30px]' src={projectData.img2} />
            </div>
          </div>
          <div className='flex flex-col items-start w-full lg:w-[70%] px-4 py-8 bg-white rounded-lg'>
            <p className='text-lg  2xl:text-xl 3xl:text-2xl font-normal text-[#8C8C8C]'>{projectData.para1}</p>
            <p className='mt-2 text-lg  2xl:text-xl 3xl:text-2xl font-normal text-[#8C8C8C]'>{projectData.para2}</p>
          </div>
        </div>
      </div>
      :
      <div>No data found</div>
  )
}

export default ProjectDetail