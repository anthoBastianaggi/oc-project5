import React from 'react';
import styles from './NavbarRight.module.scss';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Link from '../../Link/Link';

const renderMenuItems = ( props ) => {
    const { data, scrolled }  = props;
    return (
        <ul className={styles.navigationRight}>
        {data.map((item) => (   
            <li key={item.id} className={styles.menuListItems}>
                <Link 
                id={item.id}
                href={item.href} 
                className={cx({ [styles.active] : item.isActive }, { [styles.itemsScroll]: scrolled }, styles.items)} 
                label={item.label} 
                />
            </li>
        ))}
    </ul>
    )  
};

const NavbarRight = (props) => { 
    return (
        <div className={styles.navbarRight}>
            {renderMenuItems(props)}
        </div>
    );
};

NavbarRight.propTypes = {
    data: PropTypes.array
};

export default NavbarRight;
