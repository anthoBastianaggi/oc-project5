import React from 'react';
import styles from './StreetMaps.module.scss';
import Section from '../../../components/Section/Section';
import Flex from '../../../components/Flex/Flex';

const StreetMaps = () => {
    return (
        <Section id="street-map" className={styles.streetMaps} title="Plan du site">
            <Flex className={styles.blockContent} wrap>
                <iframe title="iframe Google Maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7461.240946784155!2d8.782255829143637!3d41.97968716349407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDU4JzQ2LjAiTiA4wrA0NycwOC4yIkU!5e1!3m2!1sfr!2sfr!4v1611870919025!5m2!1sfr!2sfr" className={styles.map} />
            </Flex>
       </Section>
    )
}

export default StreetMaps;