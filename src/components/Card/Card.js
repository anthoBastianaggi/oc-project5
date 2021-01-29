import React from 'react';
import styles from './Card.module.scss';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { faPlus } from '../../../node_modules/@fortawesome/free-solid-svg-icons';
import Link from '../Link/Link';
import Title from '../Title/Title';
import Flex from '../Flex/Flex';
import Button from '../Button/Button';

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
                    <Flex className={styles.blockContainer} center>
                        <div className={styles.blockDescription}>
                            <Title as="h2" stylesTitle="stylesH2" className={styles.title}>{title}</Title>
                            <div className={styles.description}>
                                <Button type="tertiary" onClick={linkCategory} className={styles.category} label={category} /> / <span className={styles.cardDate}>{date}</span>
                            </div>
                        </div>
                        <div className={styles.blockIcon}>
                            <Flex className={styles.iconContainer} center>
                                <Link href={link} className={styles.icon} icon={faPlus} external />
                            </Flex>
                        </div>
                    </Flex>
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
