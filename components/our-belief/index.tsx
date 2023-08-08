import React, { useEffect, useState } from 'react';
//
import { ITEM_DATA } from './item/constants';
import styles from './belief.module.scss';
import Item from "./item";
//Assets
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
//framer
import {motion} from "framer-motion";

const OurBelief = () => {
    const [audio, setAudio] = useState<any>(null)
    const [isMusicPlaying, setIsMusicPlaying] = useState<boolean>(false);

    useEffect(() => {
        setAudio(new Audio('/assets/music/music2.mp3'))
    }, [])

    const start = (isPlaying: boolean) => {
        if (isPlaying) {
            audio.pause();
            setIsMusicPlaying(false);
        } else {
            audio.play();
            setIsMusicPlaying(true);
        }
    }

    return(
        <div className={'flex flex-col sm:flex-row py-20'} id={'BELIEFS'}>
            <div className={'sm:w-3/6 lg:w-[1/2] flex flex-col items-center'}>
                <div className={'flex flex-wrap my-12 md:my-0'}>
                    <motion.h1
                        className={`${styles.text} w-full sm:text-left text-center`}
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{ once: true }}
                        transition={{duration: 0.7, delay: 0.5}}
                    >OUR</motion.h1>
                    <motion.h1
                        className={`${styles.text} w-full empty-font sm:text-left text-center`}
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{ once: true }}
                        transition={{duration: 0.7, delay: 1}}
                    >VALUES</motion.h1>
                </div>
                <div className={'relative mt-6 md:hidden'}>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: `<video 
                                class='z-0 left-0 right-0 mr-auto ml-auto opacity-50 rounded-md'
                                autoplay loop muted playsinline
                            />
                                <source src=/assets/videos/video-1.mp4 type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>`,
                        }}
                    />
                    <span className={'z-40 cursor-pointer absolute bottom-2 right-2'} onClick={() => start(isMusicPlaying)}>
                        {
                            isMusicPlaying 
                            ? <VolumeUpIcon
                                style={{
                                    fill: '#fff',
                                    zIndex: '200'
                                }}
                                sx={{ fontSize: 40 }}
                            />
                            : <VolumeMuteIcon
                                style={{
                                    fill: '#fff',
                                    zIndex: '200'
                                }}
                                sx={{ fontSize: 40 }}
                            />
                        }
                    </span>
                </div>
                <div className={'flex flex-col items-baseline mt-4 px-4 sm:items-center'}>
                    {ITEM_DATA.map((value, index) => <Item itemData={value} key={index}/>)}
                </div>
            </div>
            <motion.div
                className={'md:w-1/2 relative md:overflow-hidden'}
                initial={{opacity: 0,}}
                whileInView={{opacity: 1,}}
                viewport={{ once: true }}
                transition={{duration: 0.7, delay: 2}}
            >
                <div className={`${styles.bg} rounded-2xl`}>
                    <div className='flex'>
                        <h1 className={`${styles.text}  md:text-4xl sm:text-left text-center`}>
                            OUR</h1>
                        <h1 className={`${styles.text} md:pl-3 md:text-4xl empty-font sm:text-left text-center`}>
                            MISSION</h1>
                    </div>
                    <p className='pt-3'>
                        Rock Steady Digital's mission is a journey of digital transformation through a joruney of creatividty and innovation.
                         We create a fun and energetic environment and work with our clients and partner organisations to deliver outstanding results.
                          We are passionate avout gelping people and companies succeed through continuous improvement
                    </p>
                </div>
                <div
                    dangerouslySetInnerHTML={{
                        __html: `<video 
                        class='absolute opacity-50 z-0 max-w-none rounded-md w-fit hidden md:inline'
                            autoplay loop muted playsinline
                        />
                            <source src=/assets/videos/video-1.mp4 type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>`,
                    }}
                />
                <span 
                    className={'z-40 cursor-pointer absolute bottom-8 left-2 hidden md:block'} 
                    onClick={() => start(isMusicPlaying)}
                >
                    {
                        isMusicPlaying 
                        ? <VolumeUpIcon
                            style={{
                                fill: '#fff',
                                zIndex: '200'
                            }}
                            sx={{ fontSize: 40 }}
                        />
                        : <VolumeMuteIcon
                            style={{
                                fill: '#fff',
                                zIndex: '200'
                            }}
                            sx={{ fontSize: 40 }}
                        />
                    }
                </span>
            </motion.div>
        </div>
    )
};

export default OurBelief;