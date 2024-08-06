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
            <h1 className={styles.title}>Current Focus Areas</h1>
                <div className={styles.imgContainer}>
                    <div id='section1' className={styles.section}>
                        <Image
                        className={styles.praxImg}
                        src={selfdefenseImg}
                        alt='self-defense'/>
                        <div className={styles.sectionText}>
                            <h1>Self-defense</h1>
                        </div>
                        <div className={styles.about}>
                            <div className={styles.aboutTextWrapper}>
                                <h1 className={styles.aboutTitle}>Self-Defense</h1>
                                <p className={styles.aboutPara}>
                                Before being able to help others, one must be able take 
                                care of themselves, and learning self-defense is one of 
                                the best ways for gaining the discipline and confidence to do so.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div id='section2' className={styles.section}>
                        <Image
                        className={styles.praxImg}
                        src={teamImg}
                        alt='More team work'/>
                        <div className={styles.sectionText}>
                            <h1>Teambuilding</h1>
                        </div>
                        <div className={styles.about}>
                            <div className={styles.aboutTextWrapper}>
                                <h1 className={styles.aboutTitle}>Team Building</h1>
                                <p className={styles.aboutPara}>
                                Not only does team building develop communication and problem 
                                solving skills necessary to work with others, it is also a 
                                great foundation for youth to grow healthy networks.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div id='section3' className={styles.section}>
                        <Image
                        className={styles.praxImg}
                        src={outdoorsImg}
                        alt='he great ourdoors'/>
                        <div className={styles.sectionText}>
                            <h1>The Great Outdoors</h1>
                        </div>
                        <div className={styles.about}>
                            <div className={styles.aboutTextWrapper}>
                                <h1 className={styles.aboutTitle}>The Great Outdoors</h1>
                                <p className={styles.aboutPara}>
                                Adventures in different natural environments help 
                                youth think beyond their immediate surroundings, 
                                which builds bigger picture perspectives.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Praxeum;
