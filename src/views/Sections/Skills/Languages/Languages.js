import React from 'react';
import styles from './Languages.module.scss';
import ProgressBar from '../../../../components/ProgressBar/ProgressBar';
import Title from '../../../../components/Title/Title';

const Languages = ( { data }) => {   
    let title =  data.filter((item) => item.category.name === "Languages").map(({ category }) => category.name).slice(0, 1);

    return(
        <div className={styles.blockItem}>
            <div className={styles.blockContainer}>     
                <div className={styles.titleContainer}>
                    <Title as="h3" stylesTitle="stylesH3" className={styles.title}>{title}</Title>
                </div>  
                {data.filter((item) => item.category.name === "Languages").map(({ id, name, percentage }) => (
                    <ProgressBar  key={id} percentage={percentage} title={name} /> 
                ))}
            </div>     
        </div>
    );
};

export default Languages;