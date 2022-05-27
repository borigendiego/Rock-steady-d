import React from 'react';
import styles from './banner.module.scss';
import Header from '../header';

const Banner = () => {
    return(
        <div className={`flex flex-col sm:justify-start sm:px-12 sm:pt-2 sm:max-h-screen h-screen ${styles.background} overflow-hidden`}>
            <Header />
            <div className={'flex flex-col items-center flex-grow justify-center w-full md:w-[32rem] m-auto header-banner md:px-0 px-2'}>
                <span className={'flex w-full justify-between'}>
                    <img src={'/assets/images/star_2.png'} className={'object-contain w-16'} />
                    <h3 className={'text-center empty-font text-[2rem]  '}>OUR CREATIVE</h3>
                    <img src={'/assets/images/star_2.png'} className={'object-contain w-16 rotate-180'} />
                </span>
                <h1 className={'text-center empty-font text-[3rem] md:text-[4.8rem] banner-letters'}>SOLUTIONS</h1>
                <h1 className={'text-center text-[5rem] md:text-[10.4rem] opacity-[0.7] tracking-[-10px] banner-letters md:-mt-10 md:-ml-3 md:-mb-5'}>ROCK</h1>
                <h3 className={'text-center text-[1rem] bg-[#ffffffa8] text-black rounded-xl py-1 px-6 w-full'}>
                    Digital Consulting •  Blockchain • Metaverse
                </h3>
                <img src={'/assets/images/star_3_crop.png'} className={'mt-6 w-20 h-8 object-fill'} />
            </div>
        </div>
    )
};

export default Banner;