import React, { useEffect } from 'react';
import Flex from '../Flex/Flex';
import styles from './ProgressBar.module.scss';

const ProgressBar = ({ percentage, title }) => {
	const [style, setStyle] = React.useState({});

	useEffect(() => {
		const timer = setTimeout(() => {
			const newStyle = {
				opacity: 1,
				width: `${percentage}%`
			}
			
			setStyle(newStyle);
		}, 200);
		return () => clearTimeout(timer);
	  }, [ percentage ]);
	
	return (
		<div className={styles.progressBar}>
            <div className={styles.container}>
                <span className={styles.progressBarTitle}>{title}</span>
                <div className={styles.progress}>
                    <Flex className={styles.bar} style={style} center>
                        {percentage}%
                    </Flex>
                </div>          
            </div>		
		</div>
	)
}

export default ProgressBar;
