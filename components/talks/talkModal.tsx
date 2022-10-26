import React from 'react';
import Router from 'next/router';
import Dialog from '@mui/material/Dialog';
import Layout from './layout';

//framer
import {motion} from "framer-motion";

type modalProps = {
    open: boolean,
    children: any,
    closeModal: any,
}

const TalkModal = (
    {
        open,
        children,
        closeModal,
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
            <div className={`flex flex-col`}>
                <div
                className='talk-modal md:px-6 py-2'
                >
                    <div className='flex justify-end'>
                        <h3 
                        className='talk-back text-5xl cursor-pointer md:w-[5%] p-2 md:p-0'
                        onClick={() => closeModal()}
                        >&#8617;</h3>
                    </div>
                    <div className='md:flex justify-around p-4'>
                        <img src='/assets/images/talkCalendar.svg' className='mx-auto my-2 md:my-0 md:mx-0'/> 
                        <h1 
                        className='empty-font md:text-[42px]'
                        >WEDNESDAY 9:00AM & 7:00PM BST LONDON</h1>
                    </div>
                    <Layout />
                </div>
            </div>
        </Dialog>
    )
}

export default TalkModal;