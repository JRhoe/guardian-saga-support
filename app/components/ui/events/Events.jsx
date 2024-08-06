import React from 'react';
import styles from "./Events.module.css"

const Events = ({title, date, para, link, direction, index}) => {
    return (
        <div className={`${styles.eventContainer} ${direction === "left" ? styles.left : styles.right}`} style={{"animationDelay":`${(index*2)+0.4}s`}}>
            <div className={styles.textSpace}>
                <h1 className={styles.title}>{title}</h1>
                <small className={styles.date}>{date}</small>
                <p className={styles.para}>
                    {para}
                </p>
                <div className={styles.linkWrapper}>
                    <a href={link} className={styles.linkText}>Read More</a>
                </div>
            </div>
            <div className={styles.eventCircle}></div>
            <div className={styles.eventArrow}></div>
        </div>
    );
}

export default Events;
