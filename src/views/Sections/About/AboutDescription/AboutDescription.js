import React from 'react';
import styles from './AboutDescription.module.scss';
import cx from 'classnames';
import Button from '../../../../components/Button/Button';
import Flex from '../../../../components/Flex/Flex';

const BlockDescription = ({ data }) => {
    function onClickContact() {
        const content = document.getElementById('content');
        content.children[5].scrollIntoView({ behavior: 'smooth', block: 'end' })
    }

    return (
        <Flex className={cx(styles.column, styles.right )} column>
            <div className={styles.blockItem} style={{ order: "2" }}>
                <Flex className={styles.blockContainer} wrap center>
                    <div className={styles.blockInfo}>
                        {data.map(({ id, description }) => (
                            <p key={id} className={styles.info}>
                                <span className={styles.desc} style={{whiteSpace: "pre-line"}}>{description}</span>
                            </p>
                        ))}
                        <Flex className={styles.containerButton} center>
                            <Button className={styles.btnInfo} type="primary" label="Contactez-moi" onClick={onClickContact} />
                        </Flex> 
                    </div>
                </Flex>
            </div>
        </Flex>
    );
};

export default BlockDescription;
