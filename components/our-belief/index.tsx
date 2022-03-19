import React from 'react';
//
import { ITEM_DATA } from './item/constants';
import styles from './belief.module.scss';
import Item from "./item";

const OurBelief = () => {
    return(
        <div className={'flex flex-col sm:flex-row mt-10 mb-20'} id={'BELIEFS'}>
            <div className={'sm:w-3/6 lg:w-1/2 flex flex-col items-center'}>
                <div className={'flex flex-wrap'}>
                    <h1 className={`${styles.text} w-full sm:text-left text-center`}>OUR</h1>
                    <h1 className={`${styles.text} w-full empty-font sm:text-left text-center`}>BELIEFS</h1>
                </div>
                <div className={'flex flex-col items-baseline mt-8 px-4 sm:items-center'}>
                    {ITEM_DATA.map((value, index) => <Item itemData={value} key={index}/>)}
                </div>
            </div>
            <div className={'w-1/2 relative overflow-hidden'}>
                <video className={'absolute opacity-50 z-0 max-w-none rounded-md w-fit'} src={'/assets/videos/video-1.mp4'} autoPlay={true} muted={true} loop={true} />
            </div>
        </div>
    )
};

export default OurBelief;