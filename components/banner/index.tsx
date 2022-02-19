import React from "react";
//
import styles from './banner.module.scss';
import Header from '../header';

const Banner = () => {
    return(
        <div className={`flex flex-col sm:p-12 sm:max-h-screen h-screen ${styles.background}`}>
            <Header />
            <img src={'/assets/images/banner-text.png'} className={'sm:w-9/12 w-full h-3/6 sm:m-auto'} />
        </div>
    )
};

export default Banner;