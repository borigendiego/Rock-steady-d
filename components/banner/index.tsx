import React from 'react';
import styles from './banner.module.scss';
import Header from '../header';

const Banner = () => {
    return(
        <div className={`flex flex-col sm:justify-start sm:px-12 sm:pt-2 sm:max-h-screen h-screen ${styles.background} overflow-hidden`}>
            <Header />
            <div className={'flex flex-col items-center margin-auto flex-grow justify-center'}>
                <span className={'flex'}>
                    <img src={'/assets/images/star_2.png'} className={'object-contain w-16 mr-7'} />
                    <h3 className={'text-center empty-font text-[2rem] opacity-[0.7]'}>OUR CREATIVE</h3>
                    <img src={'/assets/images/star_2.png'} className={'object-contain w-16 ml-7 rotate-180'} />
                </span>
                <h1 className={'text-center empty-font text-[4.7rem] opacity-[0.7]'}>SOLUTIONS</h1>
                <h1 className={'text-center text-[10rem] opacity-[0.7]'}>ROCK</h1>
                <h3 className={'text-center text-[1rem] bg-[#ffffffa8] text-black rounded-lg py-1 px-6'}>
                    Digital Consulting •  Blockchain • Metaverse • DeFi
                </h3>
                <img src={'/assets/images/star_3_crop.png'} className={'mt-6 w-20 h-8 object-fill'} />
            </div>
            <img src={'/assets/images/star_3.png'} className={'hidden w-full sm:m-auto sm:relative sm:bottom-12 sm:h-auto h-96 mt-12'} />
        </div>
    )
};

export default Banner;