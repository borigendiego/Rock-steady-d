import React from "react";
import { Form } from '../Form';
import { required, email } from '../contact/fieldValidations';
//framer
import { motion } from "framer-motion";


const Layout = () => {
    return(
        <div className='flex flex-col-reverse md:flex-row justify-around'>
            <motion.div 
            className='py-4'
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{ once: true }}
            transition={{duration: 1, delay: 1.3}}
            >
                <div className="flex flex-col text-center">
                    <h3 className="empty-font">HOW CAN I</h3>
                    <h1>ROCK</h1> 
                    <h3 className="empty-font">MY GROWTH?</h3>
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
                    emailServiceURL={'https://thehippoapi.netlify.app/.netlify/functions/api/rock-steady-subcription'}
                    customClass={'talk-form'}
                    customButtonClass={'white-button'}
                />
            </motion.div>
            <motion.div 
            className='flex flex-col md:flex-row my-4 md:my-0 md:justify-around items-center'
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{ once: true }}
            transition={{duration: 1, delay: 1.7}}
            >
                <a href="https://us02web.zoom.us/j/84563810993?pwd=RkV5NUJWcUVTK3Qrb09UU3NlOEo3QT09" rel="noreferrer" target="_blank">
                    <button className='white-button px-3 py-1 h-10'>
                            Join the meeting
                    </button>
                </a>
                <span className="md:h-10 md:ml-8 mt-4 md:mt-0">
                    <p>Meeting ID: 845 6381 0993</p>
                    <p>Passcode: 534543</p>
                </span>
            </motion.div>
        </div>
    )
}

export default Layout;