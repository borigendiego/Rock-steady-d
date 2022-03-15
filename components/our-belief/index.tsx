import React from 'react';
//
import { ITEM_DATA } from './item/constants';
import styles from './belief.module.scss';
import Item from "./item";

const OurBelief = () => {
    return(
        <div className={`bg-purple-900 flex flex-col sm:flex-row py-8 ${styles.background}`} id={'BELIEFS'}>
            <div className={'sm:w-3/6 flex flex-col items-center'}>
                <div className={'flex flex-wrap'}>
                    <h1 className={`${styles.text} w-full sm:text-left text-center`}>OUR</h1>
                    <h1 className={`${styles.text} w-full empty-font sm:text-left text-center`}>BELIEFS</h1>
                </div>
                <div className={'flex flex-col items-baseline mt-8 px-4 sm:items-center'}>
                    {ITEM_DATA.map((value, index) => <Item itemData={value} key={index}/>)}
                </div>
            </div>
            <div className={'w-1/2 relative'}>
                <video className={'absolute opacity-70 z-0'} src={'/assets/videos/video-1.mp4'} autoPlay={true} muted={true} loop={true} />
            </div>
        </div>
    )
};

export default OurBelief;