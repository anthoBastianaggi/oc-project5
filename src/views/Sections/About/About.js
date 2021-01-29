import React, { useState, useEffect } from 'react';
import styles from './About.module.scss';
import Section from '../../../components/Section/Section';
import Flex from '../../../components/Flex/Flex';
import { servicesSection } from '../../../server/services/services';
import BlockInfo from './AboutInfo/AboutInfo';
import BlockDescription from './AboutDescription/AboutDescription';

const About = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        servicesSection.getAbout().then(result => setData(result))
    }, []);

  return (
   <Section id="about" title="à propos de moi" subtitle="Une petite présentation pour mieux me connaître">
     <Flex className={styles.blockContent} wrap>
        <div className={styles.container}>
            <Flex className={styles.wrapper}>
                <BlockInfo data={data} />
                <BlockDescription data={data} />
            </Flex>
        </div>
     </Flex>
    </Section>
  );
}

export default About;