import React from 'react';
import styles from './Sidebar.module.scss';
import PropTypes from 'prop-types';
import cx from 'classnames';

const renderMenuItems = (items) => (
    <ul className={styles.navigationRight}>
    {items.map((item) => (   
        <li key={item.id} className={styles.menuListItems}>
            <a href={item.href} className={styles.items}>{item.label}</a>
        </li>
    ))}
</ul>
);

const Sidebar = (props) => {
    const { opened, data, className } = props;

    function useLockBodyScroll() {
        if(opened) {
            document.body.style.overflow = "hidden";
        } else {
            if(typeof window !== "undefined") {
                document.body.style.overflow = "auto";
            }
        }
    }

    useLockBodyScroll();

    return (
        <div className={cx(className, { [styles.sidebarActive]: opened })}>
            <div className={styles.sidebarMenu} ref={(ref) => props.setSidebarRef(ref)}>
                <div className={styles.sidebarContainer}>
                    {renderMenuItems(data)}
                </div>
            </div>
        </div>
    );
}

Sidebar.propTypes = {
    data: PropTypes.array,
    className: PropTypes.string,
    opened: PropTypes.bool,
    setSidebarRef: PropTypes.func
};

export default Sidebar;
