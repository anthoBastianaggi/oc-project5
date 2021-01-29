import React, { useEffect, useState } from 'react';
import styles from './Contact.module.scss';
import Section from '../../../components/Section/Section';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import ContactForm from './ContactForm/ContactForm';
import { servicesSection } from '../../../server/services/services';
import Flex from '../../../components/Flex/Flex';
import Title from '../../../components/Title/Title';

const Contact = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        servicesSection.getAbout().then(result => setData(result))
    }, []);

    const blockInfo = () => {
        return (
        <div className={styles.blockContent}>
            <div className={styles.blockInfo}>
                <div className={styles.infoTitleContainer}>
                    <Title as="h4" stylesTitle="stylesH4" className={styles.infoTitle}>Informations</Title>
                </div>
                <div className={styles.infoContainer}>
                    <span className={styles.info}>
                        Vous pouvez utiliser les informations suivantes ou le formulaire de contact ci-dessous pour me contacter.
                    </span>
                </div>
                <div className={styles.infoTitleContainer}>
                    <Title as="h4" stylesTitle="stylesH4" className={styles.infoTitle}>Contactez moi</Title>
                </div>
                {data.map(({ id, address, postal_code, city, country, phone_number, email }) => (
                <div key={id} className={styles.infoContainer}>
                    <div className={styles.address}>
                        <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.icon} />
                        <span className={styles.label}>{address + ' ' + postal_code + ' ' + city + ', ' + country}</span>
                    </div>
                    <div className={styles.phone}>
                        <FontAwesomeIcon icon={faPhoneAlt} className={styles.icon} />
                        <span className={styles.label}>{phone_number}</span>
                    </div>
                    <div className={styles.email}>
                        <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
                        <span className={styles.label}>{email}</span>
                    </div>
                </div>
                ))}        
            </div>
        </div>
        )
    }
    return (
    <Section id="contact" title="Contact" subtitle="N'hésitez pas à me contacter pour plus d'informations" className={styles.sectionContact}>
        <Flex className={styles.content} wrap>
            <div className={styles.container}>
                <Flex className={styles.block} wrap>
                    <div className={styles.blockItem}>
                        <div className={styles.blockContainer}>
                            <div className={styles.titleContainer}>
                                <Title as="h3" stylesTitle="stylesH3" className={styles.title}>Envoyez-moi un message</Title>
                            </div>
                            <ContactForm />
                        </div>
                    </div>
                    <div className={styles.blockItem}>
                        <div className={styles.blockContainer}>
                            <div className={styles.titleContainer}>
                                <Title as="h3" stylesTitle="stylesH3" className={styles.title}>Entrer en contact</Title>
                            </div>
                            {blockInfo()}
                        </div>
                    </div>
                </Flex>
            </div>
        </Flex>
    </Section>
    );
}

export default Contact;