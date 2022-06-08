import React from 'react';
import styles from './box.module.scss';
import Router from 'next/router';
import Image from 'next/image';

const Box = ({image, title, text}) => {
    return(
        <div className={`${styles.box} flex flex-col justify-center relative mt-10 sm:mt-0`}>
            <Image 
                alt={'profile picture'}
                src={image} 
                className={'z-20 relative rounded-t-md'}
                width={500}
                height={270}
            />
            <div className={`${styles.overlay} flex flex-col pt-6 sm:pb-6 sm:px-4 sm:pt-14 -mt-2 relative z-10`}>
                <h2 className='text-center text-lg sm:px-0 px-2'>{title}</h2>
                <p className='text-center py-4 opacity-50 sm:px-0 px-6'>{text}</p>
                <button 
                    className='py-2 px-12 sm:my-0 mb-4 mx-auto'
                    onClick={() => Router.push('/about')}
                >
                    Get to know me
                </button>
            </div>
        </div>
    )
};

export default Box;