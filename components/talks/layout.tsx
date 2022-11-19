import React, { useState } from "react";
import { Form } from '../Form';
import { required, email } from '../contact/fieldValidations';
//framer
import { motion } from "framer-motion";

type LayoutPropsType = {
    closeModal: any
}

const Layout = ({ closeModal }:LayoutPropsType) => {
    const [emailSent, setEmailSent] = useState<boolean>(false);

    return(
        <div className='flex flex-col-reverse md:flex-row justify-around'>
            <motion.div 
            className='py-4'
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{ once: true }}
            transition={{duration: 1, delay: 0.8}}
            >
                {
                    emailSent ? <div className={'border border-white rounded-lg p-4'}>
                       <h1 className={"text-center empty-font text-[70px]"}>YOU</h1>
                       <h1 className={"text-[70px] text-center"}>ROCK</h1>
                       <h3 className={"empty-font text-center"}>YOUR MESSAGE HAS BEEN</h3>
                       <h3 className={"empty-font text-center"}>DELIVERED SUCCESSFULLY</h3>
                       <p className={'text-center mt-4'}>We will contact you shortly with the meeting details</p>
                    </div>
                    : <div>
                    <div className="flex flex-col text-center">
                        
                        <h3 className="empty-font">HOW CAN I</h3>
                        <h1>ROCK</h1> 
                        <h3 className="empty-font">MY GROWTH?</h3>
                        <p className={'md:text-[20px] mt-4'}>
                            Register and receive the details to join the introduction presentation
                        </p>
                    </div>
                    <Form 
                        fields={[
                            {
                                name: 'name',
                                type: 'text',
                                label: '',
                                placeholder: 'Name',
                                validations: [required]
                            },
                            {
                                name: 'customerEmail',
                                type: 'text',
                                label: '',
                                placeholder: 'Email',
                                validations: [required, email]
                            },
                        ]}
                        onSuccessMessage={'Your message has been successfully sent! We will contact you very soon'}
                        onErrorMessage={'Please try again in some minutes'}
                        submitButtonLabel={'Send'}
                        emailServiceURL={'https://thehippoapi.netlify.app/.netlify/functions/api/rock-steady-training'}
                        customClass={'talk-form'}
                        customButtonClass={'white-button'}
                        afterSubmitAction={() => setEmailSent(true)}
                    />
                </div>
                }
            </motion.div>
        </div>
    )
}

export default Layout;