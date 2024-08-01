import React from 'react'
import logoImg from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faSun } from '@fortawesome/free-solid-svg-icons'
import bulletImg from '../assets/bullet.png'
import reactImg from '../assets/reactjs.svg'
import nodeImg from '../assets/nodejs.svg'
import mongoImg from '../assets/mongo.svg'
import nextImg from '../assets/nextjs.svg'
import appImg from '../assets/mobile-app-3.png'
import webImg from '../assets/web-2.png'
import { motion } from "framer-motion"

const AboutLg = ({ scrollToElement }) => {
    return (
        <div className='flex w-full h-full gap-10 min-w-[200vw]'>
            <div className='grid w-full grid-rows-2 gap-8 '>
                <div className='flex flex-shrink-0 w-full h-full gap-6'>
                    <div className='w-[36%] h-full bg-white p-12 rounded-[50px]'>
                        <motion.p
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className='text-4xl font-bold text-left 3xl:text-5xl 4xl:text-6xl'>IT <span className='text-[#898989] text-5xl'><br />Services</span></motion.p>
                    </div>
                    <div className='w-[28%] h-full bg-white flex justify-center items-center p-10 rounded-[50px]'>
                        <motion.img initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} src={logoImg} />
                    </div>
                    <div className='flex flex-col w-[36%] justify-between bg-white rounded-[50px] py-4 3xl:py-6  4xl:py-8 pr-8 pl-8'>
                        <div>
                            <FontAwesomeIcon className='text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl' icon={faSun} />
                            <p className='font-semibold text-[#333333] text-xl 2xl:text-2xl 3xl:text-3xl mt-2'>Mumbai-based tech service provider  specializes in software, app, CRM, and website development.</p>
                        </div>
                        <div className='flex justify-between mt-16'>
                            <p className='text-[#A1A1A1] font-semibold text-3xl 2xl:text-4xl'>About Me</p>
                            <div onClick={() => scrollToElement('get-in-touch-lg')} className='border-[1px] border-[#898989] cursor-pointer rounded-full text-xl flex justify-center items-center h-8 w-8'>
                                <FontAwesomeIcon color='#898989' icon={faArrowRight} />
                            </div>
                        </div>
                    </div>

                </div>

                <div className='flex flex-shrink-0 w-full h-full gap-6'>
                    <div className='w-[36%] h-full flex gap-8 flex-col bg-white bg-no-repeat bg-center bg-cover  rounded-[50px] relative group hover:bg-opacity-5' style={{ backgroundImage: `url(${appImg})`, }}>
                        <div className='absolute top-0 bottom-0 left-0 right-0 rounded-[50px] flex items-center justify-center gap-2 opacity-0 bg-black/60 group-hover:opacity-100 transition-all duration-500 ease-in-out'>
                            <div className='flex flex-col items-center transition-all duration-500 ease-in-out translate-y-8 group-hover:translate-y-0'>
                                <p className='inline-block text-xl font-bold text-center text-white 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl'>Mobile App</p>
                                <div className='flex items-center justify-center p-2 text-base bg-white rounded-full cursor-pointer w-fit' onClick={() => scrollToElement('mobile-projects')}>
                                    <FontAwesomeIcon color='#000000' icon={faArrowRight} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[36%] h-full flex gap-8 flex-col bg-white bg-no-repeat bg-center bg-cover  rounded-[50px] relative group hover:bg-opacity-5' style={{ backgroundImage: `url(${webImg})`, }}>
                        <div className='absolute top-0 bottom-0 left-0 right-0 rounded-[50px] flex items-center justify-center gap-2 opacity-0 bg-black/60 group-hover:opacity-100 transition-all duration-500 ease-in-out'>
                            <div className='flex flex-col items-center transition-all duration-500 ease-in-out translate-y-8 group-hover:translate-y-0'>
                                <p className='inline-block text-xl font-bold text-center text-white 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl'>Website Projects</p>
                                <div className='flex items-center justify-center p-2 text-base bg-white rounded-full cursor-pointer w-fit' onClick={() => scrollToElement('website-projects')}>
                                    <FontAwesomeIcon color='#000000' icon={faArrowRight} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col w-[28%] justify-between bg-white rounded-[50px] py-4 3xl:py-6  4xl:py-8 pr-8 pl-8'>
                        <motion.p
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className='text-4xl font-medium 3xl:text-5xl 4xl:text-6xl'>See my latest <br /><span className='text-[#898989]'>work</span></motion.p>
                        <div className='flex items-center justify-between mt-16'>
                            <p className='text-[#A1A1A1] font-semibold text-3xl 2xl:text-4xl'>All Projects</p>
                            <div onClick={() => scrollToElement('mobile-projects')} className='border-[1px] cursor-pointer p-3 border-[#898989] rounded-full text-xl flex justify-center items-center h-8 w-8'>
                                <FontAwesomeIcon className='text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl' color='#898989' icon={faArrowRight} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid w-full grid-rows-2 gap-8'>
                <div className='flex flex-shrink-0 w-full h-full gap-6'>
                    <div className='grid grid-cols-2 gap-4 py-4 3xl:py-6  4xl:py-8 pr-8 pl-8 w-[50%] bg-white rounded-[50px]'>
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className='flex flex-col'>
                            <p className='font-bold text-left w-[70%] text-6xl 2xl:text-[4rem] 3xl:text-[5rem]'>2<span className='text-[#898989]'>+</span></p>
                            <p className='text-xs xl:text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl text-[#A1A1A1]'>Years Of Experience</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className='flex flex-col'>
                            <p className='font-bold text-left sm:w-[70%] text-6xl 2xl:text-[4rem] 3xl:text-[5rem]'>30<span className='text-[#898989]'>+</span></p>
                            <p className='text-xs xl:text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl text-[#A1A1A1]'>Clients served</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className='flex flex-col'>
                            <p className='font-bold text-left sm:w-[70%] text-6xl 2xl:text-[4rem] 3xl:text-[5rem]'>4.9<span className='text-[#898989]'>+</span></p>
                            <p className='text-xs xl:text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl text-[#A1A1A1]'>Average Rating</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className='flex flex-col'>
                            <p className='font-bold text-left sm:w-[70%] text-6xl 2xl:text-[4rem] 3xl:text-[5rem]'>15</p>
                            <p className='text-xs xl:text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl text-[#A1A1A1]'>Case studies</p>
                        </motion.div>
                    </div>
                    <div className='w-[50%] py-4 3xl:py-6  4xl:py-8 pr-8 pl-8 bg-white rounded-[50px]'>
                        <motion.p
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className='font-medium text-left w-[70%] text-4xl 3xl:text-5xl 4xl:text-6xl'>What<span className='text-[#898989]'> I do</span></motion.p>
                        <div className='flex flex-col justify-between gap-2 mt-6 2xl:mt-8 2xl:gap-3 3xl:gap-4'>
                            <motion.p
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: '-10px' }}
                                transition={{ duration: 0.5 }}
                                className='text-[#A1A1A1] font-bold flex items-center text-lg 2xl:text-2xl'><span className='mr-5 text-black font-black tracking-[-17px] arrow'>&gt;&gt;</span>CRM Solutions</motion.p>
                            <motion.p
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: '-10px' }}
                                transition={{ duration: 0.5 }}
                                className=' text-[#A1A1A1] font-bold flex items-center text-lg 2xl:text-2xl'><span className='mr-5 text-black font-black tracking-[-17px] arrow'>&gt;&gt;</span>App Development</motion.p>
                            <motion.p
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: '-10px' }}
                                transition={{ duration: 0.5 }}
                                className=' text-[#A1A1A1] font-bold flex items-center text-lg 2xl:text-2xl'><span className='mr-5 text-black font-black tracking-[-17px] arrow'>&gt;&gt;</span>Website Development</motion.p>
                            <motion.p
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: '-10px' }}
                                transition={{ duration: 0.5 }}
                                className=' text-[#A1A1A1] font-bold flex items-center text-lg 2xl:text-2xl'><span className='mr-5 text-black font-black tracking-[-17px] arrow'>&gt;&gt;</span>Software Solutions</motion.p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-shrink-0 w-full h-full gap-6'>
                    <div className='w-[50%] flex flex-col justify-between bg-white rounded-[50px] py-4 3xl:py-6  4xl:py-8 pr-8 pl-8'>
                        <motion.p
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className='font-medium text-left w-[70%] text-4xl 3xl:text-5xl 4xl:text-6xl'>Let's Work <span className='text-[#898989]'>Together</span></motion.p>
                        <div className='flex justify-between mt-16'>
                            <p className='text-[#A1A1A1] font-semibold text-3xl 2xl:text-4xl'>Get In Touch</p>
                            <div className='border-[1px] border-[#898989] rounded-full text-xl  h-8 w-8'>
                                <a target='_blank' className='flex items-center justify-center w-full h-full' href='https://calendly.com/chougleanas32/targeted-growth-marketing-web-development'><FontAwesomeIcon color='#898989' icon={faArrowRight} /></a>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col w-[50%] justify-between py-4 3xl:py-6  4xl:py-8 pr-8 pl-8 bg-white rounded-[50px]'>
                        <motion.p
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className='text-4xl font-medium 3xl:text-5xl 4xl:text-6xl '>Tools <span className='text-[#898989]'>I use</span></motion.p>
                        <div className='flex flex-wrap items-center gap-8'>
                            <motion.img
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className='h-16 2xl:h-20 4xl:h-24' src={mongoImg} alt='mongodb' />
                            <motion.img
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className='h-12 4xl:h-20' src={reactImg} alt='react' />
                            <motion.img
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                className='h-16 2xl:h-20 4xl:h-24' src={nodeImg} alt='node' />
                            <motion.img
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.9 }}
                                className='h-12 4xl:h-20' src={nextImg} alt='next' />
                        </div>
                    </div>
                    {/* <div className='w-[50%] flex flex-col justify-between bg-white rounded-[50px] py-4 3xl:py-6  4xl:py-8 pr-8 pl-8'>
                        <p className='font-medium text-left w-[70%] text-4xl 3xl:text-5xl 4xl:text-6xl'>Services <span className='text-[#898989]'>I Offer</span></p>
                        <div className='flex justify-between mt-16'>
                            <p className='text-[#A1A1A1] font-semibold text-3xl 2xl:text-4xl'>All Projects</p>
                            <div className='px-2 border-[1px] border-[#898989] rounded-full text-2xl flex justify-center items-center'>
                                <FontAwesomeIcon color='#898989' icon={faArrowRight} />
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default AboutLg