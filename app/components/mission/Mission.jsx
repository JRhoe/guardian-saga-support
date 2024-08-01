import React from 'react';
import styles from "./Mission.module.css"

const Mission = () => {
    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <h1 className={styles.title}>Training the next generation of <br/>Earth's guardians</h1>
                <p>We are a non-profit dedicated to providing underprivileged youth with empowering programs such as self-defense, 
                    team building, and the great outdoors.  Our dream is to 
                    equip the next generation with tools to build a future in which all people—and our Earth—thrive.</p>
            </div>
        </div>
    );
}

export default Mission;
