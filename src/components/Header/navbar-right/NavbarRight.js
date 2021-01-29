import React from 'react';
import styles from './NavbarRight.module.scss';
import PropTypes from 'prop-types';
import cx from 'classnames';
import LinkHeader from '../../LinkHeader/LinkHeader';
import Flex from '../../Flex/Flex';

const renderMenuItems = ( props ) => {
    const { data, scrolled }  = props;
    return (
        <ul className={styles.navigationRight}>
        {data.map((item) => (   
            <li key={item.id} className={styles.menuListItems}>
                <LinkHeader 
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
        <Flex className={styles.navbarRight} center>
            {renderMenuItems(props)}
        </Flex>
    );
};

NavbarRight.propTypes = {
    data: PropTypes.array
};

export default NavbarRight;
