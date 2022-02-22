import React , {ReactElement} from 'react';
import Dialog from '@mui/material/Dialog';
import { type } from 'os';

type modalProps = {
    open: boolean,
    children: ReactElement<any.any>,
    closeModal: any,
}

const Modal = (
    {
        open,
        children,
        closeModal
        
    }:modalProps) => {

    const handleClose = () => {};
    
    return(
        <Dialog onClose={handleClose} open={open}>
            <h1 onClick={() => closeModal()} className={'text-black'}>XX</h1>
            {children}
        </Dialog>
    )
}

export default Modal;