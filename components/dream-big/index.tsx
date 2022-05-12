import React, {useState} from 'react';
import styles from './dream.module.scss';
import Modal from './Modal';
import { DIALOG_DATA } from './dialog/constants';

const DreamBig = ({}) => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [selectedModalDataId, setSelectedModalDataId] = useState<number>(0);

    return (
        <div className={`flex flex-col p-8 sm:p-12 ${styles.background}`} id={'WHAT'} >
            <h1 className={`text-center text-white`}>DREAM BIG.</h1>
            <h1 className={`text-center text-white empty-font`}>WE CREATE IT</h1>
            <div className={'flex mt-5 sm:mt-20 justify-center'}>
                <div className={'w-1/2 sm:contents'}>
                    <div className={`grid grid-cols-3 grid-flow-col gap-3`}>
                        <div 
                            className={`${styles.card} row-span-1 col-start-1`} 
                            onClick={() => {
                                setSelectedModalDataId(0)
                                setOpenModal(true)}
                            }
                        >
                            <img 
                                src="/assets/images/dream-big/marketing.png" 
                                alt={''}
                                className={`${styles.card_image}`}
                            />
                            <div className={`${styles.card_text}`}>
                                <h4 className='text-lg'>MARKETING</h4>
                                <p className='text-xs'>Click for + info</p>
                            </div>
                        </div>
                        <div
                            className={`${styles.card} row-span-1 col-start-1`}
                            onClick={() => {
                                setSelectedModalDataId(1)
                                setOpenModal(true)}
                                
                            }
                        >
                            <img 
                                src="/assets/images/dream-big/social-media.png"
                                alt={''}
                                className={`${styles.card_image}`}
                            />
                            <div className={`${styles.card_text}`}>
                                <h4 className='text-lg'>SOCIAL MEDIA</h4>
                                <p className='text-xs'>Click for + info</p>
                            </div>
                        </div>
                        <div 
                            className={`${styles.card} row-span-1 col-start-1`}
                            onClick={() => {
                                setSelectedModalDataId(2)
                                setOpenModal(true)}
                            }
                        >
                            <img 
                                src="/assets/images/dream-big/metaverse.png"
                                alt={''}
                                className={`${styles.card_image}`}
                            />
                            <div className={`${styles.card_text}`}>
                                <h4 className='text-lg'>BLOCKCHAIN</h4>
                                <p className='text-xs'>Click for + info</p>
                            </div>
                        </div>
                        <div 
                            className={`${styles.card} row-span-1 col-start-2`}
                            onClick={() => {
                                setSelectedModalDataId(3)
                                setOpenModal(true)}
                            }
                        >
                            <img
                                src="/assets/images/dream-big/data.png" 
                                alt={''}
                                className={`${styles.card_image}`}
                            />
                            <div className={`${styles.card_text}`}>
                                <h4 className='text-lg'>BIG DATA</h4>
                                <p className='text-xs'>Click for + info</p>
                            </div>
                        </div>
                        <div 
                            className={`${styles.card} row-span-1 col-start-2`}
                            style={{marginTop: '-30px;'}}
                            onClick={() => {
                                setSelectedModalDataId(4)
                                setOpenModal(true)}
                            }
                        >
                            <img 
                                src="/assets/images/dream-big/uxui.png"
                                alt={''}
                                className={`${styles.card_image}`}
                            />
                            <div className={`${styles.card_text}`}>
                                <h4 className='text-lg'>UX UI</h4>
                                <p className='text-xs'>Click for + info</p>
                            </div>
                        </div>
                        <div 
                            className={`${styles.card} row-span-1 col-start-2`}
                            style={{marginTop: '-30px;'}}
                            onClick={() => {
                                setSelectedModalDataId(5)
                                setOpenModal(true)}
                            }
                        >
                            <img 
                                src="/assets/images/dream-big/programming.png"
                                alt={''}
                                className={`${styles.card_image} w-full`}
                            />
                            <div className={`${styles.card_text}`}>
                                <h4 className='text-lg'>PROGRAMMING</h4>
                                <p className='text-xs'>Click for + info</p>
                            </div>
                        </div>
                        <div 
                            className={`${styles.card} row-span-3 col-start-3 mt-auto mb-auto`}
                            onClick={() => {
                                setSelectedModalDataId(6)
                                setOpenModal(true)}
                            }
                        >
                            <img 
                                src="/assets/images/dream-big/digital-transformation.png" 
                                alt={''}
                                className={`${styles.card_image}`}
                            />
                            <div className={`${styles.card_text}`}>
                                <h4 className='text-lg text-center'>DIGITAL DISRUPTION</h4>
                                <p className='text-xs'>Click for + info</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'sm:w-1/2 mb-0 sm:mb-10 sm:px-20 pt-8'}>
                    <h3 className={`py-4 font-bold text-center ${styles.text}`}>
                        Innovative Digital Solutions to Rock your World!
                    </h3>
                    <p className={`py-4 ${styles.text} text-gray-400`}>
                        We help SMEs and Start-ups with their digital transformation and implement their requirements. We can enhance your company's existing digital capabilities through website and social media development, e-commerce implementations, and digital transformations.
                    </p>
                    <p className={`py-4 font-bold ${styles.text}`}>
                        It's simple, we unite people, processes, tools and data in a creative way that will help your business grow.
                    </p>
                </div>
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
