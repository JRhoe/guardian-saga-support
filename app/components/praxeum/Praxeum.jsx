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
            <h1 className={styles.title}>See why gurdian art is so practical</h1>
                <div className={styles.imgContainer}>
                    <div id='section1' className={styles.section}>
                        <figure className={styles.praxImgWrapper}>
                            <Image
                            className={styles.praxImg}
                            src={functionalImg}/>
                        </figure>
                        <div className={styles.sectionText}>
                            <h1>Super Fun-ctional</h1>
                        </div>
                    </div>
                    <div id='section2' className={styles.section}>
                        <figure className={styles.praxImgWrapper}>
                            <Image
                            className={styles.praxImg}
                            src={teamImg}/>
                        </figure>
                        <div className={styles.sectionText}>
                            <h1>More Team</h1>
                            <p>Than Team Sports</p>
                        </div>
                    </div>
                    <div id='section3' className={styles.section}>
                        <figure className={styles.praxImgWrapper}>
                            <Image
                            className={styles.praxImg}
                            src={collegeImg}/>
                        </figure>
                        <div className={styles.sectionText}>
                            <h1>Impress Colleges</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Praxeum;
