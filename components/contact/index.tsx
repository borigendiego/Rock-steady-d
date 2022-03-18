import React from 'react';
import { Form } from '../Form';

const Contact = () => {
  return(
      <div className={`flex flex-col justify-center`} id={'CONTACT'}>
            <img 
                src={'/assets/images/READY_TO.png'}
                className={'sm:w-2/3 m-auto'}
            />
            <Form 
                fields={[
                    {
                        name: 'name',
                        type: 'text',
                        label: '',
                        placeholder: 'Name',
                        size: 'half'
                    },
                    {
                        name: 'email',
                        type: 'text',
                        label: '',
                        size: 'half',
                        placeholder: 'Email'
                    },
                    {
                        name: 'subject',
                        type: 'text',
                        label: '',
                        placeholder: 'Subject'
                    },
                    {
                        name: 'message',
                        type: 'textArea',
                        label: '',
                        placeholder: 'Message'
                    },
                ]}
            />
      </div>
  )
};

export default Contact;