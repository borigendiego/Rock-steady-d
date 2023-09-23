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
                <div className={'md:flex hidden items-center flex-wrap sm:pt-0 pt-8 lg:flex-row justify-center'}>
                    <a className={'flex w-fit h-1/4 mx-4 md:my-0 my-2'} href={'#DISCOVERY'}>DISCOVERY</a>
                    <a className={'flex w-fit h-1/4 mx-4 md:my-0 my-2'} href={'#INNOVATION'}>INNOVATION</a>
                    <a className={'flex w-fit h-1/4 mx-4 md:my-0 my-2'} href={'#DEVELOPMENT'}>DEVELOPMENT</a>
                    <a className={'flex w-fit h-1/4 mx-4 md:my-0 my-2'} href={'#ACTION'}>ACTION</a>
                    <a className={'flex w-fit h-1/4 mx-4 md:my-0 my-2'} href={'#GROW'}>GROW</a>
                </div>
                <ul className={'mt-10 flex md:hidden'}>
                    {
                        MENU_LINKS.map((link,index) =>
                            <a key={index} href={link.linkTo} className={`mx-4 text-white`}><li>{link.label}</li></a>
                        )
                    }
                </ul>
            </motion.div>
            <motion.p
                className={'sm:mt-4 sm:pt-8 sm:pb-20 text-center text-gray-400 py-6 px-2'}
                initial={{opacity: 0, }}
                whileInView={{opacity: 1}}
                viewport={{ once: true }}
                transition={{duration: 1, delay: .7}}
            >
                Leaders in digital transformation from strategy to implementation through transformation of people, process and technology.
            </motion.p>
        </div>
    )
};

export default Footer;