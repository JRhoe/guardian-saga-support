import React from 'react';
import styles from "./page.module.css"
import banner from "../../public/partnerships banner.jpg"
import Image from 'next/image';

const Page = () => {
    return (
        <>
        <div className={styles.bannerMain}>
            <Image
            className={styles.bannerImg}
            src={banner}
            alt=''/>
            <Image
            className={styles.bannerImg}
            src={banner}
            alt=''/>
            <Image
            className={styles.bannerImg}
            src={banner}
            alt=''/>
        </div>
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.textWrapper}>
                    <div className={styles.textSection}>
                        <h1 className={styles.title}>Our Work</h1>
                        <div className={styles.textDivider}></div>
                        <br/>
                        <p>
                            We have partnered up with The Praxeum to 
                            provide free workshops, classes, and camps 
                            for underserved youth. The Praxeum is a gym in 
                            San Jose, CA that teaches a program called Guardian 
                            Art, which combines MMA, parkour, and teambuilding.
                        </p>
                    </div>
                    list workshops here
                </div>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd5BONlP9y6koiwFACn9NxcRxuGZntopbEs_y4kGDm_aHwAFQ/viewform?embedded=true" 
                width="800" height="1969" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
        </div>
        
        </>
    );
}

export default Page;
