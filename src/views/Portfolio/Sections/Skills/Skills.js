import React from 'react';
import styles from './Skills.module.scss';
import Section from '../../../../components/Section/Section';
import ProgressBar from '../../../../components/ProgressBar/ProgressBar';

const Skills = () => {   
  const data = {
        langages: {
            title: "Langages",
            subtitle: "Skill",
            progressBar: [
                { id: "html", titleBar: "html", width: "85" },
                { id: "css", titleBar: "css3", width: "75" },
                { id: "javascript", titleBar: "javascript", width: "70" },
                { id: "php", titleBar: "php", width: "50" },
                { id: "mysql", titleBar: "mysql", width: "60" }
            ]
        },
        libraries_frameworks: {
            title: "Libraries and Frameworks",
            subtitle: "Skill",
            progressBar: [
                { id: "bootstrap", titleBar: "bootstrap", width: "85" },
                { id: "jquery", titleBar: "jquery", width: "75" },
                { id: "react", titleBar: "react", width: "70" },
                { id: "redux", titleBar: "redux", width: "50" },
                { id: "node", titleBar: "node", width: "60" }
            ]
        },
        graphic: {
            title: "Graphic",
            subtitle: "Skill",
            progressBar: [
                { id: "photoshop", titleBar: "photoshop", width: "85" },
                { id: "illustrator", titleBar: "illustrator", width: "75" },
                { id: "indesign", titleBar: "indesign", width: "50" }
            ]
        },
        cms: {
            title: "CMS",
            subtitle: "Skill",
            progressBar: [
                { id: "wordpress", titleBar: "wordpress", width: "70" },
                { id: "prestashop", titleBar: "prestashop", width: "40" }
            ]
        },
    };
  
  const blockLanguages = () => {
      return(
        <div className={styles.blockItem}>
            <div className={styles.blockContainer}>
                <div className={styles.titleContainer}>
                    <h3 className={styles.title}>{data.langages.title}</h3>
                </div>  
                <p className={styles.subtitle}>{data.langages.subtitle}</p>
                {data.langages.progressBar.map((item) => (
                    <ProgressBar  key={item.id} percentage={item.width} title={item.titleBar} />
                ))}
            </div>
        </div>
      );
  };

  const blockLibrairies = () => {
    return(
        <div className={styles.blockItem}>
            <div className={styles.blockContainer}>
                <div className={styles.titleContainer}>
                    <h3 className={styles.title}>{data.libraries_frameworks.title}</h3>
                </div>  
                <p className={styles.subtitle}>{data.libraries_frameworks.subtitle}</p>
                {data.libraries_frameworks.progressBar.map((item) => (
                    <ProgressBar key={item.id} percentage={item.width} title={item.titleBar} />
                ))}
            </div>
        </div>
    );
};

const blockGraphic = () => {
    return(
        <div className={styles.blockItem}>
            <div className={styles.blockContainer}>
                <div className={styles.titleContainer}>
                    <h3 className={styles.title}>{data.graphic.title}</h3>
                </div>  
                <p className={styles.subtitle}>{data.graphic.subtitle}</p>
                {data.graphic.progressBar.map((item) => (
                    <ProgressBar  key={item.id} percentage={item.width} title={item.titleBar} />
                ))}
            </div>
        </div>
    );
};

const blockCms = () => {
    return(
        <div className={styles.blockItem}>
            <div className={styles.blockContainer}>
                <div className={styles.titleContainer}>
                    <h3 className={styles.title}>{data.cms.title}</h3>
                </div>  
                <p className={styles.subtitle}>{data.cms.subtitle}</p>
                {data.cms.progressBar.map((item) => (
                    <ProgressBar  key={item.id} percentage={item.width} title={item.titleBar} />
                ))}
            </div>
        </div>
    );
};

  return (
   <Section id="skills" title="Compétences" subtitle="Des compétences à votre service">
     <div className={styles.content}>
        <div className={styles.container}>
            <div className={styles.block}>
                {blockLanguages()}
                {blockLibrairies()}
                {blockGraphic()}
                {blockCms()}
            </div>
        </div>
     </div>
    </Section>
  );
}

export default Skills;