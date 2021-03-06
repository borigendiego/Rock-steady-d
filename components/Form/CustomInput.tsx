import React from 'react';


const CustomInput = (
    {
        fieldName,
        fieldType,
        label,
        handleChange,
        value,
        validations,
        errors,
        size,
        placeholder
    }) => {
    return (
        <section className={size === 'half' ? `item half w-1/2 mb-4`  : `item mb-4`}>
            <label className={'contact-label'}>{label}</label>
            <input
                type={fieldType}
                name={fieldName}
                id={fieldName}
                className={errors && errors[fieldName] ? `input error` : `input`}
                onChange={(event) => handleChange(event, validations)}
                value={value}
                placeholder={placeholder}
            />
            <span className={'error-message'}>{errors ? errors[fieldName] : null}</span>
        </section>
    )
};

export default CustomInput
