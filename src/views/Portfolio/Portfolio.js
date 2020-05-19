import React from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Home from '../Portfolio/Sections/Home/Home';
import About from '../Portfolio/Sections/About/About';
import Skills from '../Portfolio/Sections/Skills/Skills';
import Services from '../Portfolio/Sections/Services/Services';
import Project from '../Portfolio/Sections/Project/Project';
import styles from './Portfolio.module.scss';

const Portfolio = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.content}>
        <Home />
        <About />
        <Skills />
        <Services />
        <Project />
      </div>
      <Footer />
    </div>
  );
}

export default Portfolio;
