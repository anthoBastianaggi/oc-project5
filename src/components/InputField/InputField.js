import React, { useState, useEffect, forwardRef } from 'react';
import PropTypes from 'prop-types';
import styles from './InputField.module.scss';
import cs from 'classnames';

const InputField = forwardRef(
    ({ 
        type = 'text', 
        valid = false, 
        error = false , 
        errorMessage = '',
        className = '', 
        onChange = undefined, 
        placeholder = '', 
        name = '',
        defaultValue = '' 
    }, ref) => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
        if (onChange) {
            onChange(e)
        }
    }

    useEffect(() => {
        setValue(defaultValue);
    }, [defaultValue]);

    return (
        <div className={styles.formGroup}>
            <input 
            type={type}  
            name={name} 
            ref={ref}
            placeholder={placeholder} 
            onChange={handleChange}
            value={value}
            className={cs(styles.input, className, {
                [styles.valid]: valid,
                [styles.error]: error
            })}  
            />        
            {error && ( <span className={styles.errorMessage}>{errorMessage}</span> )}
        </div>   
    );
})

InputField.propTypes = {
    type: PropTypes.oneOf(['text', 'email']),
    valid: PropTypes.bool,
    error: PropTypes.object,
    errorMessage: PropTypes.node,
    className: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export default InputField;