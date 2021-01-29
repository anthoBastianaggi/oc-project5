import React, { useEffect, useState } from 'react';
import styles from './Services.module.scss';
import Section from '../../../components/Section/Section';
import Flex from '../../../components/Flex/Flex';
import ServicesCard from '../../../components/ServicesCard/ServicesCard';
import { servicesSection } from '../../../server/services/services';
import * as iconsBrands from '@fortawesome/free-brands-svg-icons';
import * as iconsSolid from '@fortawesome/free-solid-svg-icons';

const Services = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
        servicesSection.getServices().then(result => setData(result));
    }, []);

  return (
   <Section id="services" title="Services" subtitle="Des prestations adaptées à vos besoins ">
     <Flex className={styles.content} wrap>
        <div className={styles.container}>
            <Flex className={styles.item} wrap>
                {data.map((item) => (
                    <ServicesCard 
                    key={item.id} 
                    title={item.name} 
                    description={item.description} 
                    icon={iconsBrands[item.icon] || iconsSolid[item.icon]} 
                    />
                ))}  
            </Flex>
        </div>
     </Flex>
    </Section>
  );
}

export default Services;