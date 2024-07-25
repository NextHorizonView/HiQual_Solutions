import React from 'react'
import logoImg from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faSun } from '@fortawesome/free-solid-svg-icons'
import bulletImg from '../assets/bullet.png'
import reactImg from '../assets/react.png'
import nodeImg from '../assets/node.png'
import mongoImg from '../assets/mongo.png'
import nextImg from '../assets/next.png'
import appImg from '../assets/mobile-preview.png'
import webImg from '../assets/web-2.png'

const AboutLg = ({ scrollToElement }) => {
    return (
        <div className='flex w-full h-full gap-24 min-w-[200vw]'>
            <div className='grid w-full grid-rows-2 gap-8 '>
                <div className='flex flex-shrink-0 w-full h-full gap-6'>
                    <div className='w-[36%] h-full bg-white p-12 rounded-[50px]'>
                        <p className='text-4xl font-bold text-left'>HiQual <span className='text-[#898989] text-5xl'><br />Solutions</span></p>
                    </div>
                    <div className='w-[28%] h-full bg-white flex justify-center items-center p-10 rounded-[50px]'>
                        <img src={logoImg} />
                    </div>
                    <div className='flex flex-col w-[36%] justify-between bg-white rounded-[50px] py-4 pr-8 pl-8'>
                        <div>
                            <FontAwesomeIcon icon={faSun} />
                            <p className='font-semibold text-[#333333] text-xl'>Mumbai-based tech service provider  specializes in software, app, CRM, and website development.</p>
                        </div>
                        <div className='flex justify-between mt-16'>
                            <p className='text-[#A1A1A1] font-semibold text-xl'>All Products</p>
                            <div className='px-2 border-[1px] border-[#898989] rounded-full text-xs sm:text-lg md:text-xl flex justify-center items-center'>
                                <FontAwesomeIcon color='#898989' icon={faArrowRight} />
                            </div>
                        </div>
                    </div>

                </div>

                <div className='flex flex-shrink-0 w-full h-full gap-6'>
                    <div className='w-[36%] h-full flex gap-8 flex-col bg-white bg-no-repeat bg-center bg-cover  rounded-[50px] relative group hover:bg-opacity-5' style={{ backgroundImage: `url(${appImg})`, }}>
                        <div className='absolute top-0 bottom-0 left-0 right-0 rounded-[50px] flex items-center justify-center gap-2 opacity-0 bg-black/60 group-hover:opacity-100 transition-all duration-500 ease-in-out'>
                            <div className='flex flex-col items-center transition-all duration-500 ease-in-out translate-y-8 group-hover:translate-y-0'>
                                <p className='inline-block text-2xl font-bold text-center text-white'>Mobile App</p>
                                <div className='flex items-center justify-center p-2 text-base bg-white rounded-full cursor-pointer w-fit' onClick={() => scrollToElement('mobile-projects')}>
                                    <FontAwesomeIcon color='#000000' icon={faArrowRight} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[36%] h-full flex gap-8 flex-col bg-white bg-no-repeat bg-center bg-cover  rounded-[50px] relative group hover:bg-opacity-5' style={{ backgroundImage: `url(${webImg})`, }}>
                        <div className='absolute top-0 bottom-0 left-0 right-0 rounded-[50px] flex items-center justify-center gap-2 opacity-0 bg-black/60 group-hover:opacity-100 transition-all duration-500 ease-in-out'>
                            <div className='flex flex-col items-center transition-all duration-500 ease-in-out translate-y-8 group-hover:translate-y-0'>
                                <p className='inline-block text-2xl font-bold text-center text-white'>Website Projects</p>
                                <div className='flex items-center justify-center p-2 text-base bg-white rounded-full cursor-pointer w-fit' onClick={() => scrollToElement('website-projects')}>
                                    <FontAwesomeIcon color='#000000' icon={faArrowRight} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col w-[28%] justify-between bg-white rounded-[50px] py-4 pr-8 pl-8'>
                        <p className='text-xl font-medium sm:text-xl md:text-2xl'>See my latest <br /><span className='text-[#898989]'>work</span></p>
                        <div className='flex justify-between mt-16'>
                            <p className='text-[#A1A1A1] font-semibold text-xl'>All Products</p>
                            <div className='px-2 border-[1px] border-[#898989] rounded-full text-xs sm:text-lg md:text-xl flex justify-center items-center'>
                                <FontAwesomeIcon color='#898989' icon={faArrowRight} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid w-full grid-rows-2 gap-8'>
                <div className='flex flex-shrink-0 w-full h-full gap-6'>
                    <div className='grid grid-cols-2 gap-4 p-8 xl:pl-16 w-[37%] bg-white rounded-[50px]'>
                        <div className='flex flex-col'>
                            <p className='font-bold text-left sm:w-[70%] text-4xl xl:text-6xl'>2<span className='text-[#898989]'>+</span></p>
                            <p className='text-xs text-[#A1A1A1]'>Years Of Experience</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-bold text-left sm:w-[70%] text-4xl xl:text-6xl'>30<span className='text-[#898989]'>+</span></p>
                            <p className='text-xs text-[#A1A1A1]'>Clients served</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-bold text-left sm:w-[70%] text-4xl xl:text-6xl'>4.9<span className='text-[#898989]'>+</span></p>
                            <p className='text-xs text-[#A1A1A1]'>Average Rating</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-bold text-left sm:w-[70%] text-4xl xl:text-6xl'>15</p>
                            <p className='text-xs text-[#A1A1A1]'>Case studies</p>
                        </div>
                    </div>
                    <div className='w-[26%] p-4 bg-white rounded-[50px]'>
                        <p className='font-medium text-left w-[70%] text-4xl 2xl:text-5xl'>What<span className='text-[#898989] text-xl sm:text-3xl  md:text-5xl'> I do</span></p>
                        <div className='flex flex-col justify-between gap-2 mt-6'>
                            <p className='text-[#A1A1A1] font-bold flex items-center text-xl'><span className='mr-1 font-black text-black '><img src={bulletImg} className='' /></span>CRM Solutions</p>
                            <p className=' text-[#A1A1A1] font-bold flex items-center sm:text-sm md:text-xl'><span className='text-[8px] text-black font-black mr-1'><img src={bulletImg} className='' /></span>App Development</p>
                            <p className=' text-[#A1A1A1] font-bold flex items-center sm:text-sm md:text-xl'><span className='text-[8px] text-black font-black mr-1'><img src={bulletImg} className='' /></span>Website Development</p>
                            <p className=' text-[#A1A1A1] font-bold flex items-center sm:text-sm md:text-xl'><span className='text-[8px] text-black font-black mr-1'><img src={bulletImg} className='' /></span>Software Solutions</p>
                        </div>
                    </div>
                    <div className='flex flex-col w-[36%] justify-between py-4 bg-white rounded-[50px] sm:py-6 sm:pr-6 md:pr-8 md:pl-8 px-7'>
                        <p className='text-4xl font-medium 2xl:text-5xl'>Tools <span className='text-[#898989]'>I use</span></p>
                        <div className='flex flex-wrap gap-4 mt-6 sm:gap-12 md:gap-16 sm:mt-12 md:mt-20'>
                            <img className='sm:scale-125 md:scale-150' src={mongoImg} alt='mongodb' />
                            <img className='sm:scale-125 md:scale-150' src={reactImg} alt='react' />
                            <img className='sm:scale-125 md:scale-150' src={nodeImg} alt='node' />
                            <img className='sm:scale-125 md:scale-150' src={nextImg} alt='next' />
                        </div>
                    </div>
                </div>
                <div className='flex flex-shrink-0 w-full h-full gap-6'>
                    <div className='w-[50%] flex flex-col justify-between py-4 pr-4 bg-white rounded-[50px] sm:py-6 sm:pr-6 md:pr-8 md:pl-8 pl-7'>
                        <p className='font-medium text-left w-[70%] text-4xl 2xl:text-5xl'>Let's Work <span className='text-[#898989]'>Together</span></p>
                        <div className='flex justify-between mt-16'>
                            <p className='text-[#A1A1A1] font-semibold text-3xl 2xl:text-4xl'>Get In Touch</p>
                            <div className='px-2 border-[1px] border-[#898989] rounded-full text-2xl flex justify-center items-center'>
                                <FontAwesomeIcon color='#898989' icon={faArrowRight} />
                            </div>
                        </div>
                    </div>
                    <div className='w-[50%] flex flex-col justify-between py-4 pr-4 bg-white rounded-[50px] sm:py-6 sm:pr-6 md:pr-8 md:pl-8 pl-7'>
                        <p className='font-medium text-left w-[70%] text-4xl 2xl:text-5xl'>Services <span className='text-[#898989]'>I Offer</span></p>
                        <div className='flex justify-between mt-16'>
                            <p className='text-[#A1A1A1] font-semibold text-3xl 2xl:text-4xl'>All Projects</p>
                            <div className='px-2 border-[1px] border-[#898989] rounded-full text-2xl flex justify-center items-center'>
                                <FontAwesomeIcon color='#898989' icon={faArrowRight} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutLg