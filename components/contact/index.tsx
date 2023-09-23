import React from 'react';
import { Form } from '../Form';
import { required, email } from './fieldValidations';
import Image from 'next/image';
//framer
import {motion} from "framer-motion";

const Contact = () => {
  return(
      <motion.div
          className={'flex flex-col justify-center'}
          id={'CONTACT'}
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{ once: true }}
          transition={{duration: 1, delay: 1}}
      >
            <Image
                src={'/assets/images/READY_TO.png'}
                alt={'Ready to'}
                width={400}
                height={300}
                className={'object-contain'}
            />
            <Form 
                fields={[
                    {
                        name: 'name',
                        type: 'text',
                        label: '',
                        placeholder: 'Name',
                        size: 'half',
                        validations: [required]
                    },
                    {
                        name: 'customerEmail',
                        type: 'text',
                        label: '',
                        size: 'half',
                        placeholder: 'Email',
                        validations: [required, email]
                    },
                    {
                        name: 'subject',
                        type: 'text',
                        label: '',
                        placeholder: 'Subject',
                        validations: [required]
                    },
                    {
                        name: 'message',
                        type: 'textArea',
                        label: '',
                        placeholder: 'Message',
                    },
                ]}
                onSuccessMessage={'Your message has been successfully sent! We will contact you very soon'}
                onErrorMessage={'Please try again in some minutes'}
                submitButtonLabel={'Send'}
                emailServiceURL={'https://thehippoapi.netlify.app/.netlify/functions/api/rock-steady-mail'}
                customClass={'form'}
                customButtonClass={'contact-button'}
            />
      </motion.div>
  )
};

export default Contact;