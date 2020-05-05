import React from 'react';
import styles from './Title.module.scss';
import cx from 'classnames';
import PropTypes from 'prop-types';

const titleType = ['h1', 'h2', 'h3','h4', 'h5', 'h6'];
const stylesTitleType = ['stylesH1', 'stylesH2', 'stylesH3', 'stylesH4', 'stylesH5', 'stylesH6'];

const Title = ({as: Element = "h1", value, className = '', stylesTitle = 'stylesH1',  id }) => {
    if(!titleType.includes(Element)) {
        Element = "h1";
    };

    if(!stylesTitleType.includes(stylesTitle)) {
        stylesTitle = "stylesH1";
    };

    return (
        <Element id={id} className={cx(styles.title, styles[stylesTitle], className)}>{value}</Element>
    );
};

Title.propTypes = {
    as: PropTypes.elementType,
    value: PropTypes.string.isRequired,
    className: PropTypes.string,
    stylesTitle: PropTypes.oneOf(stylesTitleType)
}

export default Title;