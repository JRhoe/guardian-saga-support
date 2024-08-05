import React from 'react';
import styles from "./page.module.css"
import Person from '../components/person/Person';
import jamesImg from "../../public/JamesRhoe.jpg"
import IsaacImg from "../../public/IsaacHe.jpg"

const Page = () => {
    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <h1 className={styles.pageTitle}>About Us</h1>
                <div className={styles.divider}></div>
                <div className={styles.main}>
                    <Person
                    pfp={jamesImg}
                    name={["James", "Rhoe"]}
                    title={"President"}
                    email={"james@guardiansaga.support"}
                    para="James Rhoe has been the president of Guardian Saga Support 
                    since 2022 and has been a commander in Guardian Art since 2019. 
                    During that time, he developed a passion for teaching and training 
                    the next generation in Guardian Art."
                    imgStyles={[-50,40]}/>
                    <Person
                    pfp={IsaacImg}
                    name={["Isaac", "He"]}
                    title={"Director of volunteer support"}
                    email={"isaache@guardiansaga.support"}
                    para="Isaac is a high school student at the Quarry Lane School. 
                    Isaac is passionate about the preservation and promotion of 
                    Guardian Arts, having underpriviledged youth communities to benefit 
                    from it. Isaac is an active Shadow Commander at Guardian Arts after 
                    learning and practicing Guardian Arts for 7 years. "/>
                </div>
                <div id="contact" className={styles.contact}>
                    <div className={styles.divider}></div>
                    <h2>info@guardiansaga.support</h2>
                    <p>San Jose, CA</p>
                </div>
            </div>
        </div>
    );
}

export default Page;
