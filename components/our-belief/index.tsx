import React from 'react';
//
import { ITEM_DATA } from './item/constants';
import styles from './belief.module.scss';
import Item from "./item";

const OurBelief = () => {
    return(
        <div className={`bg-purple-900 flex ${styles.background}`}>
            <div className={'w-3/6 flex flex-col items-center p-16'}>
                <div className={'flex w-full flex-wrap'}>
                    <h1 className={`${styles.text} text-left w-full`}>OUR</h1>
                    <h1 className={`${styles.text2} text-left w-full empty-font`}>BELIEFS</h1>
                </div>
                <div className={'flex flex-col items-baseline mt-8 px-4'}>
                    {ITEM_DATA.map((value, index) => <Item itemData={value} key={index}/>)}
                </div>
            </div>
            <img alt={'background image'} src={'/assets/images/beliefImg.png'} className={'max-h-max w-3/6 rounded-2xl'}/>
        </div>
    )
};

export default OurBelief;