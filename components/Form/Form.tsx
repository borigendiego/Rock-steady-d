import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
//Hook
import useContactForm from './useContactForm';
//Component
import MyInput from './CustomInput';
import styles from './form.module.scss';

type MyCustomFormPropsType = {
    fields: any,
    onSuccessMessage: any,
    onErrorMessage: any,
    customClass: any,
    customButtonClass: any,
    emailServiceURL: any,
    submitButtonLabel: any,
    afterSubmitAction?: any,
}

const MyCustomForm = ({
    fields,
    onSuccessMessage,
    onErrorMessage,
    customClass,
    customButtonClass,
    emailServiceURL,
    submitButtonLabel,
    afterSubmitAction
}:MyCustomFormPropsType) => {
    const [messageSent, setMessageSent] = useState('');
    const [isLoading, setIsloading] = useState<boolean>(false);
    const [messageDescription, setMessageDescription] = useState('');
    const initialValues = {
        name: '',
        customerEmail: '',
        subject: '',
        message: '',
    };

    const {
        values,
        handleChange,
        errors,
        handleSubmit,
        setValues,
    } = useContactForm({
        initialValues,
        fields,
        onSubmit: () => {
            setIsloading(true);
            const section = window.localStorage.getItem('section') || 'Contact form'

            axios.post(
                emailServiceURL,
                {
                    subject: values.subject,
                    message: values.message,
                    name: values.name,
                    customerEmail: values.customerEmail,
                    section: section,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'accept': 'application/json, text/plain, */*',
                    },
                }
            )
                .then(function (response) {
                    setIsloading(false);
                    setValues(initialValues);
                    setMessageSent('succeed');
                    if(afterSubmitAction) {
                        afterSubmitAction();
                    }
                })
                .catch(function (error) {
                    setIsloading(false);
                    console.log(">>Error", error);
                    setMessageDescription(error.toString());
                    setMessageSent('error');
                });
        }
    });

    const renderSentMessage = () => {
        if (messageSent === 'succeed') {
            return <div className={`message succeed w-full text-center mb-6`}>
                <h2 className={'mb-4'}>Thank you!</h2>
                <p>{onSuccessMessage}</p>
            </div>
        }
        if (messageSent === 'error') {
            return <div className={`message error w-full text-center mb-6`}>
                <h2 className={'mb-4 text-red-500'}>Something went wrong</h2>
                <p>{onErrorMessage}</p>
                <p>{messageDescription}</p>
            </div>
        }
        return null;
    };

    return (
        <form 
            className={`${customClass} mx-auto`}
            onSubmit={(event) => handleSubmit(event)}
        >
            {
                fields.map((field) => {
                    const { name, type, label, validations, selectOptions, size, placeholder } = field;

                    switch (type) {
                        case 'text':
                            return (
                                <MyInput
                                    key={name}
                                    fieldName={name}
                                    fieldType={'text'}
                                    label={label}
                                    handleChange={handleChange}
                                    value={values[name]}
                                    validations={validations}
                                    errors={errors}
                                    size={size}
                                    placeholder={placeholder}
                                />
                            );
                        case 'textArea':
                            return (
                                <section className={'item'} key={name}>
                                    <label className={'contact-label'}>{label}</label>
                                    <textarea
                                        name={name}
                                        id={name}
                                        value={values[name]}
                                        rows={10}
                                        cols={40}
                                        className={'input_box resize-none'}
                                        placeholder={placeholder}
                                        onChange={(e) => handleChange(e, [])}
                                    />
                                </section>
                            );
                        case 'select':
                            return (
                                <select key={name}>
                                    {
                                        selectOptions.map(option => <option value={option.value}>{option.label}</option>)
                                    }
                                </select>
                            );
                        default:
                            return (
                                <MyInput
                                    key={name}
                                    fieldName={name}
                                    fieldType={'text'}
                                    label={label}
                                    size={size}
                                    handleChange={handleChange}
                                    value={values[name]}
                                    validations={validations}
                                    errors={errors}
                                    placeholder={placeholder}
                                />
                            )
                    }
                })
            }
            {renderSentMessage()}
            <section className={`${styles.item} text-center`}>
                <input
                    type={'submit'}
                    value={submitButtonLabel ? submitButtonLabel : 'SEND'}
                    className={`${customButtonClass} button py-4 px-20 text-white cursor-pointer`}
                    disabled={isLoading}
                />
            </section>
        </form>
    )
};

MyCustomForm.propTypes = {
    fields: PropTypes.array,
    onSuccessMessage: PropTypes.string,
    onErrorMessage: PropTypes.string,
    customClass: PropTypes.string,
    submitButtonLabel: PropTypes.string,
    emailServiceURL: PropTypes.string,
    placeholder: PropTypes.string,
};

MyCustomForm.defaultProps = {
    fields: [{
        name: 'name',
        type: 'text',
        label: 'Name',
        placeholder: 'Name'
    }],
    onSuccessMessage: 'Success!',
    onErrorMessage: 'Something went wrong.'
};

export default MyCustomForm
