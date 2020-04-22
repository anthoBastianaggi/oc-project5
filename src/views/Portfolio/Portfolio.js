import React from 'react';
import Header from "../../components/Header/Header";
import styles from './Portfolio.module.scss';

const Portfolio = () => {
  return (
    <div className={styles.layout}>
        <Header />
        <div className={styles.content}>
            Bonjour les gens
        </div>
    </div>
  );
}

export default Portfolio;
