import React from 'react'
import LogoImg from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import instaIcon from '../assets/insta.svg'
import linkedInIcon from '../assets/linkedin.svg'
import twitterIcon from '../assets/twitter.svg'
import wwwIcon from '../assets/www.svg'

const GetInTouchLg = () => {
    return (
        <div className='min-w-[80vw] h-full flex flex-col justify-between'>
            <div className='flex flex-col items-center w-full h-full gap-4 3xl:gap-8 p-16 bg-white rounded-[50px]'>
                <img src={LogoImg} className='scale-75 3xl:scale-90 4xl:scale-100' />
                <p className='font-bold text-center w-[70%] text-4xl 3xl:text-5xl 4xl:text-6xl'><span className='text-[#898989]'>HiQual Solutions,</span> a tech solution provider <span className='text-[#898989]'>in Mumbai.</span></p>
                <p className='text-[#5B5B5B] text-center w-[70%] text-xl 3xl:text-2xl 4xl:text-3xl'>Mumbai-based tech innovators crafting bespoke software, mobile apps, CRM systems, and websites. Empowering businesses with cutting-edge digital solutions.</p>
                <div className='flex gap-4 2xl:gap-6 3xl:gap-8'>
                    <a target="_blank" href='https://www.instagram.com/hiqualsolutions/'><img src={instaIcon} className='3xl:scale-125 4xl:scale-150' /></a>
                    <a target="_blank" href='https://www.linkedin.com/in/mohammadanaschougle/'><img className='3xl:scale-125 4xl:scale-150' src={linkedInIcon} /></a>
                    {/* <a><img src={twitterIcon} /></a> */}
                    <a target="_blank" href='mohammadanas@hiqualsolutions.com'><img className='3xl:scale-125 4xl:scale-150' src={wwwIcon} /></a>
                </div>
            </div>

            <div className='flex items-center justify-center gap-2 py-4 mt-4 bg-white rounded-full xl:py-8'>
                <p className='font-semibold text-[#A1A1A1] text-xl 3xl:text-2xl 4xl:text-3xl'>Get In Touch</p>
                <div className='px-3 py-[2px] border-[1px] border-[#898989] rounded-full text-xs sm:text-base md:text-lg  flex justify-center items-center'>
                    <FontAwesomeIcon color='#898989' icon={faArrowRight} />
                </div>
            </div>
        </div>
    )
}

export default GetInTouchLg