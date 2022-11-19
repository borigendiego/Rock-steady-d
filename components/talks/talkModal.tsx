import React from 'react';
import Router from 'next/router';
import Dialog from '@mui/material/Dialog';
import Layout from './layout';

//framer
import { motion } from "framer-motion";

type modalProps = {
    open: boolean,
    closeModal: any,
}

const TalkModal = (
    {
        open,
        closeModal,
    }:modalProps) => {

    const handleClose = () => {
        closeModal();
    };
   
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
            <div className={`flex flex-col`}>
                <div
                    className='talk-modal md:px-6 py-2'
                >
                    <div className='flex justify-end'>
                        <motion.h3 
                        className='talk-back text-5xl cursor-pointer md:w-[5%] p-2 md:p-0'
                        onClick={() => closeModal()}
                        initial={{opacity: 0, y: -10}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{ once: true }}
                        transition={{duration: .5}}
                        >&#8617;</motion.h3>
                    </div>
                    <Layout closeModal={closeModal} />
                </div>
            </div>
        </Dialog>
    )
}

export default TalkModal;