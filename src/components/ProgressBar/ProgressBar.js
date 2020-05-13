import React from 'react';
import styles from './ProgressBar.module.scss';

const ProgressBar = ({ percentage, title }) => {
	const [style, setStyle] = React.useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${percentage}%`
		}
		
		setStyle(newStyle);
	}, 200);
	
	return (
		<div className={styles.progressBar}>
            <div className={styles.container}>
                <span className={styles.progressBarTitle}>{title}</span>
                <div className={styles.progress}>
                    <div className={styles.bar} style={style}>
                        {percentage}%
                    </div>
                </div>          
            </div>		
		</div>
	)
}

export default ProgressBar;
