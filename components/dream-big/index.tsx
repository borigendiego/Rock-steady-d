import React, { useState } from 'react';
import styles from './dream.module.scss';
import Modal from './Modal';
import { DIALOG_DATA, CAROUSEL_SLIDES } from './dialog/constants';
import MobileCarousel from '../commons/carousel';
import Image from 'next/image';
//framer
import {motion} from "framer-motion";

const DreamBig = ({}) => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [selectedModalDataId, setSelectedModalDataId] = useState<number>(0);

    return (
        <div className={`flex flex-col p-8 sm:p-12 md:my-0 my-16 ${styles.background}`} id={'WHAT'} >
            <motion.h1
                className={`text-center text-white`}
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{ once: true }}
                transition={{duration: 0.7, delay: 0.5}}
            >DREAM BIG.</motion.h1>
            <motion.h1
                className={`text-center text-white empty-font`}
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{ once: true }}
                transition={{duration: 0.7, delay: 1}}
            >WE WILL BUILD IT</motion.h1>
            <MobileCarousel slides={CAROUSEL_SLIDES} /> 
            <div className={'flex mt-5 sm:mt-20 justify-center'}>
                <div className={'w-1/2 hidden md:contents'}>
                    <motion.div
                        className={`grid grid-cols-3 grid-flow-col gap-3`}
                        initial={{opacity: 0, x: -30}}
                        whileInView={{opacity: 1, x: 0}}
                        viewport={{ once: true }}
                        transition={{duration: 1, delay: 1}}
                    >
                        <div 
                            className={`${styles.card} row-span-1 col-start-1 rounded-md`} 
                            onClick={() => {
                                setSelectedModalDataId(0)
                                setOpenModal(true)}
                            }
                        >
                            <span className={'relative'}>
                                <Image
                                    src={'/assets/images/dream-big/marketing.png'}
                                    alt={'Marketing service'}
                                    className={' rounded-md'}
                                    width={190}
                                    height={120}
                                />
                                <h4 className={'text-center absolute bottom-0 w-full rounded-b-md bg-[#82828291]'}>MARKETING</h4>
                            </span>
                            <div className={`${styles.card_text}`}>
                                <p className='text-xs'>Click for + info</p>
                            </div>
                        </div>
                        <div
                            className={`${styles.card} row-span-1 col-start-1 rounded-md`}
                            onClick={() => {
                                setSelectedModalDataId(1)
                                setOpenModal(true)}
                                
                            }
                        >
                            <span className={'relative'}>
                                <Image
                                    src={'/assets/images/dream-big/social-media.png'}
                                    alt={'Marketing service'}
                                    className={' rounded-md'}
                                    width={190}
                                    height={200}
                                />
                                <h4 className={'text-center absolute bottom-0 w-full rounded-b-md bg-[#00000085]'}>SOCIAL MEDIA</h4>
                            </span>
                           
                            <div className={`${styles.card_text}`}>
                                <p className='text-xs'>Click for + info</p>
                            </div>
                        </div>
                        <div 
                            className={`${styles.card} row-span-1 col-start-2 rounded-md`}
                            onClick={() => {
                                setSelectedModalDataId(3)
                                setOpenModal(true)}
                            }
                        >
                            <span className={'relative'}>
                                <Image
                                    src={'/assets/images/dream-big/data.png'}
                                    alt={'Data service'}
                                    className={' rounded-md'}
                                    width={190}
                                    height={100}
                                />
                                <h4 className={'text-center absolute bottom-0 w-full rounded-b-md bg-[#82828291]'}>DATA ANALYTICS</h4>
                            </span>
                            
                            <div className={`${styles.card_text}`}>
                                <p className='text-xs'>Click for + info</p>
                            </div>
                        </div>
                        <div 
                            className={`${styles.card} row-span-1 col-start-2 rounded-md -mt-5`}
                            onClick={() => {
                                setSelectedModalDataId(4)
                                setOpenModal(true)}
                            }
                        >
                            <span className={'relative'}>
                                <Image
                                    src={'/assets/images/dream-big/uxui.png'}
                                    alt={'Ux UI service'}
                                    className={'rounded-md'}
                                    width={190}
                                    height={200}
                                />
                                <h4 className={'text-center absolute bottom-0 w-full rounded-b-md bg-[#82828291]'}>UX UI</h4>
                            </span>
                            
                            <div className={`${styles.card_text}`}>
                                <p className='text-xs'>Click for + info</p>
                            </div>
                        </div>
                        <div 
                            className={`${styles.card} row-span-1 col-start-2 rounded-md`}
                            style={{marginTop: '-20px;'}}
                            onClick={() => {
                                setSelectedModalDataId(5)
                                setOpenModal(true)}
                            }
                        >
                            <span className={'relative'}>
                                <Image
                                    src={'/assets/images/dream-big/programming.png'}
                                    alt={'Programming service'}
                                    className={'rounded-md'}
                                    width={190}
                                    height={150}
                                />
                                <h4 className={'text-center absolute bottom-0 w-full rounded-b-md bg-[#82828291]'}>PROGRAMMING</h4>
                            </span>
                            
                            <div className={`${styles.card_text}`}>
                                <p className='text-xs'>Click for + info</p>
                            </div>
                        </div>
                        <div 
                            className={`${styles.card} row-span-3 col-start-3 mt-auto mb-auto rounded-md`}
                            onClick={() => {
                                setSelectedModalDataId(6)
                                setOpenModal(true)}
                            }
                        >
                            <span className={'relative'}>
                                <Image
                                    src={'/assets/images/dream-big/digital-transformation.png'}
                                    alt={'Programming service'}
                                    className={'rounded-md'}
                                    width={190}
                                    height={350}
                                />
                                <h4 className={'text-center absolute bottom-0 w-full rounded-b-md bg-[#00000085]'}>DIGITAL TRANSFORMATION</h4>
                            </span>
                            
                            <div className={`${styles.card_text}`}>
                                <p className='text-xs'>Click for + info</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <motion.div
                    className={'sm:w-1/2 mb-0 sm:mb-10 sm:px-20 pt-8'}
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{ once: true }}
                    transition={{duration: 0.7, delay: 2}}
                >
                    <h3 className={`py-4 font-bold text-left ${styles.text}`}>
                        Innovative Digital Solutions to Rock your World!
                    </h3>
                    <p className={`py-4 ${styles.text} text-gray-400`}>
                        We help organisations with their digital transformation and implement their requirements. We can enhance your company's existing digital capabilities through website and social media development, e-commerce implementations, and digital transformations.
                    </p>
                    <p className={`py-4 font-bold ${styles.text}`}>
                        We unite people, processes, tools and data in a creative way that will help your business grow.
                    </p>
                </motion.div>
            </div>

            <Modal open={openModal} closeModal={() => setOpenModal(false)} selectedSection={DIALOG_DATA[selectedModalDataId].section} >
                <div>
                    {DIALOG_DATA[selectedModalDataId].content}
                </div>
            </Modal>
        </div>
    )
};

export default DreamBig;
