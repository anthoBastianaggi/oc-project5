import React from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Title from "../../components/Title/Title";
import Card from '../../components/Card/Card';
import styles from './Portfolio.module.scss';

const Portfolio = () => {
  return (
    <div className={styles.layout}>
        <Header />
        <div className={styles.content}>
            <Title as="h1" stylesTitle="stylesH1" value="Salut les gens" />
            <Card 
              image="https://i.ebayimg.com/images/g/IEIAAOSwv-NWU175/s-l300.jpg" 
              alt="kirito" 
              title="Bienvenue sur le site" 
              description="Ceci est mon premier composant card."
              category="web site" 
              date="1 mai 2020" 
            />
        </div>
        <Footer />
    </div>
  );
}

export default Portfolio;
