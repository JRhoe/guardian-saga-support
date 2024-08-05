import React from 'react';
import styles from "./page.module.css";
import bgImage from "../../public/backflip.jpg"
import Image from 'next/image';

const Page = () => {
    return (
        <div className={styles.container}>
        <div className={styles.row}>
            <figure className={styles.mainImgWrapper}>
                <Image
                className={styles.mainImg}
                src={bgImage}
                fill
                alt="bgImage"/>
            </figure>
            <div className={styles.headerContainer}>
                <h1 className={styles.headerEmail}>info@guardiansaga.support</h1>
                <p className={styles.headerLocation}>San Jose, CA</p>
                <p className={styles.headerName}>Guradian Saga Support</p>
            </div>
        </div>
    </div>
    );
}

export default Page;
