import React from 'react';
import styles from './ServicesCard.module.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Title from '../Title/Title';

const ServicesCard = ({ title, description, icon }) => {
    return (
        <div className={styles.card}>
            <div className={styles.container}>  
                <div className={styles.blockIcon}>
                   <div className={styles.iconContainer}>
                       <FontAwesomeIcon className={styles.icon} icon={icon} />
                   </div>
                </div>
                <div className={styles.content}>
                  <Title as="h3" stylesTitle="stylesH3" className={styles.title}>{title}</Title>
                  <p className={styles.description}>{description}</p>
                </div>
            </div>
        </div>
    );
}

ServicesCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired
}

ServicesCard.defaultProps = {
    title: '',
    description: ''
}

export default ServicesCard;
