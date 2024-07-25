import React from 'react'
import LogoImg from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const GetInTouchLg = () => {
    return (
        <div className='min-w-[80vw] h-full flex flex-col justify-between'>
            <div className='flex flex-col items-center w-full h-full gap-8 p-16 bg-white rounded-[50px]'>
                <img src={LogoImg} className='mt-5 scale-90 xl:scale-100' />
                <p className='font-bold text-center w-[70%] text-4xl'><span className='text-[#898989]'>HiQual Solutions,</span> a tech solution provider <span className='text-[#898989]'>in Mumbai.</span></p>
                <p className='text-[#5B5B5B] text-center w-[70%] text-xl'>Mumbai-based tech innovators crafting bespoke software, mobile apps, CRM systems, and websites. Empowering businesses with cutting-edge digital solutions.</p>
            </div>

            <div className='flex items-center justify-center gap-2 py-4 mt-4 bg-white rounded-full xl:py-8'>
                <p className='font-semibold text-[#A1A1A1] text-2xl'>Get In Touch</p>
                <div className='px-3 py-[2px] border-[1px] border-[#898989] rounded-full text-xs sm:text-base md:text-lg  flex justify-center items-center'>
                    <FontAwesomeIcon color='#898989' icon={faArrowRight} />
                </div>
            </div>
        </div>
    )
}

export default GetInTouchLg