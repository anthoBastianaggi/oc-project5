import React from 'react';
import styles from './GeneralConditions.module.scss';
import Section from '../../../components/Section/Section';
import Flex from '../../../components/Flex/Flex';
import Title from '../../../components/Title/Title';

const GeneralConditions = () => {
    return (
        <Section id="general-conditions" className={styles.generalConditions} title="Conditions générale d'utilisations" subtitle="En vigueur au 26/01/2021">
        <Flex className={styles.blockContent} wrap>
           <div className={styles.container}>
               <Flex className={styles.wrapper}>
                    <div className={styles.blockInfo}>
                        <div className={styles.infoContainer}>
                            <div className={styles.info}>
                                <p className={styles.description}>
                                Les présentes conditions générales d'utilisation (dites « CGU ») ont pour objet l'encadrement juridique 
                                des modalités de mise à disposition du site et des services par BASTIANAGGI Anthony et de définir 
                                les conditions d’accès et d’utilisation des services par « l'Utilisateur ».
                                </p>
                                <p className={styles.description}>Les présentes CGU sont accessibles sur le site à la rubrique «CGU»</p>
                            </div>
                        </div>
                        <div className={styles.infoTitleContainer}>
                            <Title as="h2" stylesTitle="stylesH2" className={styles.infoTitle}>Accès au site</Title>
                        </div>
                        <div className={styles.infoContainer}>
                            <div className={styles.info}>
                                <p className={styles.description}>
                                Le site est accessible gratuitement en tout lieu à tout Utilisateur ayant un accès à Internet. 
                                Tous les frais supportés par l'Utilisateur pour accéder au service 
                                (matériel informatique, logiciels, connexion Internet, etc.) sont à sa charge.
                                </p>
                            </div>
                        </div>
                        <div className={styles.infoTitleContainer}>
                            <Title as="h2" stylesTitle="stylesH2" className={styles.infoTitle}>Collecte des données</Title>
                        </div>
                        <div className={styles.infoContainer}>
                            <div className={styles.info}>
                                <p className={styles.description}>
                                Le site est exempté de déclaration à la Commission Nationale Informatique et Libertés (CNIL) dans 
                                la mesure où il ne collecte aucune donnée concernant les Utilisateurs.
                                </p>
                            </div>
                        </div>
                        <div className={styles.infoTitleContainer}>
                            <Title as="h2" stylesTitle="stylesH2" className={styles.infoTitle}>Propriété intellectuelle</Title>
                        </div>
                        <div className={styles.infoContainer}>
                            <div className={styles.info}>
                                <p className={styles.description}>
                                Les marques, logos, signes ainsi que tous les contenus du site (textes, images, son...) 
                                font l'objet d'une protection par le Code de la propriété intellectuelle et plus particulièrement 
                                par le droit d'auteur.
                                </p>
                                <p className={styles.description}>
                                L'Utilisateur doit solliciter l'autorisation préalable du site pour toute reproduction, publication, 
                                copie des différents contenus. Il s'engage à une utilisation des contenus du site dans un cadre 
                                strictement privé, toute utilisation à des fins commerciales et publicitaires est strictement interdite.
                                </p>
                                <p className={styles.description}>
                                Toute représentation totale ou partielle de ce site par quelque procédé que ce soit, sans l’autorisation 
                                expresse de l’exploitant du site Internet constituerait une contrefaçon sanctionnée par l’article L 335-2 
                                et suivants du Code de la propriété intellectuelle.
                                </p>
                                <p className={styles.description}>
                                Il est rappelé conformément à l’article L122-5 du Code de propriété intellectuelle que l’Utilisateur qui 
                                reproduit, copie ou publie le contenu protégé doit citer l’auteur et sa source.
                                </p>
                            </div>
                        </div>
                        <div className={styles.infoTitleContainer}>
                            <Title as="h2" stylesTitle="stylesH2" className={styles.infoTitle}>Responsabilité</Title>
                        </div>
                        <div className={styles.infoContainer}>
                            <div className={styles.info}>
                                <p className={styles.description}>
                                Les sources des informations diffusées sur le site http://antho-bastianaggi.fr/ sont réputées fiables 
                                mais le site ne garantit pas qu’il soit exempt de défauts, d’erreurs ou d’omissions.
                                </p>
                                <p className={styles.description}>
                                Les informations communiquées sont présentées à titre indicatif et général sans valeur contractuelle. 
                                Malgré des mises à jour régulières, le site http://antho-bastianaggi.fr/ ne peut être tenu responsable 
                                de la modification des dispositions administratives et juridiques survenant après la publication. 
                                De même, le site ne peut être tenue responsable de l’utilisation et de l’interprétation de l’information 
                                contenue dans ce site.
                                </p>
                                <p className={styles.description}>
                                Le site http://antho-bastianaggi.fr/ ne peut être tenu pour responsable d’éventuels virus qui pourraient 
                                infecter l’ordinateur ou tout matériel informatique de l’Internaute, suite à une utilisation, à l’accès, 
                                ou au téléchargement provenant de ce site.
                                </p>
                                <p className={styles.description}>
                                La responsabilité du site ne peut être engagée en cas de force majeure ou du fait imprévisible et 
                                insurmontable d'un tiers.
                                </p>
                            </div>
                        </div>
                        <div className={styles.infoTitleContainer}>
                            <Title as="h2" stylesTitle="stylesH2" className={styles.infoTitle}>Liens hypertextes</Title>
                        </div>
                        <div className={styles.infoContainer}>
                            <div className={styles.info}>
                                <p className={styles.description}>
                                Des liens hypertextes peuvent être présents sur le site. L’Utilisateur est informé qu’en cliquant 
                                sur ces liens, il sortira du site http://antho-bastianaggi.fr/. Ce dernier n’a pas de contrôle sur les 
                                pages web sur lesquelles aboutissent ces liens et ne saurait, en aucun cas, être responsable de leur contenu.
                                </p>
                            </div>
                        </div>
                        <div className={styles.infoTitleContainer}>
                            <Title as="h2" stylesTitle="stylesH2" className={styles.infoTitle}>Cookies</Title>
                        </div>
                        <div className={styles.infoContainer}>
                            <div className={styles.info}>
                                <p className={styles.description}>
                                L’Utilisateur est informé que lors de ses visites sur le site, un cookie peut s’installer automatiquement 
                                sur son logiciel de navigation.
                                </p>
                                <p className={styles.description}>
                                Les cookies sont de petits fichiers stockés temporairement sur le disque dur de l’ordinateur de 
                                l’Utilisateur par votre navigateur et qui sont nécessaires à l’utilisation du site http://antho-bastianaggi.fr/. 
                                Les cookies ne contiennent pas d’information personnelle et ne peuvent pas être utilisés pour 
                                identifier quelqu’un. Un cookie contient un identifiant unique, généré aléatoirement et donc anonyme. 
                                Certains cookies expirent à la fin de la visite de l’Utilisateur, d’autres restent.
                                </p>
                                <p className={styles.description}>
                                L’information contenue dans les cookies est utilisée pour améliorer le site http://antho-bastianaggi.fr/.
                                </p>
                                <p className={styles.description}>
                                En naviguant sur le site, L’Utilisateur les accepte.
                                </p>
                                <p className={styles.description}>
                                L’Utilisateur pourra désactiver ces cookies par l’intermédiaire des paramètres figurant au sein de son 
                                logiciel de navigation.
                                </p>
                            </div>
                        </div>
                        <div className={styles.infoTitleContainer}>
                            <Title as="h2" stylesTitle="stylesH2" className={styles.infoTitle}>Droit applicable et juridiction compétente</Title>
                        </div>
                        <div className={styles.infoContainer}>
                            <div className={styles.info}>
                                <p className={styles.description}>
                                La législation française s'applique au présent contrat. En cas d'absence de résolution amiable d'un litige 
                                né entre les parties, les tribunaux français seront seuls compétents pour en connaître.
                                </p>
                                <p className={styles.description}>
                                Pour toute question relative à l’application des présentes CGU, vous pouvez joindre l’éditeur aux coordonnées 
                                inscrites dans le lien mentions légales.
                                </p>
                            </div>
                        </div>
                    </div>
               </Flex>
           </div>
        </Flex>
       </Section>
    )
}

export default GeneralConditions;