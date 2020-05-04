import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Link.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Link = ({ label, icon, id, className, href, target = '_self', external = false }) => {
    return (
        <a 
        href={href} 
        id={id}
        className={cx(styles.link, className)} 
        target={external ? '_blank' : target}
        >
            {icon && <FontAwesomeIcon className={styles.icon} icon={icon} />}
            <span className={styles.label}>{label}</span>
        </a>
    )
}

Link.propTypes = {
    label: PropTypes.string,
    icon: PropTypes.string,
    className: PropTypes.string,
    external: PropTypes.bool,
    target: PropTypes.string
}

export default Link;