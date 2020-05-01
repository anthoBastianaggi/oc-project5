import React from 'react';
import styles from './Card.module.scss';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '../../../node_modules/@fortawesome/free-solid-svg-icons';

const Card = ({ image, alt, title, description, category, date, className }) => {
    return (
        <div className={cx(styles.card, className)}>
            <div className={styles.cardContainer}>  
                <div className={styles.cardImg}>
                    <img src={image} alt={alt} className={styles.imgFluid} />
                    <div className={styles.cardHoverDescription}>
                        <span className={styles.description}>{description}</span>
                    </div>
                </div>
                <div className={styles.cardContent}>
                    <div className={styles.cardContentContainer}>
                        <div className={styles.cardContentDescription}>
                            <h2 className={styles.cardTitle}>{title}</h2>
                            <div className={styles.cardDescription}>
                                <span className={styles.cardCategory}>{category}</span> / <span className={styles.cardDate}>{date}</span>
                            </div>
                        </div>
                        <div className={styles.cardIcon}>
                            <div className={styles.cardIconContainer}>
                                <FontAwesomeIcon className={styles.icon} icon={faPlus} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Card.propTypes = {
    image: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
    className: PropTypes.string,
    date: PropTypes.string
}

Card.defaultProps = {
    image: '',
    alt: '',
    title: '',
    description: '',
    category: '',
    className: '',
    date: ''
}

export default Card;
