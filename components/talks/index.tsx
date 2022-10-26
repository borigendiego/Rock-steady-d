import React, { useState } from "react";
//
import { motion } from "framer-motion";
import TalkModal from "./talkModal";


const Talks = () => {

    const [openModal, setOpenModal] = useState<boolean>(false);
    const [selectedModalDataId, setSelectedModalDataId] = useState<number>(0);

    return(
        <div className='py-20'>
            <div className='w-1/3'>
               <div>
                    <h3 className="text-center empty-font">FREE TRAINING TALKS</h3>
                    <h1>BOOST</h1>
                    <span className={'flex w-full justify-between'}>
                        <img src={'/assets/images/star_3_crop.png'} className={'object-contain w-10 md:w-16'} />
                        <h1 className={'text-center'}>YOUR</h1>
                        <img src={'/assets/images/star_3_crop.png'} className={'object-contain w-10 md:w-16 rotate-180'} />
                    </span>
                    <h1>INCOMES</h1>
                </div>
                <div className="w-full flex justify-center mt-4">
                    <button 
                    className="py-3 px-4"
                    onClick={() => {setOpenModal(true)}}
                    >
                        Register
                    </button>
                </div>

            </div>
            <div className="w-2/3">
                Video
            </div>

            <TalkModal open={openModal} closeModal={() => setOpenModal(false)}>

            </TalkModal>
        </div>
    )
}

export default Talks
