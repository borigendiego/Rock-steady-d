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
        <div className={'flex my-8'}>
            <div className={`p-1 h-14 w-14 mr-6 ${styles.imageDiv}`}>
                <img src={image} alt={`${key}-profile`} className={'mx-auto pt-2.5'}/>
            </div>
            <div className={'w-7/12'}>
                <h2 className={`${styles.title} pb-1`}>{title}</h2>
                <p className={`${styles.text}`}>{text}</p>
            </div>
        </div>
    )
};

export default Item;