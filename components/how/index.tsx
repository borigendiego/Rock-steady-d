import React, { useState } from 'react';
import styles from './how.module.scss';
import { CAROUSEL_DATA } from './constants';

const How = () => {
    const [selectedItem, setSelectedItem] = useState(0);

    return(
        <div className={`flex flex-wrap px-40 py-60`} id={'HOW'}>
            <div className={`w-full xl:w-1/2 flex flex-col justify-center relative`}>
                <video className={'absolute z-0 left-0 right-0 mr-auto ml-auto opacity-30 rounded-md'} src={'/assets/videos/video-2.mp4'} autoPlay={true} muted={true} loop={true} />
                <div className={'relative z-20'}>
                    <h1 className={'empty-font'}>HOW WE</h1>
                    <h1>DO IT</h1>
                </div>
            </div>
            <div className={'flex xl:w-1/2 justify-center items-center flex-col relative px-20'}>
                <h3 className={'mb-4 text-center'}>This is how it works</h3>
                <p className={'text-center h-28'}>{CAROUSEL_DATA[selectedItem].description}</p>
                <img className={'my-10 w-full'} src={'/assets/images/separator.svg'} alt={'Separator SVG'} />
                <div className={'flex justify-between w-full'}>
                    {
                        CAROUSEL_DATA.map((item) => {
                            return (
                                <div className={'flex flex-col items-center w-1/5 p-2'} onMouseEnter={() => setSelectedItem(item.id)}>
                                    <div className={'mx-4 flex justify-center items-center rounded-full bg-gray-700 mb-3 hover:scale-125 duration-300 cursor-pointer h-16 w-16'}>
                                        <img className={'w-1/2'} src={item.icon} alt={`${item.title} SVG icon`} />
                                    </div>
                                    <p className={' text-xs'}>{item.title}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
};

export default How;