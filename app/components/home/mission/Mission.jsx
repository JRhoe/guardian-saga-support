import React from 'react';
import styles from "./Mission.module.css"
import banner from "../../../../public/partnerships banner.png"
import Image from 'next/image';
import Link from 'next/link';

const Mission = () => {
    return (
        <div id="mission" className={styles.container}>
            <div className={styles.row}>
                <h1 className={styles.title}>Training the next generation of Earth's guardians</h1>
                <div className={styles.main}>
                    <div className={styles.statement}>
                        <p className={styles.statementPara}>We are a non-profit dedicated to providing underprivileged youth with empowering programs such as self-defense, 
                            team building, and the great outdoors.  Our dream is to 
                            equip the next generation with tools to build a future in which all people—and our Earth—thrive.</p>
                        <Link 
                        className={styles.statementLink}
                        href="/">Learn more about how we help</Link>
                    </div>
                    {/* make this into a separate component */}
                    <div className={styles.imgCaraWrapper}>
                        <div className={styles.imgCara}>
                            <div className={styles.bannerWrapper}>
                                <div className={styles.bannerMain}>
                                    <Image
                                    className={styles.bannerImg}
                                    src={banner}></Image>
                                    <Image
                                    className={styles.bannerImg}
                                    src={banner}></Image>
                                </div>
                            </div>
                        </div>
                    </div>
                        {/* <div className={styles.secondRow}>
                            <Image
                            src={img1}
                            className={styles.missionCaraImg}
                            />
                            <Image
                            src={img1}
                            className={styles.missionCaraImg}
                            />
                        </div> */}
                </div>
            </div>
        </div>
    );
}

export default Mission;
