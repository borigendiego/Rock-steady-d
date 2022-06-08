import React from 'react';
import { Form } from '../Form';
import { required, email } from './fieldValidations';
import Image from 'next/image';

const Contact = () => {
  return(
      <div className={'flex flex-col justify-center'} id={'CONTACT'}>
            <Image
                src={'/assets/images/READY_TO.png'}
                alt={'Ready to'}
                width={800}
                height={600}
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
            />
      </div>
  )
};

export default Contact;