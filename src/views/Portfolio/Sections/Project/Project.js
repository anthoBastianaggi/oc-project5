import React from 'react';
import styles from './Project.module.scss';
import Section from '../../../../components/Section/Section';
import Link from '../../../../components/Link/Link';
import Card from '../../../../components/Card/Card';
import Image1 from '../../../../assets/images/work-1.jpg';
import Image2 from '../../../../assets/images/work-2.jpg';
import Image3 from '../../../../assets/images/work-3.jpg';
import Image4 from '../../../../assets/images/work-4.jpg';
import Image5 from '../../../../assets/images/work-5.jpg';
import Image6 from '../../../../assets/images/work-6.jpg';

const Project = () => {
    const data = [
        { id: 1, category: 'all',
            image: Image1,
            alt: 'project-1',
            title: 'project-1',
            description: 'Description du projet 1',
            categoryItem: 'web develop',
            date: '15 mai 2020',
            link: '/'
		},{
			id: 2,
            category: 'all',
            image: Image2,
            alt: 'project-2',
            title: 'project-2',
            description: 'Description du projet 2',
            categoryItem: 'web develop',
            date: '15 mai 2020',
            link: '/'
		},
		{
            id: 3,
            category: 'all',
            image: Image3,
            alt: 'project-3',
            title: 'project-3',
            description: 'Description du projet 3',
            categoryItem: 'web develop',
            date: '15 mai 2020',
            link: '/'
		},{
			id: 4,
            category: 'all',
            image: Image4,
            alt: 'project-4',
            title: 'project-4',
            description: 'Description du projet 4',
            categoryItem: 'web develop',
            date: '15 mai 2020',
            link: '/'
		},{
            id: 5,
            category: 'all',
            image: Image5,
            alt: 'project-5',
            title: 'project-5',
            description: 'Description du projet 5',
            categoryItem: 'web develop',
            date: '15 mai 2020',
            link: '/'
		},{
            id: 6,
            category: 'all',
            image: Image6,
            alt: 'project-6',
            title: 'project-6',
            description: 'Description du projet 6',
            categoryItem: 'web develop',
            date: '15 mai 2020',
            link: '/'
		}
    ];

    const menuPortfolio = [
        { id: "all", name: "All", link: "/" },
        { id: "sites-vitrines", name: "Sites vitrines", link: "/" },
        { id: "web-develop", name: "Web Develop", link: "/" },
        { id: "app-web", name: "App Web", link: "/" },
        { id: "CMS", name: "CMS", link: "/" },
        { id: "web-design", name: "Web Design", link: "/" }
    ];

    const menuItem = () => {
        return (
            <nav className={styles.navbarPortfolio}>
                <div className={styles.navbarContainer}>
                    <div className={styles.navbarContent}>
                        <ul className={styles.navbarList}>
                            {menuPortfolio.map((item) => (
                                <li className={styles.navbarItem}>
                                    <Link id={item.id} href={item.link} label={item.name} />
                                </li>
                            ))} 
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }

  return (
   <Section id="portfolio" title="Portfolio" subtitle="Voici quelques unes de mes réalisations">
     <div className={styles.content}>
        <div className={styles.container}>
            {menuItem()}
            <div className={styles.item}>
                {data.map((item) => (
                    <Card 
                    key={item.id} 
                    image={item.image} 
                    alt={item.alt} 
                    title={item.title} 
                    description={item.description} 
                    category={item.categoryItem} 
                    date={item.date} 
                    link={item.link} />
                ))}  
            </div>
        </div>
     </div>
    </Section>
  );
}

export default Project;