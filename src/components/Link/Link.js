import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Link.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Link = ({ label, icon, id, className, href, target, external }) => {
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

Link.defaultProps = {
    label: null,
    className: '',
    href: '',
    external: false,
    target: '_self',
    icon: null
}

Link.propTypes = {
    label: PropTypes.string,
    icon: PropTypes.object,
    className: PropTypes.string,
    external: PropTypes.bool,
    target: PropTypes.string,
    href: PropTypes.string
}

export default Link;