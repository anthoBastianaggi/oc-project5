import React from 'react';
import styles from './Contact.module.scss';
import Section from '../../../../components/Section/Section';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import ContactForm from './ContactForm/ContactForm';

const Contact = () => {
      const blockInfo = () => {
          return (
            <div className={styles.blockContent}>
                 <div className={styles.blockInfo}>
                    <div className={styles.infoTitleContainer}>
                        <h4 className={styles.infoTitle}>Informations</h4>
                    </div>
                    <div className={styles.infoContainer}>
                        <span className={styles.info}>
                            Vous pouvez utiliser les informations suivantes ou le formulaire de contact ci-dessous pour me contacter.
                        </span>
                    </div>
                    <div className={styles.infoTitleContainer}>
                        <h4 className={styles.infoTitle}>Contact Me</h4>
                    </div>
                    <div className={styles.infoContainer}>
                        <div className={styles.address}>
                            <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.icon} />
                            <span className={styles.label}>
                                ROUTE D'AFA, LIEU DIT U VANGONI, 20167 APPIETTO
                          </span>
                        </div>
                        <div className={styles.phone}>
                            <FontAwesomeIcon icon={faPhoneAlt} className={styles.icon} />
                            <span className={styles.label}>
                                06.32.62.99.06
                          </span>
                        </div>
                        <div className={styles.email}>
                            <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
                            <span className={styles.label}>
                                a.bastianaggi@gmail.com
                          </span>
                        </div>
                    </div>
                </div>
            </div>
          )
      }
    return (
    <Section id="contact" title="Contact" subtitle="N'hésitez pas à me contacter pour plus d'informations" className={styles.sectionContact}>
        <div className={styles.content}>
            <div className={styles.container}>
                <div className={styles.block}>
                    <div className={styles.blockItem}>
                        <div className={styles.blockContainer}>
                            <div className={styles.titleContainer}>
                                <h3 className={styles.title}>Send Message Us</h3>
                            </div>
                            <ContactForm />
                        </div>
                    </div>
                    <div className={styles.blockItem}>
                        <div className={styles.blockContainer}>
                            <div className={styles.titleContainer}>
                                <h3 className={styles.title}>Get in Touch</h3>
                            </div>
                            {blockInfo()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Section>
    );
}

export default Contact;