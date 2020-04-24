import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Flex.module.scss';

const Flex = ({ as: Element = "div", between, center, column, end, wrap, grow, className, children, ...props }) => {
    return (
        <Element className={cx(styles.flex, className, {
            [styles.between] : between,
            [styles.center]: center,
            [styles.column]: column,
            [styles.end]: end,
            [styles.wrap]: wrap,
            [styles.grow]: grow
        })}
        {...props}>
            {children}
        </Element>
    )
}

Flex.propTypes = {
    as: PropTypes.elementType,
    between: PropTypes.bool,
    center: PropTypes.bool,
    column: PropTypes.bool,
    end: PropTypes.bool,
    wrap: PropTypes.bool,
    grow: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node
};

Flex.defaultProps = {
    as: "div",
    between: false,
    center: false,
    column: false,
    end: false,
    wrap: false,
    grow: false,
    className: "",
    chilren: null
};

export default Flex;