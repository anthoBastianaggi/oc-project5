import React, { useState, useEffect } from 'react';
import styles from './Project.module.scss';
import Section from '../../../components/Section/Section';
import { servicesSection } from '../../../server/services/services';
import Filter from '../../../components/Filter/Filter';
import Flex from '../../../components/Flex/Flex';

const Project = () => {
  const [data, setData] = useState([]);
  const [displayCategory, setDisplayCategory] = useState('Tout');

  useEffect(() => {
      servicesSection.getProjects().then(result => setData(result));
  }, []);

  const uniqueItems = (x, i, a) => a.indexOf(x) === i;
  const menuCategory = data.map((category) => category.category.name).filter(
    uniqueItems
  );

  const setCategory = (category) => {
      setDisplayCategory({
        displayCategory: category
      });
    }

  return (
   <Section id="portfolio" title="Portfolio" subtitle="Voici quelques unes de mes réalisations" className={styles.sectionPortfolio}>
     <Flex className={styles.content} wrap>
        <div className={styles.container}>
            <Filter setCategory={setCategory} data={data} categoryMenu={menuCategory} display={displayCategory} />
        </div>
     </Flex>
    </Section>
  );
}

export default Project;