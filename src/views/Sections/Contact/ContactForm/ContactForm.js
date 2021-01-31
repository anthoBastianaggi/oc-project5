import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import styles from './ContactForm.module.scss';
import Button from '../../../../components/Button/Button';
import cx from 'classnames';
import InputField from '../../../../components/InputField/InputField';
import { servicesSection } from '../../../../server/services/services';

const ContactForm = () => {
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = values => {
        setValidation(true); 
        servicesSection.postContact(values.name, values.email, values.object, values.message);
        return values;
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
                    maxLength: 50
                })}
                name="name"
                placeholder="Nom"
                error={errors.name}
                errorMessage={
                    errors.name && errors.name.type === "required" ? 
                    <span className={styles.errorMessages}>Le nom est requis</span> :
                    <span className={styles.errorMessages}>Le format du nom est invalide</span>
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
                    <span className={styles.errorMessages}>L'email est requis</span> :
                    <span className={styles.errorMessages}>L'adresse email est invalide</span>
                }
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                />
                <InputField 
                type="text" 
                ref={register({ required: true })}
                name="object"
                placeholder="Objet"
                error={errors.object}
                errorMessage={
                    errors.object && errors.object.type === "required" && <span className={styles.errorMessages}>L'objet est requis</span>  
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
                    {errors.message && <span className={styles.errorMessage}>Le message est requis</span>}
                </div>
                <Button btnType="submit" type="primary" label="Envoyer le message" />
            </form>
        </div>
    );
}

export default ContactForm;