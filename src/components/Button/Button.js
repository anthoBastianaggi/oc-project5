import React from 'react';
import styles from './Button.module.scss';
import cx from 'classnames';
import PropTypes from 'prop-types';

const type = ['primary', 'secondary', 'tertiary'];

const Button = ({as: Element = "button", children, type, onClick, className, btnType }) => {
    return (
        <Element className={cx(styles.button, styles[`btn-${type}`], className)} onClick={onClick} type={btnType}>
            {children}
        </Element>
    );
}

Button.defaultProps = {
    as: 'button',
    children: null,
    type: 'primary',
    onClick: null,
    className: '',
    btnType: 'button'
}

Button.propTypes = {
    as: PropTypes.elementType,
    children: PropTypes.node,
    icon: PropTypes.string,
    type: PropTypes.oneOf(type),
    onClick: PropTypes.func,
    className: PropTypes.string,
    btnType: PropTypes.string
}

export default Button;
