import React from 'react';
import styles from './About.module.scss';
import ImgProfile from '../../../../assets/images/antho.jpg';
import Button from '../../../../components/Button/Button';
import Section from '../../../../components/Section/Section';
import cx from 'classnames';

const About = () => {
    const info = [
        { id: "infoName", name: "Name : ", label: "Bastianaggi Anthony" },
        { id: "infoBirthdate", name: "Birthdate : ", label: "25 ans" },
        { id: "infoProfile", name: "Profile : ", label: "Developpeur Front-End Junior" },
        { id: "infoStatus", name: "Status : ", label: "Etudiant / Salarié" },
    ];

    const infoButton = [
        { id: "visualCv", name: "Cliquer ici pour visualiser mon cv : ", label: "Visualiser" },
        { id: "downloadCv", name: "Cliquer ici pour télécharger mon cv : ", label: "Télécharger" }
    ];

    const infoDescription = [
        { id: "desc1", label: "Je travaille actuellement chez Qwant Music situé sur Ajaccio en Corse et je suis une formation de Développeur Web Junior sur OpenClassrooms." },
        { id: "desc2", label: "Ce portfolio a pour but de présenter les diiférents services proposés ainsi que les projets sur lesquels j'ai travaillé. Vous pouvez également visualiser mon CV et le télécharger." },
        { id: "desc3", label: "Si vous avez une question, ou si vous avez simplement besoin d'un renseignement, vous pouvez me contacter en cliquant ici: " }
    ];

    const blockInfo = () => {
        return (
            <div className={styles.blockInfo}>
                {info.map((item) => (
                    <p key={item.id} className={styles.info}>
                        <span className={styles.title}>{item.name}</span>
                        <span className={styles.description}>{item.label}</span>
                    </p>
                ))}    
            </div>
        );
    };

    const blockInfoButton = () => {
        return (
            <div className={cx(styles.blockInfo, styles.infoButton)}>
                {infoButton.map((item) => (
                <div key={item.id} className={styles.blockInfoContainer}>
                    <p className={styles.info}>
                        <span className={styles.title}>{item.name} </span>
                    </p>
                    <div className={styles.containerButton}>
                        <Button className={styles.btnInfo} type="primary" label={item.label} />
                    </div> 
                </div>
                ))}
            </div>
        );
    };

    const blockDescription = () => {
        return (
            <div className={styles.blockInfo}>
                {infoDescription.map((item) => (
                <p key={item.id} className={styles.info}>
                    <span className={styles.desc}>{item.label}</span>
                </p>
                 ))}
                <div className={styles.containerButton}>
                    <Button className={styles.btnInfo} type="primary" label="Contactez-moi" />
                </div> 
            </div>
        );
    };
       
  return (
   <Section id="about" title="About Me" subtitle="Une petite présentation pour mieux me connaître">
     <div className={styles.blockContent}>
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={cx(styles.column, styles.left )}>
                    <div className={styles.blockItem} style={{ order: "1", marginBottom: "2.5rem" }}>
                        <div className={styles.blockContainer}>
                            <div className={styles.imageContainer}>
                                <img src={ImgProfile} alt="" />
                            </div>
                            {blockInfo()}
                        </div>
                    </div>
                    <div className={styles.blockItem} style={{ order: "3" }}>
                        <div className={styles.blockContainer}>
                            {blockInfoButton()}
                        </div>
                    </div>
                </div>
                <div className={cx(styles.column, styles.right )}>
                    <div className={styles.blockItem} style={{ order: "2" }}>
                        <div className={styles.blockContainer}>
                            {blockDescription()}
                        </div>
                    </div>
                 </div>
            </div>
        </div>
     </div>
    </Section>
  );
}

export default About;