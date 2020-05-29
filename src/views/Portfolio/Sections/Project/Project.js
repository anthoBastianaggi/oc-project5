import React, { useState } from 'react';
import styles from './Project.module.scss';
import Section from '../../../../components/Section/Section';
import Filter from '../../../../components/Filter/Filter';
import Image1 from '../../../../assets/images/work-1.jpg';
import Image2 from '../../../../assets/images/work-2.jpg';
import Image3 from '../../../../assets/images/work-3.jpg';
import Image4 from '../../../../assets/images/work-4.jpg';
import Image5 from '../../../../assets/images/work-5.jpg';
import Image6 from '../../../../assets/images/work-6.jpg';

const Project = () => {
    const itemData = [
      { id: 1, category: 'Sites Vitrines',
          image: Image1,
          alt: 'project-1',
          title: 'project-1',
          description: 'Description du projet 1',
          categoryItem: 'sites vitrines',
          date: '15 mai 2020',
          link: '/'
      },{
          id: 2,
          category: 'Sites Vitrines',
          image: Image2,
          alt: 'project-2',
          title: 'project-2',
          description: 'Description du projet 2',
          categoryItem: 'sites vitrines',
          date: '15 mai 2020',
          link: '/'
      },
      {
          id: 3,
          category: 'Web Develop',
          image: Image3,
          alt: 'project-3',
          title: 'project-3',
          description: 'Description du projet 3',
          categoryItem: 'web develop',
          date: '15 mai 2020',
          link: '/'
      },{
          id: 4,
          category: 'App Web',
          image: Image4,
          alt: 'project-4',
          title: 'project-4',
          description: 'Description du projet 4',
          categoryItem: 'app web',
          date: '15 mai 2020',
          link: '/'
      },{
          id: 5,
          category: 'CMS',
          image: Image5,
          alt: 'project-5',
          title: 'project-5',
          description: 'Description du projet 5',
          categoryItem: 'cms',
          date: '15 mai 2020',
          link: '/'
      },{
          id: 6,
          category: 'Web Design',
          image: Image6,
          alt: 'project-6',
          title: 'project-6',
          description: 'Description du projet 6',
          categoryItem: 'web design',
          date: '15 mai 2020',
          link: '/'
      }
  ];

  const uniqueItems = (x, i, a) => a.indexOf(x) === i;
  const menuCategory = itemData.map((category) => category.category).filter(
    uniqueItems
  );
  menuCategory.push("All");
  menuCategory.sort();


  const [displayCategory, setDisplayCategory] = useState('All');

  const setCategory = (category) => {
      setDisplayCategory({
        displayCategory: category
      });
    }

  return (
   <Section id="portfolio" title="Portfolio" subtitle="Voici quelques unes de mes réalisations">
     <div className={styles.content}>
        <div className={styles.container}>
            <Filter setCategory={setCategory} data={itemData} categoryMenu={menuCategory} display={displayCategory} />
        </div>
     </div>
    </Section>
  );
}

export default Project;