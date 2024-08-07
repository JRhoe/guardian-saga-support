{"use client"}
import React, { useState } from 'react';
import styles from './ApplicationSelect.module.css';
import Image from 'next/image';

const ApplicationSelect = ({title, requirements, linkFunction,imgUrl}) => {
    const [loading, setLoading] = useState(true)
    return (
        <div className={styles.selectWrapper}>
            <Image
            src={imgUrl}
            className={styles.img}
            alt={title}
            onLoad={() => setLoading(false)}/>
            {loading ?
                <div className={styles.skeletonWrapper}>
                    <div>
                        <div className={styles.skeletonTitle}><div className={styles.skeletonLoader}></div></div>
                        <div className={styles.skeletonSubTitle}><div className={styles.skeletonLoader}></div></div>
                    </div>
                    <div className={styles.skeletonInfo}>
                        <div className={styles.skeletonPara}><div className={styles.skeletonLoader}></div></div>
                        <div className={styles.skeletonPara}><div className={styles.skeletonLoader}></div></div>
                        <div className={styles.skeletonPara}><div className={styles.skeletonLoader}></div></div>
                    </div>
                </div>
            :
            <div className={styles.textWrapper}>
                <h1 className={styles.title}>{title}</h1>
                <div className={styles.info}>
                    <div className={styles.requirementWrapper}>
                        <h3 className={styles.subTitle}>Requirements:</h3>
                        <ul className={styles.requirements}>
                            {
                                requirements.map((requirement) => {
                                    return <li className={styles.requirement} key={requirement}>{requirement}</li>
                                })
                            }
                        </ul>
                    </div>
                    <div className={styles.linkWrapper}>
                        <a href="#application" onClick={linkFunction} className={styles.link}>Apply Now</a>
                    </div>
                </div>
            </div>
            }
        </div>
    );
}

export default ApplicationSelect;
