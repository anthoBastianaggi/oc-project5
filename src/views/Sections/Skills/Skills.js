import React, { useEffect, useState } from 'react';
import styles from './Skills.module.scss';
import Section from '../../../components/Section/Section';
import Flex from '../../../components/Flex/Flex';
import { servicesSection } from '../../../server/services/services';
import Languages from './Languages/Languages';
import Graphic from './Graphic/Graphic';
import Libraries from './Libraries/Libraries';
import Cms from './CMS/Cms';

const Skills = () => {   
    const [data, setData] = useState([]);

    useEffect(() => {
        servicesSection.getSkills().then(result => setData(result));
    }, []);

  return (
   <Section id="skills" title="Compétences" subtitle="Des compétences à votre service">
     <Flex className={styles.content} wrap>
        <div className={styles.container}>
            <Flex className={styles.block} wrap>
                <Languages data={data} />
                <Libraries data={data} />
                <Graphic data={data} />
                <Cms data={data} />
            </Flex>
        </div>
     </Flex>
    </Section>
  );
}

export default Skills;