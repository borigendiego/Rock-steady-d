import React from 'react';
import styles from './item.module.scss';

const Item = ({ itemData }) => {
    const {
        key,
        image,
        title,
        text,
    } = itemData;
    
    return(
        <div className={'flex flex-col sm:flex-row my-8 items-center sm:w-4/5'}>
            <div className={`p-1 h-14 w-14 mr-6 ${styles.imageDiv}`}>
                <img src={image} alt={`${key}-profile`} className={'mx-auto pt-2.5'}/>
            </div>
            <div className={'w-9/12 sm:pt-0 pt-4'}>
                <h2 className={`${styles.title} pb-1 sm:text-left text-center`}>{title}</h2>
                <p className={`${styles.text} sm:text-left text-center`}>{text}</p>
            </div>
        </div>
    )
};

export default Item;