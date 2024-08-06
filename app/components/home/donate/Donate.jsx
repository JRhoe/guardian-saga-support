import React from 'react';
import styles from './Donate.module.css';
import Link from 'next/link';

const Donate = () => {
    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.donateContainer}>
                    <Link href="/partnership"><button className={`${styles.learnBtn} ${styles.btn}`}>Partnerships</button></Link>
                    <a href="https://www.paypal.com/donate/?hosted_button_id=MYEANUWFB5PYC" target="_blank"><button className={`${styles.donateBtn} ${styles.btn}`}>Donate</button></a>
                </div>
            </div>
        </div>
    );
}

export default Donate;
