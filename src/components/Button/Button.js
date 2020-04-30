import React from 'react';
import styles from './Button.module.scss';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const type = ['primary', 'secondary', 'tertiary'];

const Button = ({as: Element = "button", label, icon, iconFlag, type, onClick, className, btnType }) => {
    return (
        <Element className={cx(styles.button, styles[`btn-${type}`], className)} onClick={onClick} type={btnType}>
            {icon && <FontAwesomeIcon icon={icon} />}
            {iconFlag && <Icon name={iconFlag} /> }
            <span className={styles.label}>{label}</span>
        </Element>
    );
}

Button.defaultProps = {
    as: 'button',
    label: null,
    type: 'primary',
    onClick: null,
    className: '',
    btnType: 'button',
    icon: '',
    iconFlag: ''
}

Button.propTypes = {
    as: PropTypes.elementType,
    label: PropTypes.string,
    icon: PropTypes.string,
    iconFlag: PropTypes.string,
    type: PropTypes.oneOf(type),
    onClick: PropTypes.func,
    className: PropTypes.string,
    btnType: PropTypes.string
}

export default Button;
