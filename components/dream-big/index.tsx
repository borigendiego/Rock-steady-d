import React from 'react';
import styles from './dream.module.scss';

const DreamBig = ({}) => {
    return (
        <div className={`flex flex-col p-8 h-screen sm:p-12 sm:max-h-screen ${styles.background}`}>
            <h1 className={`text-center text-white ${styles.title}`}>DREAM BIG.</h1>
            <h1 className={`text-center text-white ${styles.title} empty-font`}>WE CREATE IT</h1>
            <div className={'flex mt-5 sm:mt-20 h-48 sm:h-auto'}>
                <div className={'w-1/2 hidden sm:contents'}>
                    <div className={'grid grid-rows-4 grid-cols-3 grid-flow-col gap-2'}>
                        <div className={'row-span-1'}>
                            <img 
                                src="/assets/images/dream-big/marketing.png" 
                                alt={''}
                                className={''} 
                            />
                        </div>
                        <div className={'row-span-2'}>
                            <img 
                                src="/assets/images/dream-big/social-media.png"
                                alt={''}
                                className={''} 
                            />
                        </div>
                        <div className={'row-span-1'}>
                            <img 
                                src="/assets/images/dream-big/blockchain.png"
                                alt={''}
                                className={''} 
                            />
                        </div>
                        <div className={'row-span-1'}>
                            <img
                                src="/assets/images/dream-big/data.png" 
                                alt={''}
                                className={''} 
                            />
                        </div>
                        <div className={'row-span-2'}>
                            <img 
                                src="/assets/images/dream-big/uxui.png"
                                alt={''}
                                className={''} 
                            />
                        </div>
                        <div className={'row-span-1'}>
                            <img 
                                src="/assets/images/dream-big/programming.png"
                                alt={''}
                                className={''} 
                            />
                        </div>
                        <div className={'row-span-4'}>
                            <img 
                                src="/assets/images/dream-big/digital-transformation.png" 
                                alt={''}
                                className={''} 
                            />
                        </div>
                    </div>
                </div>
                <div className={'sm:w-1/2 mb-0 sm:mb-10 px-6 pt-8'}>
                    <p className={`py-2 font-bold ${styles.text}`}>
                        Let us do the heavy lifting 
                    </p>
                    <p className={`py-2 ${styles.text}`}>
                        We help SMEs and Start-ups in their digital transformation and requirements. 
                        We can enhance your company's existing digital capabilities through website and social media development, e-commerce implementations, and digital transformations.
                    </p>
                    <p className={`py-2 font-bold ${styles.text}`}>
                        It's simple, we unite people + processes + tools + data in unique creations that will help your business grow.
                    </p>
                </div>
            </div>
        </div>
    )
};

export default DreamBig;
