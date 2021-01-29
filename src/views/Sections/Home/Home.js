import React, { useState, useEffect } from 'react';
import styles from './Home.module.scss';
import Typed from 'react-typed';
import { servicesSection } from '../../../server/services/services';
import Title from '../../../components/Title/Title';
import Flex from '../../../components/Flex/Flex';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Services from '../Services/Services';
import Project from '../Project/Project';
import Contact from '../Contact/Contact';

const Home = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
      servicesSection.getHome().then(result => setData(result));
  }, []);

  return (
    <>
    <section id="home" className={styles.section}>
      {data.map(({ id, title, description, image }) => (
      <div key={id} className={styles.homepage} style={{ backgroundImage: `url(${require("../../../assets/images/" + image)})` } }>
        <div className={styles.overlay}></div>
        <Flex className={styles.container} center>
          <div key={id} className={styles.content}>
            <Title as="h1" stylesTitle="stylesH1" className={styles.title}>{title}</Title>
            <p className={styles.subtitle}>
              <Typed
              strings={description.split(',')}
              typeSpeed={80}
              backSpeed={30}
              loop 
              backDelay={1100}
              showCursor
              cursorChar="|"
              />           
            </p>
          </div>  
        </Flex>
      </div>  
      ))}
    </section>
    <About />
    <Skills />
    <Services />
    <Project />
    <Contact />
    </>
  );
}

export default Home;