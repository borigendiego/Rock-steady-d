import React from 'react';
import styles from './banner.module.scss';
import Header from '../header';

const Banner = () => {
    return(
        <div className={`flex flex-col sm:px-12 sm:pt-2 sm:max-h-screen h-screen ${styles.background}`}>
            <Header />
            <img src={'/assets/images/banner-text.png'} className={'w- w-11/12 sm:m-auto relative bottom-12'} />
        </div>
    )
};

export default Banner;