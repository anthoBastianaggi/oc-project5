import React from 'react';
import styles from './FilterResults.module.scss';
import Card from '../../Card/Card';

const FilterResults = ({ data, display }) => {
    return (
        <div className={styles.item}>
            {data.filter(({ category }) =>
            display.displayCategory === undefined ? display === "All" :
            display.displayCategory === category || display.displayCategory === "All" 
            ).map((item) => (
                <Card 
                key={item.id} 
                image={item.image} 
                alt={item.alt} 
                title={item.title} 
                description={item.description} 
                category={item.categoryItem} 
                date={item.date} 
                link={item.link} />
            ))}  
        </div>
    )
}

export default FilterResults;
