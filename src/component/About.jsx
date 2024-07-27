import React from 'react'
import logoImg from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faSun } from '@fortawesome/free-solid-svg-icons'
import bulletImg from '../assets/bullet.png'
import reactImg from '../assets/reactjs.svg'
import nodeImg from '../assets/nodejs.svg'
import mongoImg from '../assets/mongo.svg'
import nextImg from '../assets/nextjs.svg'

const About = ({ scrollToElement }) => {
    return (
        <div className='w-full'>
            <div className='grid grid-cols-1 gap-3'>
                <div className='flex gap-4'>
                    <div className='px-5 sm:px-8 pt-9 sm:pt-11 pb-11 sm:pb-14 mt-5 bg-white w-[125%] rounded-2xl'>
                        <p className='text-base font-bold text-left sm:w-[70%] sm:text-2xl md:text-4xl'>HiQual <span className='text-[#898989] text-xl sm:text-3xl  md:text-5xl'><br />Solutions</span></p>
                    </div>
                    <div className='flex items-center justify-center w-full px-5 mt-5 bg-white rounded-2xl'>
                        <img src={logoImg} className='sm:scale-75' />
                    </div>
                </div>

                <div className='py-4 pr-4 bg-white rounded-lg sm:py-6 sm:pr-6 md:pr-8 md:pl-8 pl-7'>
                    <FontAwesomeIcon icon={faSun} />
                    <p className='font-semibold text-[#333333] text-base sm:text-xl md:text-2xl'>Mumbai-based tech service provider  specializes in software, app, CRM, and website development.</p>
                    <div className='flex justify-between mt-8 sm:mt-14 md:mt-20'>
                        <p className='text-[#A1A1A1] text-lg font-semibold sm:text-xl md:text-2xl'>About Me</p>
                        <div className='px-2 border-[1px] border-[#898989] rounded-full text-xs sm:text-base flex justify-center items-center cursor-pointer' onClick={() => {
                            scrollToElement('get-in-touch-sm')
                            console.log('clicked')
                        }
                        }>
                            <FontAwesomeIcon color='#898989' icon={faArrowRight} />
                        </div>
                    </div>
                </div>

                <div className='flex flex-col justify-between py-4 pr-4 bg-white rounded-lg sm:py-6 sm:pr-6 md:pr-8 md:pl-8 pl-7'>
                    <p className='text-xl font-medium sm:text-xl md:text-2xl'>See my latest <br /><span className='text-[#898989]'>work</span></p>
                    <div className='flex justify-between mt-16'>
                        <p className='text-[#A1A1A1] text-lg font-semibold sm:text-xl md:text-2xl'>All Projects</p>
                        <div onClick={() => scrollToElement('projects-sm')} className='px-2 border-[1px] border-[#898989] rounded-full text-xs sm:text-base flex justify-center items-center'>
                            <FontAwesomeIcon color='#898989' icon={faArrowRight} />
                        </div>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 gap-3 mt-4'>
                <div className='flex gap-4'>
                    <div className='grid grid-cols-2 gap-4 p-4 w-[125%] bg-white rounded-2xl'>
                        <div className='flex flex-col'>
                            <p className='text-xl font-bold text-left sm:w-[70%] sm:text-2xl md:text-4xl'>2<span className='text-[#898989] text-xl sm:text-3xl  md:text-5xl'>+</span></p>
                            <p className='text-xs text-[#A1A1A1]'>Years Of Experience</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-xl font-bold text-left sm:w-[70%] sm:text-2xl md:text-4xl'>30<span className='text-[#898989] text-xl sm:text-3xl  md:text-5xl'>+</span></p>
                            <p className='text-xs text-[#A1A1A1]'>Clients served</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-xl font-bold text-left sm:w-[70%] sm:text-2xl md:text-4xl'>4.9<span className='text-[#898989] text-xl sm:text-3xl  md:text-5xl'>+</span></p>
                            <p className='text-xs text-[#A1A1A1]'>Average Rating</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-xl font-bold text-left sm:w-[70%] sm:text-2xl md:text-4xl'>15</p>
                            <p className='text-xs text-[#A1A1A1]'>Case studies</p>
                        </div>
                    </div>
                    <div className='w-full p-4 bg-white rounded-2xl'>
                        <p className='text-xl font-medium text-left sm:w-[70%] sm:text-2xl md:text-4xl'>What<span className='text-[#898989] text-xl sm:text-3xl  md:text-5xl'> I do</span></p>
                        <div className='flex flex-col gap-2 mt-3'>
                            <p className='text-xs text-[#A1A1A1] font-bold flex items-center sm:text-sm md:text-lg'><span className='mr-5 text-black font-black tracking-[-10px] arrow'>&gt;&gt;</span>CRM Solutions</p>
                            <p className='text-xs text-[#A1A1A1] font-bold flex items-center sm:text-sm md:text-lg'><span className='mr-5 text-black font-black tracking-[-10px] arrow'>&gt;&gt;</span>App Development</p>
                            <p className='text-xs text-[#A1A1A1] font-bold flex items-center sm:text-sm md:text-lg'><span className='mr-5 text-black font-black tracking-[-10px] arrow'>&gt;&gt;</span>Website Development</p>
                            <p className='text-xs text-[#A1A1A1] font-bold flex items-center sm:text-sm md:text-lg'><span className='mr-5 text-black font-black tracking-[-10px] arrow'>&gt;&gt;</span>Software Solutions</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-between py-4 bg-white rounded-lg sm:py-6 sm:pr-6 md:pr-8 md:pl-8 px-7'>
                    <p className='text-xl font-medium sm:text-xl md:text-2xl'>Tools <span className='text-[#898989]'>I use</span></p>
                    <div className='flex flex-wrap gap-4 mt-6 sm:gap-12 md:gap-16 sm:mt-12 md:mt-20'>
                        <img className='h-8 sm:h-10 md:h-12' src={mongoImg} alt='mongodb' />
                        <img className='h-6 sm:h-8 md:h-10' src={reactImg} alt='react' />
                        <img className='h-8 sm:h-10 md:h-12' src={nodeImg} alt='node' />
                        <img className='h-6 sm:h-8 md:h-10' src={nextImg} alt='next' />
                    </div>
                </div>
                <div className='flex flex-col justify-between py-4 pr-4 bg-white rounded-lg sm:py-6 sm:pr-6 md:pr-8 md:pl-8 pl-7'>
                    <p className='text-xl font-medium sm:text-xl md:text-2xl'>Let's Work <span className='text-[#898989]'>Together</span></p>
                    <div className='flex justify-between mt-16'>
                        <p className='text-[#A1A1A1] text-lg font-semibold sm:text-xl md:text-2xl'>Get In Touch</p>
                        <div className='px-2 border-[1px] border-[#898989] rounded-full text-xs sm:text-base flex justify-center items-center'>
                            <a target='_blank' className='flex items-center justify-center' href='https://calendly.com/chougleanas32/targeted-growth-marketing-web-development'><FontAwesomeIcon color='#898989' icon={faArrowRight} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About