import React from 'react';
import styles from './FilterMenu.module.scss';
import cx from 'classnames';
import Button from '../../Button/Button';

const FilterMenu = ({ setCategory, categoryMenu, display }) => {
    categoryMenu.sort().unshift("Tout");
    
    return (
        <nav className={styles.menu}>
            {categoryMenu.map((category, i) => (
                <Button 
                key={category} 
                id={i} 
                type="tertiary" 
                label={category} 
                className={cx({ [styles.active] : display.displayCategory === undefined ? category === "Tout" :
                display.displayCategory === category }, styles.item)} 
                onClick={() => setCategory(category)} />
            ))}
        </nav>
    )
}

export default FilterMenu;
