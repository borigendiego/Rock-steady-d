import React from 'react';
import Router from 'next/router';
import Dialog from '@mui/material/Dialog';
import styles from './modal.module.scss';

type modalProps = {
    open: boolean,
    children: any,
    closeModal: any,
    selectedSection: string,
}

const Modal = (
    {
        open,
        children,
        closeModal,
        selectedSection,
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
                <a onClick={() => closeModal()} className={`${styles.link} text-xl relative left-6 top-8 w-fit`}>&#9735; GO BACK</a>
                <h1 className={`text-center text-white`}>DREAM BIG.</h1>
                <h1 className={`text-center text-white empty-font`}>WE CREATE IT</h1>
                {children}
                <div className='w-full flex justify-end'>
                <button 
                    className={'py-3 px-4 relative right-48 bottom-16'}
                    onClick={() => {
                        window.localStorage.setItem('section', selectedSection);
                        closeModal();
                        Router.push('/#CONTACT')
                    }}
                >
                    Find out more
                </button>
                </div>
            </div>
        </Dialog>
    )
}

export default Modal;