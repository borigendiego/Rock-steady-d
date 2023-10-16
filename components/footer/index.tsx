import React from 'react';
import { MENU_LINKS } from '../header/constants';
//framer
import {motion} from "framer-motion";

const Footer = () => {
    return(
        <div className={`sm:pt-8 lg:px-32`}>
            <motion.div
                className={'flex sm:pt-0 pt-8 lg:flex-row justify-center flex-wrap'}
                initial={{opacity: 0, x: 30}}
                whileInView={{opacity: 1, x: 0}}
                viewport={{ once: true }}
                transition={{duration: 0.7, delay: 0.5}}
            >
                <div className={'sm:w-1/5 w-1/2 lg:w-1/3 lg:px-12 flex flex-col items-center sm:items-start'}>
                    <img alt={'contact logo'} src={'/assets/images/logo_white.svg'} className='sm:w-9/12 w-full'/>
                </div>
                <nav className={'flex lg:w-1/3 items-center flex-wrap'}>
                    <a className={'sm:flex hidden w-fit h-1/4 mx-4'} href={'#HOW'}>Discover</a>
                    <a className={'sm:flex hidden w-fit h-1/4 mx-4'} href={'#HOW'}>Design</a>
                    <a className={'sm:flex hidden w-fit h-1/4 mx-4'} href={'#HOW'}>Develop</a>
                    <a className={'sm:flex hidden w-fit h-1/4 mx-4'} href={'#HOW'}>Deploy</a>
                    <a className={'sm:flex hidden w-fit h-1/4 mx-4'} href={'#HOW'}>Manteinance</a>
                </nav>
            </motion.div>
            <motion.p
                className={'sm:mt-4 sm:pt-4 sm:pb-4 text-center text-gray-400 py-6 px-2'}
                initial={{opacity: 0, }}
                whileInView={{opacity: 1}}
                viewport={{ once: true }}
                transition={{duration: 1, delay: .7}}
            >
                Leaders in digital transformation from strategy to implementation through transformation of people, process and technology.
            </motion.p>
            <motion.p
                initial={{opacity: 0, y: -30}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 1, delay: .7}}
                className='py-4 text-center text-gray-400 mt-4'
            >
                <a href="https://www.thehipposoft.com/" target='_blank' rel='noreferrer' className='text-gray-400'>Created by <span className='text-white'>HippoSoft</span> | All Right Reserved</a>
          </motion.p>
        </div>
    )
};

export default Footer;