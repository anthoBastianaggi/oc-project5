import React from 'react';
import styles from './FilterMenu.module.scss';
import Button from '../../Button/Button';

const FilterMenu = ({ setCategory, categoryMenu }) => {
    return (
        <nav className={styles.menu}>
            {categoryMenu.map((category, i) => (
                <Button 
                key={category} 
                id={i} 
                type="tertiary" 
                label={category} 
                className={styles.item} 
                onClick={() => setCategory(category)} />
            )).sort()}
        </nav>
    )
}

export default FilterMenu;
