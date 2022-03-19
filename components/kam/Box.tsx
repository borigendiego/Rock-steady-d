import React from 'react';
import styles from './box.module.scss';
import Router from 'next/router';

const Box = ({image, title, text}) => {
    return(
        <div className={`${styles.box} flex flex-col justify-center relative`}>
            <div>
                <img alt='profile picture' src={image} className={'z-20 relative'} />
            </div>
            <div className={`${styles.overlay} flex flex-col sm:pb-6 sm:px-4 sm:pt-14 -mt-2 relative z-10`}>
                <h2 className='text-center text-lg'>{title}</h2>
                <p className='text-center py-4 opacity-50'>{text}</p>
                <button 
                className='py-2 px-12 my-0 mx-auto'
                onClick={() => Router.push('/about')}
                >
                    Get to know me</button>
            </div>
        </div>
    )
};

export default Box;