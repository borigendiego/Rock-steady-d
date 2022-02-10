import React from "react";
//
import styles from './banner.module.scss';
import Header from '../header';

const Banner = () => {
    return(
        <div className={`flex flex-col p-12 max-h-screen ${styles.background}`}>
            <Header />
            <img src={'/assets/images/banner-text.png'} className={'w-9/12 m-auto'} />
        </div>
    )
};

export default Banner;