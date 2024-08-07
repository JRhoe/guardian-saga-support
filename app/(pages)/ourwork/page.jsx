"use client"
import React, { useState } from 'react';
import styles from "./page.module.css"
import banner from "../../../public/partnerships banner.jpg"
import Image from 'next/image';
import ApplicationSelect from '../../components/ui/applicationSelect/ApplicationSelect';
import { applications } from '../../constants';

const Page = () => {

    const [activeApp, setActiveApp] = useState(null);
    const [loading, setLoading] = useState(false)

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
                    <div className={styles.applicationLinks}>
                        {
                            applications.map((application) => (
                                <ApplicationSelect
                                title={application.title}
                                requirements={application.requirements}
                                linkFunction={() => {
                                    if(activeApp !== application.link){
                                        setLoading(true)
                                        setActiveApp(application.link)
                                    }
                                }}
                                imgUrl={application.imgUrl}
                                key={application.title}
                                />
                            ))
                        }
                    </div>
                </div>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
                <div id="application" className={styles.applicationWrapper}>
                {loading &&
                    <div className={styles.skeletonApp}>
                        {/* <span className="material-symbols-outlined">
                    progress_activity</span> */}
                    Loading...
                    </div>
                }
                {
                    activeApp == null && <div className={styles.skeletonApp}>make a selection to vew appication</div>
                }
                {
                    activeApp === "team" &&
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd5BONlP9y6koiwFACn9NxcRxuGZntopbEs_y4kGDm_aHwAFQ/viewform?embedded=true" 
                    width="100%" height="1969" frameBorder="0" marginHeight="0" marginWidth="0" onLoad={() => setLoading(false)}>Loading…</iframe>
                }
                {
                    activeApp === "defense" &&
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfKHrbJrrVsBgOOnkEkt6yZu2KJrnaPxdxxyWrTXpEgoze6zQ/viewform?embedded=true" 
                    width="100%" height="1969" frameBorder="0" marginHeight="0" marginWidth="0" onLoad={() => setLoading(false)}>Loading…</iframe>
                }
                {
                    activeApp === "class" &&
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf56kmyGNqMdkEz27A_A3t9-WmI3Iqn5Mmp7EHe3NjQax3BxQ/viewform?embedded=true" 
                    width="100%" height="1969" frameBorder="0" marginHeight="0" marginWidth="0" onLoad={() => setLoading(false)}>Loading…</iframe>
                }
                {
                    activeApp === "camp" &&
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdoFSjHFfUglAvjkkbDaMIIqbnRvSvA7X15c00Bie0fYpyKxA/viewform?embedded=true"
                     width="100%" height="1969" frameBorder="0" marginHeight="0" marginWidth="0" onLoad={() => setLoading(false)}>Loading…</iframe>
                }
                </div>
            </div>
        </div>
        
        </>
    );
}

export default Page;
