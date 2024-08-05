import React from 'react';
import styles from './Praxeum.module.css';
import Image from 'next/image';
import selfdefenseImg from "../../../../public/PraxeumPics/SelfDefense.JPG"
import outdoorsImg from "../../../../public/PraxeumPics/Outdoors.jpg"
import teamImg from "../../../../public/PraxeumPics/Team.jpg"

const Praxeum = () => {
    return (
        <div id="ourStory" className={styles.container}>
            <div className={styles.row}>
            <h1 className={styles.title}>Things we find impacts youth the most</h1>
                <div className={styles.imgContainer}>
                    <div id='section1' className={styles.section}>
                        <figure className={styles.praxImgWrapper}>
                            <Image
                            className={styles.praxImg}
                            src={selfdefenseImg}
                            alt='Super Functional'/>
                        </figure>
                        <div className={styles.sectionText}>
                            <h1>Self-defense</h1>
                        </div>
                    </div>
                    <div id='section2' className={styles.section}>
                        <figure className={styles.praxImgWrapper}>
                            <Image
                            className={styles.praxImg}
                            src={teamImg}
                            alt='More team work'/>
                        </figure>
                        <div className={styles.sectionText}>
                            <h1>Teambuilding</h1>
                        </div>
                    </div>
                    <div id='section3' className={styles.section}>
                        <figure className={styles.praxImgWrapper}>
                            <Image
                            className={styles.praxImg}
                            src={outdoorsImg}
                            alt='Impress Colleges'/>
                        </figure>
                        <div className={styles.sectionText}>
                            <h1>The Great Outdoors</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Praxeum;
