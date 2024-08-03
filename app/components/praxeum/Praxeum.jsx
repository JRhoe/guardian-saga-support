import React from 'react';
import styles from './Praxeum.module.css';
import Image from 'next/image';
import functionalImg from "../../../public/PraxeumPics/Functional.jpg"
import collegeImg from "../../../public/PraxeumPics/College.jpg"
import teamImg from "../../../public/PraxeumPics/Team.jpg"

const Praxeum = () => {
    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <div id='section1' className={styles.section}>
                    <figure className={styles.praxImgWrapper}>
                        <Image
                        className={styles.praxImg}
                        src={functionalImg}/>
                    </figure>
                    <div className={styles.sectionText}></div>
                </div>
                <div id='section2' className={styles.section}>
                    <figure className={styles.praxImgWrapper}>
                        <Image
                        className={styles.praxImg}
                        src={teamImg}/>
                    </figure>
                </div>
                <div id='section3' className={styles.section}>
                    <figure className={styles.praxImgWrapper}>
                        <Image
                        className={styles.praxImg}
                        src={collegeImg}/>
                    </figure>
                </div>
            </div>
        </div>
    );
}

export default Praxeum;
