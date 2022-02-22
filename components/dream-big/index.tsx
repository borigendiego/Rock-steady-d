import React, {useState} from 'react';
import styles from './dream.module.scss';
import Modal from './Modal';

const DreamBig = ({}) => {

    const [openModalMarketing, setOpenModalMarketing] = useState<boolean>(false);
    const [openModalSocial, setOpenModalSocial] = useState<boolean>(false);
    const [openModalBlockchain, setOpenModalBlockchain] = useState<boolean>(false);
    const [openModalData, setOpenModalData] = useState<boolean>(false);
    const [openModalUx, setOpenModalUx] = useState<boolean>(false);
    const [openModalProgramming, setOpenModalProgramming] = useState<boolean>(false);
    const [openModalDigital, setOpenModalDigital] = useState<boolean>(false);


    return (
        <div className={`flex flex-col p-8 sm:p-12 ${styles.background}`}>
            <h1 className={`text-center text-white ${styles.title}`}>DREAM BIG.</h1>
            <h1 className={`text-center text-white ${styles.title} empty-font`}>WE CREATE IT</h1>
            <div className={'flex mt-5 sm:mt-20 h-48 sm:h-auto'}>
                <div className={'w-1/2 hidden sm:contents'}>
                    <div className={`grid grid-rows-6 grid-cols-3 grid-flow-col gap-2 ${styles.grid}`}>
                        <div 
                            className={'row-span-1 col-start-1'} 
                            onMouseEnter={() => setOpenModalMarketing(true)}
                        >
                            <img 
                                src="/assets/images/dream-big/marketing.png" 
                                alt={''}
                                className={''} 
                            />
                        </div>
                        <div
                            className={'row-span-2 col-start-1'}
                            onMouseEnter={() => setOpenModalSocial(true)}
                        >
                            <img 
                                src="/assets/images/dream-big/social-media.png"
                                alt={''}
                                className={''} 
                            />
                        </div>
                        <div 
                            className={'row-span-2 col-start-1'}
                            onMouseEnter={() => setOpenModalBlockchain(true)}
                        >
                            <img 
                                src="/assets/images/dream-big/blockchain.png"
                                alt={''}
                                className={''} 
                            />
                        </div>
                        <div 
                            className={'row-span-1 col-start-2'}
                            onMouseEnter={() => setOpenModalData(true)}
                        >
                            <img
                                src="/assets/images/dream-big/data.png" 
                                alt={''}
                                className={''} 
                            />
                        </div>
                        <div 
                            className={'row-span-3 col-start-2'}
                            onMouseEnter={() => setOpenModalUx(true)}
                        >
                            <img 
                                src="/assets/images/dream-big/uxui.png"
                                alt={''}
                                className={''} 
                            />
                        </div>
                        <div 
                            className={'row-span-2 col-start-2'}
                            onMouseEnter={() => setOpenModalProgramming(true)}
                        >
                            <img 
                                src="/assets/images/dream-big/programming.png"
                                alt={''}
                                className={''} 
                            />
                        </div>
                        <div 
                            className={'row-span-6 col-start-3'}
                            onMouseEnter={() => setOpenModalDigital(true)}
                        >
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
            <Modal open={openModalMarketing} closeModal={() => setOpenModalMarketing(false)}>
                <div>
                   <h1>marketing</h1> 
                </div>
            </Modal>
            <Modal open={openModalSocial} closeModal={() => setOpenModalSocial(false)}>
                <div>
                   <h1>Social</h1> 
                </div>
            </Modal>
            <Modal open={openModalBlockchain} closeModal={() => setOpenModalBlockchain(false)}>
                <div>
                   <h1>Blockchain</h1> 
                </div>
            </Modal>
            <Modal open={openModalData} closeModal={() => setOpenModalData(false)}>
                <div>
                   <h1>Data</h1> 
                </div>
            </Modal>
            <Modal open={openModalUx} closeModal={() => setOpenModalUx(false)}>
                <div>
                   <h1>Ux</h1> 
                </div>
            </Modal>
            <Modal open={openModalProgramming} closeModal={() => setOpenModalProgramming(false)}>
                <div>
                   <h1>Programming</h1> 
                </div>
            </Modal>
            <Modal open={openModalDigital} closeModal={() => setOpenModalDigital(false)}>
                <div>
                   <h1>Digital</h1> 
                </div>
            </Modal>
        </div>
    )
};

export default DreamBig;
