import React from 'react';
import { ABOUT_TEXT } from './constants';
import styles from './about.module.scss';

const About = () => {
    return(
        <div className={`${styles.background}`}>
            <a href='/' className='float-right relative right-16 top-8 text-lg'>&#9735; GO BACK TO HOME PAGE</a>
            <div className={`flex h-screen`}>
                <div className='w-1/2 flex flex-col items-center relative justify-center pt-32'>
                    <img alt='My photo' src='/assets/images/KAM_PHOTO2.png' className='w-2/3'/>
                    <div className={`${styles.tile} p-6 w-7/12 rounded-md relative bottom-1/4 left-16`}>
                        <p className=''>Digital Transformation Leader - Agile Program Delivery</p>
                        <p className='font-italic italic'>“I value freedom and equality and want to build a sustainable
                            world for our future generations through emerging digital
                            technologies and cultural change”.</p>
                    </div>
                </div>
                <div className='w-1/2 flex flex-col justify-center pr-18'>
                    <h2 className='empty-font text-4xl'>ABOUT ME</h2>
                    <p className='pt-6 opacity-50'>{ABOUT_TEXT}</p>
                </div>
            </div>
        </div>
    )
}

export default About;