import React, { useState, useEffect } from 'react';
//Compoments
import { CAROUSEL_DATA, CAROUSEL_SLIDES } from './constants';
import MobileCarousel from '../commons/carousel';
//Assets
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

const How = () => {
    const [selectedItem, setSelectedItem] = useState<number>(0);
    const [audio, setAudio] = useState<any>(null)
    const [isMusicPlaying, setIsMusicPlaying] = useState<boolean>(false);

    useEffect(() => {
        setAudio(new Audio('/assets/music/music1.mp3'))
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
        <div className={`sm:flex sm:flex-wrap sm:px-8 py-20 mt-8`} id={'HOW'}>
            <div className={`w-full h-full sm:w-1/2 flex flex-col justify-center relative`}>
                <span className={'z-40 cursor-pointer bottom-3 h-auto right-2 absolute'} onClick={() => start(isMusicPlaying)}>
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
                <video
                    className={'z-0 left-0 right-0 mr-auto ml-auto opacity-30 rounded-md'} 
                    src={'/assets/videos/video-2.mp4'} 
                    autoPlay={true} muted={true} 
                    loop={true} 
                />
                <div className={'absolute z-20 margin-auto'} style={{'transform': 'translate(-50%, 0)', left: '50%'}}>
                    <h1 className={'empty-font'}>HOW WE</h1>
                    <h1>DO IT</h1>
                </div>
            </div>
            <div className={'flex sm:w-1/2 justify-center items-center flex-col relative px-2 sm:px-12'}>
                <h3 className={'sm:mb-4 sm:mt-0 mt-24 text-center hidden md:block'}>Solutions which make you want to dance</h3>
                <MobileCarousel slides={CAROUSEL_SLIDES} /> 
                <p className={'text-center h-28 sm:block hidden'}>{CAROUSEL_DATA[selectedItem].description}</p>
                <img className={'mt-16 mb-10 w-full hidden md:inline'} src={'/assets/images/separator.svg'} alt={'Separator SVG'} />
                <div className={'hidden sm:flex justify-between w-full'}>
                    {
                        CAROUSEL_DATA.map((item) => {
                            return (
                                <div className={'flex flex-col items-center w-1/5 mx-1 hover:scale-125 duration-300 cursor-pointer'} onMouseEnter={() => setSelectedItem(item.id)}>
                                    <div className={'mx-4 flex justify-center items-center rounded-full bg-gray-700 mb-3 h-16 w-16'}>
                                        <img className={'w-1/2'} src={item.icon} alt={`${item.title} SVG icon`} />
                                    </div>
                                    <p className={'text-xs text-center'}>{item.title}</p>
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