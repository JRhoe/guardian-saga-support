import React from 'react';
import styles from "./page.module.css"
import banner from "../../public/partnerships banner.png"
import Image from 'next/image';

const Page = () => {
    return (
        <>
        <div className={styles.bannerMain}>
            <Image
            className={styles.bannerImg}
            src={banner}/>
            <Image
            className={styles.bannerImg}
            src={banner}/>
            <Image
            className={styles.bannerImg}
            src={banner}/>
        </div>
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.textWrapper}>
                    <div className={styles.aboutPraxeum}>
                        <h1 className={styles.title}>Partnerships or something</h1>
                        <p className={styles.subtitle}> Paragraph about how we are partnered with The Praxeum</p>
                        <br/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et unde ipsam ea ducimus hic, voluptatum ex deserunt tempora, asperiores nobis modi itaque quasi nisi voluptates placeat quod atque quam optio eius! Omnis, eius. Soluta, impedit eum ipsa laudantium, laborum deleniti cum corrupti quae voluptates, cupiditate at molestias adipisci excepturi minima.</p>
                    </div>
                    <div className={styles.aboutWorkshop}>
                        <h1 className={styles.title}>Partnerships or something</h1>
                        <p className={styles.subtitle}> Paragraph about how we organizations can partner with us (workshops)</p>
                        <br/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et unde ipsam ea ducimus hic, voluptatum ex deserunt tempora, asperiores nobis modi itaque quasi nisi voluptates placeat quod atque quam optio eius! Omnis, eius. Soluta, impedit eum ipsa laudantium, laborum deleniti cum corrupti quae voluptates, cupiditate at molestias adipisci excepturi minima.</p>
                    </div>
                </div>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd5BONlP9y6koiwFACn9NxcRxuGZntopbEs_y4kGDm_aHwAFQ/viewform?embedded=true" 
                width="640" height="1969" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
        </div>
        
        </>
    );
}

export default Page;
