import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './LinkHeader.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LinkHeader = ({ label, icon, id, className, href }) => {
    return (
        <a 
        href={href} 
        id={id}
        className={cx(styles.linkHeader, className)} 
        ref={(element) => {
            if (element !== null) {
                const content = document.getElementById('content');
                element.addEventListener('click', function() {
                    window.scrollTo({
                        top: content.children[id].offsetTop - 96,
                        behavior: 'smooth',
                    });
                })
            }
        }}
        >
            {icon && <FontAwesomeIcon className={styles.icon} icon={icon} />}
            <span className={styles.label}>{label}</span>
        </a>
    )
}

LinkHeader.defaultProps = {
    label: null,
    className: '',
    href: '',
    icon: null
}

LinkHeader.propTypes = {
    label: PropTypes.string,
    icon: PropTypes.object,
    className: PropTypes.string,
    href: PropTypes.string
}

export default LinkHeader;