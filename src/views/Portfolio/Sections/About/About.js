import React from 'react';
import styles from './About.module.scss';
import ImgProfile from '../../../../assets/images/antho.jpg';
import Button from '../../../../components/Button/Button';

const About = () => {
  return (
    <section id="about" className={styles.sectionAbout}>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutContainerTitle}>
            <div className={styles.contentTitle}>
                <h2 className={styles.title}>About Me</h2>
                <p className={styles.subtitle}>Une petite présentation pour mieux me connaître </p>
                <div className={styles.line}></div>
            </div>
        </div>
        <div className={styles.aboutContainerContent}>
            <div className={styles.aboutContent}>
                <div className={styles.wrapper}>
                    <div className={styles.columnLeft}>
                        <div className={styles.itemContent} style={{ order: "1", marginBottom: "2.5rem" }}>
                            <div className={styles.itemContainer}>
                                <div className={styles.imageContainer}>
                                    <img src={ImgProfile} alt="" />
                                </div>
                                <div className={styles.aboutInfoContainer}>
                                    <p className={styles.info}>
                                        <span className={styles.infoTitle}>Name : </span>
                                        <span className={styles.infoDescription}>Bastianaggi Anthony</span>
                                    </p>
                                    <p className={styles.info}>
                                        <span className={styles.infoTitle}>Birthdate : </span>
                                        <span className={styles.infoDescription}>23 ans</span>
                                    </p>
                                    <p className={styles.info}>
                                        <span className={styles.infoTitle}>Profile : </span>
                                        <span className={styles.infoDescription}>Developpeur Front-End Junior</span>
                                    </p>
                                    <p className={styles.info}>
                                        <span className={styles.infoTitle}>Status : </span>
                                        <span className={styles.infoDescription}>Etudiant / Salarié</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.itemContent} style={{ order: "3" }}>
                            <div className={styles.itemContainer}>
                                <div className={styles.aboutBtnInfoContainer}>
                                    <div className={styles.blockInfo}>
                                        <p className={styles.info}>
                                            <span className={styles.infoTitle}>Cliquer ici pour visualiser mon cv : </span>
                                        </p>
                                        <div className={styles.containerButton}>
                                            <Button className={styles.btnVisual} type="primary" label="Visualiser" />
                                        </div>
                                    </div>
                                    <div className={styles.blockInfo}>
                                        <p className={styles.info}>
                                            <span className={styles.infoTitle}>Cliquer ici pour télécharger mon cv : </span>
                                        </p>
                                        <div className={styles.containerButton}>
                                            <Button className={styles.btnDownload} type="primary" label="Télécharger" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.columnRight}>
                        <div className={styles.itemContent} style={{ order: "2" }}>
                            <p className={styles.item}>
                                Je travaille actuellement chez Qwant Music situé sur Ajaccio en Corse et je suis une 
                                formation de Développeur Web Junior sur OpenClassrooms. 
                            </p>
                            <p className={styles.item}>
                                Ce portfolio a pour but de présenter les diiférents services proposés ainsi que les projets 
                                sur lesquels j'ai travaillé. Vous pouvez également visualiser mon CV et le télécharger.
                            </p>
                            <p className={styles.item}>
                                Si vous avez une question, ou si vous avez simplement besoin d'un renseignement, vous pouvez 
                                me contacter en cliquant ici: 
                            </p>
                            <div className={styles.itemContainerButton}>
                                <Button className={styles.btnContactMe} type="primary" label="Contactez-moi" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default About;