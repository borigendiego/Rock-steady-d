import React from 'react';
import { ABOUT_TEXT, COMPANIES } from './constants';
import styles from './about.module.scss';
import Link from 'next/link';

const About = () => {
    return(
        <div className={`${styles.background}`}>
            <a href='/' className='float-right relative right-16 top-8 text-lg'>&#9735; GO BACK TO HOME PAGE</a>
            <div className={`flex h-screen`}>
                <div className='w-1/2 flex flex-col items-center relative justify-center pt-32'>
                    <img alt='My photo' src='/assets/images/KAM_PHOTO2.png' className='w-2/3'/>
                    <div className={`${styles.tile} py-6 px-8 w-3/5 rounded-md relative bottom-1/4 left-10`}>
                        <p className=''>Digital Transformation Leader - Agile Program Delivery</p>
                        <p className='font-italic italic mt-2 opacity-70'>“I value freedom and equality and want to build a sustainable
                            world for our future generations through emerging digital
                            technologies and cultural change”.</p>
                        <a className='bg-none pt-4 float-right' href=''><img alt='Linked In icon' src='/assets/images/about/Vector.png'/></a>
                    </div>
                </div>
                <div className='w-1/2 flex flex-col justify-center pl-8'>
                    <h2 className='empty-font text-4xl'>ABOUT ME</h2>
                    <p className='pt-6 opacity-50 w-5/6'>{ABOUT_TEXT}</p>
                    <div className='flex my-12 items-center'>
                        {COMPANIES.map((value, index) => 
                        <a href={value.url} className={'bg-none pr-6'}><img key={index} src={value.image} className='w-24'/></a>
                        )}
                    </div>
                    <div className='w-full'>
                        <Link href={'/#CONTACT'}>
                            <button className={'w-1/4 px-3 py-4 float-right'}>Contact me</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;