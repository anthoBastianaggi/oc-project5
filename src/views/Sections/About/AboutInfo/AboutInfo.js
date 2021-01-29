import React from 'react';
import styles from './AboutInfo.module.scss';
import cx from 'classnames';
import Button from '../../../../components/Button/Button';
import Flex from '../../../../components/Flex/Flex';

const BlockInfo = ({ data }) => {
    function dateFormat(data) {
        const months = ["Janv.", "Févr.", "Mars","Avr.", "Mai", "Juin", "Juill.", "Août", "Sept.", "Oct.", "Nov.", "Déc."];
        const day = new Date(data).getDate();
        const month = new Date(data).getMonth();
        const year = new Date(data).getFullYear();
        
        return  day + " " + months[month] + " " + year;
    }

    function onClickVisualCv() {
        alert("Le lien n'est pas fonctionnel actuellement. Il le sera lors de la prochaine version du projet.");
    }

    function onClickDownloadCv() {
        alert("Le lien n'est pas fonctionnel actuellement. Il le sera lors de la prochaine version du projet.");
    }

    return (
        <Flex className={cx(styles.column, styles.left )} column>
            {data.map(({ id, firstname, lastname, profile, status, birthdate, image }) => (
            <div key={id} className={styles.blockItem} style={{ order: "1", marginBottom: "2.5rem" }}>
                <Flex className={styles.blockContainer} wrap center>
                    <div className={styles.imageContainer}>
                        <img src={require(`../../../../assets/images/${image}`)} alt="" />
                    </div>
                    <div className={styles.blockInfo}>
                        <p className={styles.info}>
                            <span className={styles.title}>Nom : </span>
                            <span className={styles.description}>{firstname + " " + lastname}</span>
                        </p>
                        <p className={styles.info}>
                            <span className={styles.title}>Date de naissance : </span>
                            <span className={styles.description}>{dateFormat(birthdate)}</span>
                        </p>
                        <p className={styles.info}>
                            <span className={styles.title}>Profil : </span>
                            <span className={styles.description}>{profile}</span>
                        </p>
                        <p className={styles.info}>
                            <span className={styles.title}>Statut : </span>
                            <span className={styles.description}>{status}</span>
                        </p>
                    </div>    
                </Flex>
            </div>
            ))}
            <div className={styles.blockItem} style={{ order: "3" }}>
                <Flex className={styles.blockContainer} wrap center>
                    <div className={cx(styles.blockInfo, styles.infoButton)}>
                        <div className={styles.blockInfoContainer}>
                            <p className={styles.info}>
                                <span className={styles.title}>Cliquer ici pour visualiser mon cv : </span>
                            </p>
                            <Flex className={styles.containerButton} center>
                                <Button className={styles.btnInfo} type="primary" label="Visualiser" onClick={onClickVisualCv} />
                            </Flex> 
                        </div>
                        <div className={styles.blockInfoContainer}>
                            <p className={styles.info}>
                                <span className={styles.title}>Cliquer ici pour télécharger mon cv : </span>
                            </p>
                            <Flex className={styles.containerButton} center>
                                <Button className={styles.btnInfo} type="primary" label="Télécharger" onClick={onClickDownloadCv} />
                            </Flex> 
                        </div>
                    </div>
                </Flex>
            </div>
        </Flex>
    );
};

export default BlockInfo;
