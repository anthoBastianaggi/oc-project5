import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import styles from './ContactForm.module.scss';
import Button from '../../../../../components/Button/Button';
import cx from 'classnames';
import InputField from '../../../../../components/InputField/InputField';

const ContactForm = () => {
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = values => {
        setValidation(true); 
        return console.log(values);
    }

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [object, setObject] = useState('');
    const [message, setMessage] = useState('');
    const [validation, setValidation] = useState(false);

    return (
        <div className={styles.content}>
            {validation && <span className={styles.successMessage}>Votre message a bien été envoyé.</span> }
            <form className={styles.contactForm} method="post" onSubmit={handleSubmit(onSubmit)}>
                <InputField 
                type="text" 
                ref={register({ 
                    required: true,
                    pattern: {
                        value: /^[a-zA-Z]+$/
                    } 
                })}
                name="name"
                placeholder="Name"
                error={errors.name}
                errorMessage={
                    errors.name && errors.name.type === "required" ? 
                    <span className={styles.errorMessages}>Name is required</span> :
                    <span className={styles.errorMessages}>Invalid name format</span>
                }
                onChange={(e) => setName(e.target.value)}
                value={name}
                />
                <InputField 
                type="email" 
                ref={register({ 
                    required: true,
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                    } 
                })}
                name="email"
                placeholder="Email"
                error={errors.email}
                errorMessage={
                    errors.email && errors.email.type === "required" ? 
                    <span className={styles.errorMessages}>Email is required</span> :
                    <span className={styles.errorMessages}>Invalid email address</span>
                }
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                />
                <InputField 
                type="text" 
                ref={register({ required: true })}
                name="object"
                placeholder="Object"
                error={errors.object}
                errorMessage={
                    errors.object && errors.object.type === "required" && <span className={styles.errorMessages}>Object is required</span>  
                }
                onChange={(e) => setObject(e.target.value)}
                value={object}
                />
                <div className={styles.formGroup}>
                    <textarea 
                    name="message" 
                    ref={register({ required: true })}
                    type="text" 
                    className={cx(styles.textarea, { [styles.error]: errors.message })}
                    placeholder="Message" 
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    />
                    {errors.message && <span className={styles.errorMessage}>Message is required</span>}
                </div>
                <Button btnType="submit" type="primary" label="Send Message" />
            </form>
        </div>
    );
}

export default ContactForm;