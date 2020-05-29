import React from 'react';
import styles from './Filter.module.scss';
import FilterMenu from './FilterMenu/FilterMenu';
import FilterResults from './FilterResults/FilterResults';

const Filter = ({ setCategory, data, categoryMenu, display }) => {
  
      return (
        <div className={styles.filter}>
          <FilterMenu categoryMenu={categoryMenu} setCategory={setCategory} />
          <FilterResults data={data} display={display} />
        </div>
      )
}

export default Filter;
