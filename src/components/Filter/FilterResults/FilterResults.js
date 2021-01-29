import React from 'react';
import styles from './FilterResults.module.scss';
import Card from '../../Card/Card';
import Flex from '../../Flex/Flex';

const FilterResults = ({ data, display, setCategory }) => {
    function dateFormat(data) {
        const months = ["Janv.", "Févr.", "Mars","Avr.", "Mai", "Juin", "Juill.", "Août", "Sept.", "Oct.", "Nov.", "Déc."];
        const day = new Date(data).getDate();
        const month = new Date(data).getMonth();
        const year = new Date(data).getFullYear();
        
        return  day + " " + months[month] + " " + year;
    }

    return (
        <Flex className={styles.item} wrap>
            {data.filter(({ category }) =>
            display.displayCategory === undefined ? display === "Tout" :
            display.displayCategory === category.name || display.displayCategory === "Tout" 
            ).map(({ id, image, alt, name, description, category, link, created_at }) => (
                <Card 
                key={id} 
                image={require(`../../../assets/images/${image}`)} 
                alt={alt} 
                title={name} 
                description={description} 
                category={category.name} 
                date={dateFormat(created_at)} 
                link={link}
                linkCategory={() => setCategory(category.name)} 
                />
            ))}  
        </Flex>
    )
}

export default FilterResults;
