import React from 'react';
//
import styles from './start.module.scss';

const Start = () => {
    return(
        <div className={`flex justify-center flex-col my-0 mx-auto items-center`}>
            <h2 className={`${styles.title} text-5xl leading-10 text-center mb-8`}>
                Digital Disruption through
            </h2>
            <h2 className={`${styles.title} text-5xl leading-10 text-center mb-8`}>
                Blockchain Technology
            </h2>
            <p className={`${styles.text} p-4 text-center w-6/12 text-gray-400`}>
                {'Between 1990 and 2000 the internt grew 63% per year. Crypto & Blockchain is growing 113% per year and increasing exponentially. It is fastest growing technology in recorded human history.'}
            </p>
            <a className={'my-4 text-2xl w-fit'} href={'/digital-disruption'}>Read more</a>
        </div>
    )
};

export default Start;