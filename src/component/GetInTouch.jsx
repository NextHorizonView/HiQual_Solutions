import React from 'react'
import LogoImg from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const GetInTouch = () => {
    return (
        <div>
            <div className='flex flex-col items-center w-full gap-5 p-5 bg-white rounded-xl sm:p-8 md:p-16'>
                <img src={LogoImg} className='mt-5 scale-75 ' />
                <p className='text-base font-bold text-center sm:w-[70%] sm:text-2xl md:text-4xl'><span className='text-[#898989]'>HiQual Solutions,</span> a tech solution provider <span className='text-[#898989]'>in Mumbai.</span></p>
                <p className='text-[#5B5B5B] text-sm text-center sm:w-[70%] sm:text-lg md:text-xl'>Mumbai-based tech innovators crafting bespoke software, mobile apps, CRM systems, and websites. Empowering businesses with cutting-edge digital solutions.</p>
            </div>

            <div className='flex items-center justify-center gap-2 py-2 mt-2 bg-white rounded-2xl'>
                <p className='font-semibold text-[#A1A1A1] text-xs sm:text-lg md:text-xl'>Get In Touch</p>
                <div className='px-3 py-[2px] border-[1px] border-[#898989] rounded-full text-xs sm:text-base md:text-lg  flex justify-center items-center'>
                    <FontAwesomeIcon color='#898989' icon={faArrowRight} />
                </div>
            </div>
        </div>
    )
}

export default GetInTouch