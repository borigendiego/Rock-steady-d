import React , {ReactElement, useState} from 'react';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import { DIALOG_DATA } from './dialog/constants';
import { type } from 'os';
import styles from './modal.module.scss';

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
    const [fullWidth, setFullWidth] = useState(true);
    const [maxWidth, setMaxWidth] = useState<DialogProps['maxWidth']>('lg');;
    
    return(
        <Dialog
            onClose={handleClose} 
            open={open} 
            fullWidth={fullWidth} 
            maxWidth={maxWidth}
            sx={{
                '& .MuiPaper-root': {
                    backgroundColor: 'transparent',
                  },
            }}
        >
            <div className={`${styles.overlay}`}>
                <a onClick={() => closeModal()} className={`${styles.link} text-xl relative left-6 top-8`}>&#9735; GO BACK</a>
                <h1 className={`text-center text-white`}>DREAM BIG.</h1>
                <h1 className={`text-center text-white empty-font`}>WE CREATE IT</h1>
                {children}
            </div>
        </Dialog>
    )
}

export default Modal;