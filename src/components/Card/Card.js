import React from 'react';
import styles from './Card.module.scss';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { faPlus } from '../../../node_modules/@fortawesome/free-solid-svg-icons';
import Link from '../Link/Link';

const Card = ({ image, alt, title, description, category, date, className, link, linkCategory }) => {
    return (
        <div className={cx(styles.card, className)}>
            <div className={styles.container}>  
                <div className={styles.blockImage}>
                    <img src={image} alt={alt} className={styles.image} />
                    <div className={styles.descriptionHover}>
                        <span className={styles.description}>{description}</span>
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.blockContainer}>
                        <div className={styles.blockDescription}>
                            <h2 className={styles.title}>{title}</h2>
                            <div className={styles.description}>
                                <Link href={linkCategory} className={styles.category} label={category} /> / <span className={styles.cardDate}>{date}</span>
                            </div>
                        </div>
                        <div className={styles.blockIcon}>
                            <div className={styles.iconContainer}>
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
