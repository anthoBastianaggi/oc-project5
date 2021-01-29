import React from 'react';
import PropTypes from 'prop-types';
import Title from '../Title/Title';
import styles from './Section.module.scss';
import cx from 'classnames';

const Section = ({ id, title, subtitle, children, className }) => {
    return (
        <section id={id} className={cx(styles.section, className)} >
            <div className={styles.container}>
                <div className={styles.blockTitle}>
                    <Title as="h2" stylesTitle="stylesH2" className={styles.title}>{title}</Title>
                    <p className={styles.subtitle}>{subtitle}</p>
                    <div className={styles.line}></div>
                </div>
                {children}
            </div>
        </section>
    );
};

Section.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    children: PropTypes.node.isRequired
}

export default Section;