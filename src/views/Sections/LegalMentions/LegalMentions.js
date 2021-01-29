import React from 'react';
import styles from './LegalMentions.module.scss';
import Section from '../../../components/Section/Section';
import Flex from '../../../components/Flex/Flex';
import Title from '../../../components/Title/Title';

const LegalMentions = () => {
    return (
        <Section id="legal-mentions" className={styles.legalMentions} title="Mentions Légales" subtitle="En vigueur au 26/01/2021">
        <Flex className={styles.blockContent} wrap>
           <div className={styles.container}>
               <Flex className={styles.wrapper}>
                    <div className={styles.blockInfo}>
                        <div className={styles.infoTitleContainer}>
                            <Title as="h2" stylesTitle="stylesH2" className={styles.infoTitle}>Editeur du site</Title>
                        </div>
                        <div className={styles.infoContainer}>
                            <div className={styles.info}>
                                <span className={styles.title}>Lien du site : </span>
                                <span className={styles.description}>http://antho-bastianaggi.fr/</span>
                            </div>
                            <div className={styles.info}>
                                <span className={styles.title}>Représentant légal du site : </span>
                                <span className={styles.description}>BASTIANAGGI Anthony</span>
                            </div>
                            <div className={styles.info}>
                                <span className={styles.title}>Addresse postale : </span>
                                <span className={styles.description}>Route d'Afa, Lieu-dit U Vangoni 20167 Appietto, FRANCE</span>
                            </div>
                            <div className={styles.info}>
                                <span className={styles.title}>Téléphone : </span>
                                <span className={styles.description}>06.32.62.99.06.</span>
                            </div>
                            <div className={styles.info}>
                                <span className={styles.title}>Adresse éléctronique : </span>
                                <span className={styles.description}>a.bastianaggi@gmail.com</span>
                            </div>
                        </div>
                        <div className={styles.infoTitleContainer}>
                            <Title as="h2" stylesTitle="stylesH2" className={styles.infoTitle}>Hébergeur du site</Title>
                        </div>
                        <div className={styles.infoContainer}>
                            <div className={styles.info}>
                                <span className={styles.title}>Dénomination sociale de l'hébergeur : </span>
                                <span className={styles.description}>OVH</span>
                            </div>
                            <div className={styles.info}>
                                <span className={styles.title}>Siège social : </span>
                                <span className={styles.description}>2 rue Kellermann - 59100 Roubaix - France</span>
                            </div>
                            <div className={styles.info}>
                                <span className={styles.title}>Téléphone : </span>
                                <span className={styles.description}>08.99.49.87.65.</span>
                            </div>
                        </div>
                    </div>
               </Flex>
           </div>
        </Flex>
       </Section>
    )
}

export default LegalMentions;