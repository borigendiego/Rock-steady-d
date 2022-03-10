import React from 'react';
//
import styles from './start.module.scss';

const Start = () => {
    return(
        <div className={`${styles.background} flex justify-center bg-pink-900 flex-col my-0 mx-auto items-center`}>
            <h2 className={`${styles.title} text-5xl leading-10 text-center mb-8`}>Start
                and Build Your Crypto Portfolio</h2>
            <p className={`${styles.text} p-4 text-center w-6/12`}>Only at Rock Steady Digital, you can build a good
                portfolio with really low commission,
                maximum security,  and instant deposit.</p>
            <button className={`py-4 px-8 text-white m-10`}>Contact Us</button>
        </div>
    )
};

export default Start;