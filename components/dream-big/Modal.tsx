import React from 'react';
import Router from 'next/router';
import Dialog from '@mui/material/Dialog';
import styles from './modal.module.scss';
import Link from 'next/link';
//framer
import {motion} from "framer-motion";

type modalProps = {
    open: boolean,
    children: any,
    closeModal: any,
    selectedSection: string,
    customLink?: string,
}

const Modal = (
    {
        open,
        children,
        closeModal,
        selectedSection,
        customLink,
    }:modalProps) => {

    const handleClose = () => {};
   
    return(
        <Dialog
            onClose={handleClose} 
            open={open} 
            fullWidth={true} 
            maxWidth={'lg'}
            sx={{
                '& .MuiPaper-root': {
                    backgroundColor: 'transparent',
                  },
            }}
        >
            <div className={`${styles.overlay} flex flex-col overflow-hidden`}>
                <motion.a
                    onClick={() => closeModal()}
                    className={`${styles.link} text-xl relative left-6 top-8 w-fit duration-300 hover:scale-110 cursor-pointer`}
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    viewport={{ once: true }}
                    transition={{duration: 1, delay: 0.5}}
                >&#9735; GO BACK</motion.a>
                <motion.h1
                    className={`text-center text-white`}
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    viewport={{ once: true }}
                    transition={{duration: 1, delay: 0.5}}
                >DREAM BIG.</motion.h1>
                <motion.h1
                    className={`text-center text-white empty-font`}
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    viewport={{ once: true }}
                    transition={{duration: 1, delay: 0.5}}
                >WE CREATE IT</motion.h1>
                <motion.div
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    viewport={{ once: true }}
                    transition={{duration: 1, delay: 1}}
                >
                    {children}
                </motion.div>
                <motion.div
                    className='w-full flex justify-end'
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    viewport={{ once: true }}
                    transition={{duration: 1, delay: 1.5}}
                >

                    {customLink ?

                        <a href={customLink} target='_blank' rel='noreferrer'>
                            <button 
                                className={'py-3 px-4 relative right-48 bottom-24'}
                            >
                                Find out more
                            </button>
                        </a>

                    :
                    <button 
                        className={'py-3 px-4 relative right-48 bottom-24'}

                        onClick={() => {
                            window.localStorage.setItem('section', selectedSection);
                            closeModal();
                            Router.push('/#CONTACT')
                        }}
                    >
                        Find out more
                    </button>}
                </motion.div>
            </div>
        </Dialog>
    )
}

export default Modal;