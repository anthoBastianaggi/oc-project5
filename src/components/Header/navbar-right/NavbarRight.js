import React from 'react';
import styles from './NavbarRight.module.scss';
import PropTypes from 'prop-types';
import cx from 'classnames';

const renderMenuItems = (items) => (
    <ul className={styles.navigationRight}>
    {items.map((item) => (   
        <li key={item.id} className={styles.menuListItems}>
            <a href={item.href} className={cx({ [styles.active] : item.isActive }, styles.items)}>{item.label}</a>
        </li>
    ))}
</ul>
);

const NavbarRight = (props) => {
    const { data }  = props;
    return (
        <div className={styles.navbarRight}>
            {renderMenuItems(data)}
        </div>
    );
};

NavbarRight.propTypes = {
    data: PropTypes.array
};

export default NavbarRight;
