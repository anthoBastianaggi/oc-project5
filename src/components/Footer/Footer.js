import React from 'react';
import styles from './Footer.module.scss';
import cx from 'classnames';
import Button from '../Button/Button';
import Link from '../Link/Link';
import Flex from '../Flex/Flex';
import Title from '../Title/Title';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "../../../node_modules/@fortawesome/free-brands-svg-icons";

const date = () => new Date().getFullYear();

const socialItems = [
    { id: "facebook", href: "https://www.facebook.com/anthony.bastianaggi", icon: faFacebook },
    { id: "twitter", href: "https://twitter.com/anthobastianagg", icon: faTwitter },
    { id: "instagram", href: "https://www.instagram.com/antho.bastianaggi/?hl=fr", icon: faInstagram },
    { id: "linkedin", href: "https://www.linkedin.com/in/anthony-bastianaggi-34750015a/", icon: faLinkedin }
];

const interfaceLang = [
    { id: "french", alt: "france-icon" , icon: <Button className={styles.buttonFlag} type="tertiary" iconFlag="flag-france" onClick={onClickInterfaceLang} /> },
    { id: "english", alt: "england-icon" , icon: <Button className={styles.buttonFlag} type="tertiary" iconFlag="flag-england" onClick={onClickInterfaceLang} /> },
    { id: "italian", alt: "italy-icon" , icon: <Button className={styles.buttonFlag} type="tertiary" iconFlag="flag-italy" onClick={onClickInterfaceLang} /> },
    { id: "corsican", alt: "corse-icon" , icon: <Button className={styles.buttonFlag} type="tertiary" iconFlag="flag-corsica" onClick={onClickInterfaceLang} /> }
];

const infoMenuItems = [
    { id: "legal-mentions", href: "/legal-mentions", label: "Mentions légales" },
    { id: "terms-of-services", href: "/general-conditions", label: "Conditions d'utilisations" },
    { id: "sitemap", href: "/street-maps", label: "Plan du site" },
  ];

function onClickInterfaceLang() {
    alert("Le choix de la langue d'interface n'est pas fonctionnel actuellement. Il le sera lors de la prochaine version du projet.")
}

function onClickNewslatter() {
    alert("La newslatter n'est pas fonctionnelle actuellement. Elle le sera lors de la prochaine version du projet.")
}

const Footer = () => {
    return (
     <footer className={styles.footer}>
         <Flex className={styles.container}>
            <div className={styles.contentFooter}>
                <div className={styles.block}>
                    <div className={styles.blockContainer}>
                        <Title as="h2" stylesTitle="stylesH2" className={styles.title}>A propos du site</Title>
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
                        <Title as="h2" stylesTitle="stylesH2" className={styles.title}>Rejoignez notre Newsletter</Title>
                        <hr className={styles.hrFoot} />

                        <form className={styles.formHorizontal}>
                            <Flex className={styles.formContainer} wrap>
                                <input type="email" className={styles.formControl} placeholder="Email" />
                                <button type="button" className={styles.btnSubmit} onClick={onClickNewslatter}>Rejoignez Nous</button>
                            </Flex>
                        </form>     
                    </div>
                </div>
                <div className={styles.block}>
                    <div className={styles.blockContainer}>
                        <Title as="h2" stylesTitle="stylesH2" className={styles.title}>Langue d'interface du site</Title>
                        <hr className={styles.hrFoot} />

                        <div className={styles.lang}>
                            <ul className={styles.langItem}>
                                {interfaceLang.map((item) => {
                                    return(
                                        <li key={item.id} className={styles.item}>
                                            {item.icon}
                                        </li>
                                    )
                                })} 
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.block}>
                    <div className={styles.blockContainer}>
                        <Title as="h2" stylesTitle="stylesH2" className={styles.title}>Restez connecté</Title>
                        <hr className={styles.hrFoot} />

                        <div className={styles.socials}>
                            <ul className={styles.socialItem}>
                                {socialItems.map((item) => {
                                    return(
                                        <li key={item.id} className={styles.item}>
                                             <Link href={item.href} id={item.id} className={styles.iconSocials} icon={item.icon} external />
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
                        <Title as="h2" stylesTitle="stylesH2" className={styles.title}>Information générale</Title>
                        <hr className={styles.hrFoot} />

                        <div className={styles.infoMenu}>
                            <ul className={styles.infoMenuItems}>
                                {infoMenuItems.map((item) => {
                                    return(
                                        <li key={item.id} className={styles.item}>
                                            <Link href={item.href} id={item.id} label={item.label} external />
                                        </li>
                                    )
                                })} 
                            </ul>
                        </div>
                    </div>
                </div>   
            </div>
        </Flex>
        <div className={styles.copyright}>
            <span>&copy; {date()} Copyright: Anthony Bastianaggi - Tous droits réservés.</span>
        </div>
     </footer>
    );
}

export default Footer;
