import React from 'react';
import styles from "./Mission.module.css"
import img1 from "../../../public/MissionCara/DSC04264.jpg"
import Image from 'next/image';
import Link from 'next/link';

const Mission = () => {
    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.statement}>
                    <h1 className={styles.statementTitle}>Training the next generation of Earth's guardians</h1>
                    <p className={styles.statementPara}>We are a non-profit dedicated to providing underprivileged youth with empowering programs such as self-defense, 
                        team building, and the great outdoors.  Our dream is to 
                        equip the next generation with tools to build a future in which all people—and our Earth—thrive.</p>
                    <Link 
                    className={styles.statementLink}
                    href="/">Learn more about how we help</Link>
                </div>
                {/* make this into a separate component */}
                <div className={styles.imgCara}>
                    <div className={styles.firstRow}>
                        <Image
                        src={img1}
                        className={styles.missionCaraImg}
                        />
                        <Image
                        src={img1}
                        className={styles.missionCaraImg}
                        />
                    </div>
                    <div className={styles.secondRow}>
                        <Image
                        src={img1}
                        className={styles.missionCaraImg}
                        />
                        <Image
                        src={img1}
                        className={styles.missionCaraImg}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mission;
