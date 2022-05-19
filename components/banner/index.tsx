import React from 'react';
import styles from './banner.module.scss';
import Header from '../header';

const Banner = () => {
    return(
        <div className={`flex flex-col sm:justify-start sm:px-12 sm:pt-2 sm:max-h-screen h-screen ${styles.background} overflow-hidden`}>
            <Header />
            <div className={'flex flex-col items-center flex-grow justify-center w-[32rem] m-auto'}>
                <span className={'flex w-full justify-between'}>
                    <img src={'/assets/images/star_2.png'} className={'object-contain w-16'} />
                    <h3 className={'text-center empty-font text-[2rem]  '}>OUR CREATIVE</h3>
                    <img src={'/assets/images/star_2.png'} className={'object-contain w-16 rotate-180'} />
                </span>
                <h1 className={'text-center empty-font text-[4.8rem] banner-letters'}>SOLUTIONS</h1>
                <h1 className={'text-center text-[10.4rem] opacity-[0.7] tracking-[-10px] banner-letters -mt-10 -ml-3 -mb-5'}>ROCK</h1>
                <h3 className={'text-center text-[1rem] bg-[#ffffffa8] text-black rounded-xl py-1 px-6 w-full'}>
                    Digital Consulting •  Blockchain • Metaverse • DeFi
                </h3>
                <img src={'/assets/images/star_3_crop.png'} className={'mt-6 w-20 h-8 object-fill'} />
            </div>
            <img src={'/assets/images/star_3.png'} className={'hidden w-full sm:m-auto sm:relative sm:bottom-12 sm:h-auto h-96 mt-12'} />
        </div>
    )
};

export default Banner;