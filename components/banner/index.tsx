import React from 'react';
import styles from './banner.module.scss';
import Header from '../header';

const Banner = () => {
    return(
        <div className={`flex flex-col sm:justify-start sm:px-12 sm:pt-2 sm:max-h-screen h-screen ${styles.background}`}>
            <Header />
            <img src={'/assets/images/solutions_letras.png'} className={'w-full sm:m-auto sm:relative sm:bottom-12 sm:h-auto h-96 mt-12'} />
        </div>
    )
};

export default Banner;