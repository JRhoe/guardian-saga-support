import React from 'react';
import styles from './Donate.module.css';

const Donate = () => {
    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.donateContainer}>
                    <button className={`${styles.learnBtn} ${styles.btn}`}>Learn More</button>
                    <button className={`${styles.donateBtn} ${styles.btn}`}>Donate</button>
                    <button className={`${styles.learnBtn} ${styles.btn}`}>Partnerships</button>
                </div>
            </div>
        </div>
    );
}

export default Donate;
