import React from 'react';
import styles from './banner.module.scss';
import Header from '../header';
//Framer Motion
import {motion} from "framer-motion";


const Banner = () => {
    return(
        <div className={`flex flex-col sm:justify-start sm:px-12 sm:pt-2 sm:max-h-screen h-screen ${styles.background} overflow-hidden`}>
            <Header />
            <motion.div
                className={'flex flex-col items-center flex-grow justify-center w-[85%] md:w-[39rem] m-auto md:px-0 px-2'}
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{ once: true }}
                transition={{duration: 0.7, delay: 1.7}}
            >
                <span className={'flex w-full justify-between'}>
                    <img src={'/assets/images/star_2.png'} className={'object-contain w-10 md:w-16'} />
                    <h3 className={'text-center empty-font text-[1.5rem] md:text-[2rem]'}>OUR CREATIVE</h3>
                    <img src={'/assets/images/star_2.png'} className={'object-contain w-10 md:w-16 rotate-180'} />
                </span>
                <h1 className={'text-center empty-font text-[3rem] md:text-[4.8rem] banner-letters'}>SOLUTIONS</h1>
                <h1 className={'text-center text-[5rem] md:text-[10.4rem] tracking-[-10px] banner-letters -mt-5 md:-mt-10 md:-ml-3 md:-mb-8'}>ROCK</h1>
                <h3 className={'text-center text-[0.65rem] md:text-[1rem] bg-[#fff] text-black rounded-xl py-1 px-6 mb-2 md:mt-6'}>
                    DIGITAL TRANSFORMATION • DIGITAL MARKETING
                </h3>
                <h3 className={'text-center text-[0.65rem] md:text-[1rem] bg-[#fff] text-black rounded-xl py-1 px-6'}>
                    DATA ANALYTICS • SOCIAL MEDIA • E-COMMERCE • UX/UI
                </h3>    
                <img src={'/assets/images/star_3_crop.png'} className={'mt-6 w-20 h-8 object-fill'} />
            </motion.div>
        </div>
    )
};

export default Banner;