import React from 'react';
import styles from './Footer.module.scss';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "../../../node_modules/@fortawesome/free-brands-svg-icons";
import FlagFrance from '../../assets/icons/flag-france.svg';
import FlagEngland from '../../assets/icons/flag-england.svg';
import FlagItaly from '../../assets/icons/flag-italy.svg';
import FlagCorsica from '../../assets/icons/flag-corsica.svg';

const socialItems = [
    { id: "facebook", href: "https://www.facebook.com/anthony.bastianaggi", icon: faFacebook },
    { id: "twitter", href: "https://twitter.com/anthobastianagg", icon: faTwitter },
    { id: "instagram", href: "https://www.instagram.com/antho.bastianaggi/?hl=fr", icon: faInstagram },
    { id: "linkedin", href: "https://www.linkedin.com/in/anthony-bastianaggi-34750015a/", icon: faLinkedin }
];

const interfaceLang = [
    { id: "french", alt: "france-icon" , icon: FlagFrance },
    { id: "english", alt: "england-icon" , icon: FlagEngland },
    { id: "italian", alt: "italy-icon" , icon: FlagItaly },
    { id: "corsican", alt: "corse-icon" , icon: FlagCorsica }
];

const infoMenuItems = [
    { id: "légal-mention", href: "/", label: "Mention légal" },
    { id: "terms-of-services", href: "/", label: "Conditions d'utilisation" },
    { id: "sitemap", href: "/", label: "Plan du site" },
  ];

const Footer = () => {
    return (
     <footer className={styles.footer}>
         <div className={styles.container}>
            <div className={styles.contentFooter}>
                <div className={styles.block}>
                    <div className={styles.blockContainer}>
                        <h2 className={styles.title}>A propos du site</h2>
                        <hr className={styles.hrFoot} />

                        <div className={styles.projectAbout}>
                            <span>Le site a été réalisé dans le cadre d'un projet personnel pour la formation 
                                de Développeur Web Junior sur Openclassroom.
                            </span>
                        </div>
                    </div>
                </div>
                <div className={styles.block}>
                    <div className={styles.blockContainer}>
                        <h2 className={styles.title}>Rejoignez notre Newsletter</h2>
                        <hr className={styles.hrFoot} />

                        <form className={styles.formHorizontal}>
                            <div className={styles.formContainer}>
                                <input type="email" className={styles.formControl} placeholder="Email" />
                                <button type="submit" className={styles.btnSubmit}>Rejoignez Nous</button>
                            </div>
                        </form>     
                    </div>
                </div>
                <div className={styles.block}>
                    <div className={styles.blockContainer}>
                        <h2 className={styles.title}>Langue d'interface du site</h2>
                        <hr className={styles.hrFoot} />

                        <div className={styles.lang}>
                            <ul className={styles.langItem}>
                                {interfaceLang.map((item) => {
                                    return(
                                        <li key={item.id} className={styles.item}>
                                            <img className={styles.icon} src={item.icon} alt={item.alt} />
                                        </li>
                                    )
                                })} 
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.block}>
                    <div className={styles.blockContainer}>
                        <h2 className={styles.title}>Restez connecté</h2>
                        <hr className={styles.hrFoot} />

                        <div className={styles.socials}>
                            <ul className={styles.socialItem}>
                                {socialItems.map((item) => {
                                    return(
                                        <li key={item.id} className={styles.item}>
                                            <a href={item.href}><FontAwesomeIcon className={styles.iconSocials} icon={item.icon} /></a>
                                        </li>
                                    )
                                })} 
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx(styles.contentFooter, styles.contentInfo)}>
                <div className={styles.block}>
                    <div className={styles.blockContainer}>
                        <h2 className={styles.title}>Information générale</h2>
                        <hr className={styles.hrFoot} />

                        <div className={styles.infoMenu}>
                            <ul className={styles.infoMenuItems}>
                                {infoMenuItems.map((item) => {
                                    return(
                                        <li key={item.id} className={styles.item}>
                                            <a href={item.href}>{item.label}</a>
                                        </li>
                                    )
                                })} 
                            </ul>
                        </div>
                    </div>
                </div>   
            </div>
        </div>
        <div className={styles.copyright}>
            <span>&copy; 2020 Copyright: Anthony Bastianaggi - Tous droits réservés.</span>
        </div>
     </footer>
    );
}

export default Footer;
