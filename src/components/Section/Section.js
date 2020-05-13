import React from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.scss';

const Section = ({ id, title, subtitle, children }) => {
    return (
        <section id={id} className={styles.section}>
            <div className={styles.container}>
                <div className={styles.blockTitle}>
                    <h2 className={styles.title}>{title}</h2>
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
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

export default Section;