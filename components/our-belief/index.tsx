import React, { useEffect, useState } from 'react';
//
import { ITEM_DATA } from './item/constants';
import styles from './belief.module.scss';
import Item from "./item";
//Assets
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

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
        <div className={'flex flex-col sm:flex-row mt-10 mb-20'} id={'BELIEFS'}>
            <div className={'sm:w-3/6 lg:w-1/2 flex flex-col items-center'}>
                <div className={'flex flex-wrap'}>
                    <h1 className={`${styles.text} w-full sm:text-left text-center`}>OUR</h1>
                    <h1 className={`${styles.text} w-full empty-font sm:text-left text-center`}>BELIEFS</h1>
                </div>
                <div className={'relative mt-4 md:hidden'}>
                    <div className={'w-full h-[397px] relative overflow-hidden hidden'}>
                        <iframe
                            className={'z-0 left-0 right-0 mr-auto ml-auto rounded-md'}
                            width="100%" 
                            height="100%"
                            src={"https://www.youtube.com/embed/videoseries?autoplay=1&mute=1&loop=1&controls=0&amp;list=PLz16idll2IiyMsFuzwY5tLhe45Ad2e_q5"}
                            allow={"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"}
                        />
                        <div className={'absolute w-full h-full z-10 bg-slate-900 opacity-50 top-0'} />
                    </div>
                    <video 
                        className={'z-0 left-0 right-0 mr-auto ml-auto opacity-30 rounded-md'} 
                        src={'/assets/videos/video-1.mp4'} 
                        autoPlay={true} muted={true} loop={true}
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
            <div className={'w-1/2 relative overflow-hidden'}>
                <video 
                    className={'absolute opacity-50 z-0 max-w-none rounded-md w-fit hidden md:inline'} 
                    src={'/assets/videos/video-1.mp4'} 
                    autoPlay={true} muted={true} loop={true} 
                />
                <span 
                    className={'z-40 cursor-pointer absolute bottom-2 left-2'} 
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
            </div>
        </div>
    )
};

export default OurBelief;