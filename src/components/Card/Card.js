import React from 'react';
import styles from './Card.module.scss';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { faPlus } from '../../../node_modules/@fortawesome/free-solid-svg-icons';
import Link from '../Link/Link';

const Card = ({ image, alt, title, description, category, date, className, link, linkCategory }) => {
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
                                <Link href={linkCategory} className={styles.cardCategory} label={category} /> / <span className={styles.cardDate}>{date}</span>
                            </div>
                        </div>
                        <div className={styles.cardIcon}>
                            <div className={styles.cardIconContainer}>
                                <Link href={link} className={styles.icon} icon={faPlus} external />
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
