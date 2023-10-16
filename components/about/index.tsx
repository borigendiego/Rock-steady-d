import React from 'react';
import { ABOUT_TEXT, COMPANIES } from './constants';
import Router from 'next/router';
import styles from './about.module.scss';
import Link from 'next/link';
//framer
import {motion} from "framer-motion";

const About = () => {
    return(
        <div className={`${styles.background} flex sm:flex-row flex-col sm:block`}>
            <motion.a
                href='/#ABOUT'
                className='sm:float-right sm:relative sm:right-16 sm:top-8 sm:text-lg sm:p-0 flex justify-center pt-4 md:pr-4 duration-300 hover:scale-105'
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{ once: true }}
                transition={{duration: 0.7, delay: 2}}
            >&#8617; GO BACK TO HOME PAGE</motion.a>
            <motion.div
                className={`sm:flex inline sm:h-screen h-full`}
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{ once: true }}
                transition={{duration: 0.7, delay: 1}}
            >
                <div className='sm:w-1/2 flex flex-col items-center relative justify-center pt-8 px-8 sm:pt-32'>
                    <img alt='My photo' src='/assets/images/KAM_PHOTO2.png' className='sm:w-2/3 w-full'/>
                    <div className={`${styles.tile} py-6 px-8 sm:w-3/5 w-[90%] rounded-md relative bottom-12 md:bottom-1/4 md:left-10`}>
                        <p className=''>Digital Transformation Leader - Agile Program Delivery</p>
                        <p className='font-italic italic mt-2 opacity-70'>“I value freedom and equality and want to build a sustainable
                            world for our future generations through emerging digital
                            technologies and cultural change”.</p>
                        <a
                            className='bg-none pt-4 float-right'
                            href='https://www.linkedin.com/in/kamleshlad/'
                            target="_blank"
                            rel="noopener noreferrer">
                            <img alt='Linked In icon' className={'w-[32px] duration-300 hover:scale-110'} src='/assets/images/about/linkedin.svg'/>
                        </a>
                    </div>
                </div>
                <motion.div
                    className='sm:w-1/2 flex flex-col justify-center items-center sm:items-start sm:pl-8 sm:mt-0'
                    initial={{opacity: 0, x: 15}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{ once: true }}
                    transition={{duration: 0.7, delay: 1.5}}
                >
                    <h2 className='empty-font text-4xl'>ABOUT ME</h2>
                    <p className='pt-6 opacity-50 w-5/6 text-center sm:text-left'>{ABOUT_TEXT}</p>
                    <div className='md:flex my-12 items-center grid grid-cols-2 gap-2 md:gap-0'>
                        {COMPANIES.map((value, index) => 
                        <a
                            href={value.url}
                            className={'bg-none pr-6 w-full duration-300 hover:scale-110'}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img key={index} src={value.image} className='w-24'/>
                        </a>
                        )}
                    </div>
                    <div className='w-full flex justify-center sm:block'>
                        <Link href={'/#CONTACT'}>
                            <button 
                            className={'sm:w-1/4 w-1/2 px-3 py-4 sm:float-right sm:m-0 mb-4'}
                            onClick={() => {
                                //window.localStorage.setItem('section', selectedSection);
                                Router.push('/#CONTACT')
                            }}
                        >   Contact me</button>
                        </Link>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default About;