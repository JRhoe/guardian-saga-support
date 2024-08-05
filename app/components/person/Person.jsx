import React from 'react';
import  styles from "./Person.module.css"
import Image from 'next/image';

const Person = ({pfp,name,title,email,para, imgStyles}) => {
    return (
        <div className={styles.person}>
            <div className={styles.header}>
                <figure className={styles.pfpWrapper}>
                    <Image
                    className={`${styles.pfpImg}`}
                    src={pfp}
                    alt={name[0]}/>
                </figure>
                <div className={styles.info}>
                    <h1 className={styles.name}>{name[0] + " " +name[1]}</h1>
                    <p className={styles.title}>{title}</p>
                    <p className={styles.email}>{email}</p>
                </div>
            </div>
            <div className={styles.main}>
                <h2 className={styles.subtitle}>About {name[0]}:</h2>
                <p className={styles.para}>{para}</p>
            </div>
        </div>
    );
}

export default Person;
