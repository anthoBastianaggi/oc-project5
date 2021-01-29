import React from 'react';
import styles from './Layout.module.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Flex from '../Flex/Flex';


let Layout = (View) => {
  return (
    <Flex className={styles.layout} column>
        <Header />
        <div className={styles.content} id="content">
            <View />
        </div>
        <Footer />
    </Flex>
  );
}

export default Layout;
