import React from 'react';
import styles from './Home.module.scss';
import Typed from 'react-typed';
import Background from '../../../../assets/images/homepage.jpg';

const Home = () => {
  return (
    <section id="home" className={styles.sectionHome} style={{backgroundImage: `url(${Background})` }}>
        <div className={styles.overlay}></div>
        <div className={styles.homeContent}>
            <div className={styles.homeContainer}>
                <h1 className={styles.title}>Développeur Web Junior</h1>
                <p className={styles.subtitle}>
                    <Typed
                    strings={[
                    'Bonjour et bienvenue sur mon site',
                    'Venez découvrir mon parcours professionnel',
                    'Mes services proposés',
                    'Ainsi que mes projets réalisés.']}
                    typeSpeed={80}
                    backSpeed={30}
                    loop 
                    backDelay={1100}
                    showCursor
                    cursorChar="|"
                    />           
                </p>
            </div>
        </div>
    </section>
  );
}

export default Home;