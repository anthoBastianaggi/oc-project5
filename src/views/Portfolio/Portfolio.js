import React from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Home from '../Portfolio/Sections/Home/Home';
import styles from './Portfolio.module.scss';

const Portfolio = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.content}>
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default Portfolio;
