import React from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Title from "../../components/Title/Title";
import styles from './Portfolio.module.scss';

const Portfolio = () => {
  return (
    <div className={styles.layout}>
        <Header />
        <div className={styles.content}>
            <Title as="h1" stylesTitle="stylesH1" value="Salut les gens" />
        </div>
        <Footer />
    </div>
  );
}

export default Portfolio;
