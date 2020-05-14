import React from 'react';
import styles from './Services.module.scss';
import Section from '../../../../components/Section/Section';
import ServicesCard from '../../../../components/ServicesCard/ServicesCard';
import { faWordpress, faBuffer } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faCode, faShoppingCart, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
const Services = () => {
    const data = [
        { id: "web-development", title: "Developpement Web", description: "Développement ou refonte de site vitrine, blog, application web, etc… sur mesure. L’intégration de votre site web est faite en respectant les normes standard du W3C avec l’aide des dernières technologies !", icon: faCode },
        { id: "wordpress-development", title: "Developpement Wordpress", description: "Conception de site vitrine, site e-commerce, blog, etc… Installation, configuration et personnalisation de votre plateforme WordPress selon vos besoins.", icon: faWordpress },
        { id: "prestashop-development", title: "Developpement Prestashop", description: "Construisez votre site e-commerce avec PrestaShop et commencez à vendre avec des fonctionnalités avancées. Installation, configuration et personnalisation de votre thème et modules Prestashop. ", icon: faShoppingCart },
        { id: "responsive-design", title: "Responsive Design", description: "Tous vos sites seront pensés pour une utilisation sur mobiles et tablettes, et s'adapteront à toutes les résolutions d'écran. ", icon: faMobileAlt },
        { id: "SEO-reference", title: "Referencement SEO", description: "Développements favorisant le référencement naturel. Conseils et accompagnement SEO (arborescence, rédaction, navigation, ergonomie, maillage interne, etc…) ", icon: faSearch },
        { id: "domains-hosting", title: "Domaines et hébergement", description: "Enregistrement des noms de domaine. Recherche des offres d’hébergement adaptées aux besoins. Gestion et configuration des serveurs. ", icon: faBuffer }
    ]
  return (
   <Section id="services" title="Services" subtitle="Des prestations adaptées à vos besoins ">
     <div className={styles.content}>
        <div className={styles.container}>
            <div className={styles.item}>
                {data.map((item) => (
                    <ServicesCard key={item.id} title={item.title} description={item.description} icon={item.icon} />
                ))}  
            </div>
        </div>
     </div>
    </Section>
  );
}

export default Services;