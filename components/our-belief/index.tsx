import React from 'react';
//
import { ITEM_DATA } from './item/constants';
import styles from './belief.module.scss';
import Item from "./item";

const OurBelief = () => {
    return(
        <div className={`bg-purple-900 flex flex-col sm:flex-row ${styles.background}`} id={'BELIEFS'}>
            <div className={'sm:w-3/6 flex flex-col items-center'}>
                <div className={'flex flex-wrap pt-4'}>
                    <h1 className={`${styles.text} w-full sm:text-left text-center`}>OUR</h1>
                    <h1 className={`${styles.text} w-full empty-font sm:text-left text-center`}>BELIEFS</h1>
                </div>
                <div className={'flex flex-col items-baseline mt-8 px-4 sm:items-center'}>
                    {ITEM_DATA.map((value, index) => <Item itemData={value} key={index}/>)}
                </div>
            </div>
            <img alt={'background image'} src={'/assets/images/beliefImg.png'} className={'max-h-max w-3/6 rounded-2xl sm:flex hidden'}/>
        </div>
    )
};

export default OurBelief;