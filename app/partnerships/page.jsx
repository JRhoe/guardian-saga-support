import React from 'react';
import styles from "./page.module.css"
import banner from "../../public/partnerships banner.jpg"
import Image from 'next/image';

const Page = () => {
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
                        <h1 className={styles.title}>Praxeum Partnership</h1>
                        <div className={styles.textDivider}></div>
                        <p className={styles.subtitle}>Part 1: Saving the Past</p>
                        <br/>
                        <p>Many of the lessons in Guardian Art come from indigenous teachings, which are considered endangered.  
                            So without any business experience nor business aspirations, we opened up our first school in 2004 as 
                            part of a mission to keep these practices alive.  This is why our outreach programs
                             emphasize returning powerful traditions such as “Little Brother of War,” the original version of 
                             Lacrosse played by Native Americans. </p>
                        <p className={styles.subtitle}>Part 2: Saving the People</p>
                        <br/>
                        <p>The stats are depressing.  Of all ethnic groups in the U.S. and Canada, Natives suffer the 
                            highest rates of substance abuse, suicide, and violence.  To help, we run free outreach 
                            programs for these at-risk communities across North America.  We always knew it would be
                             beneficial for any youth to learn Guardian Art, but its impact on Native communities is 
                             beyond what we expected.  It&apos;s been akin to the rewilding effect 
                             of wolves in Yellowstone, as our outreach programs have:
                        </p>
                        <ul>
                            <li>Helped reverse the devastation from genocide.</li>
                            <li>Improved physical, mental, emotional, and spiritual wellbeing.</li>
                            <li>Empowered Native youth with their heritage.</li>
                            <li>Deepened their connection to nature and sacred sites.</li>
                            <li>Strengthened community spirit.</li>
                        </ul>
                        <p>These outreach programs continue to grow with more support 
                            from our members through tuition, donations, and volunteer work.  
                            And as part of our curriculum, advanced students travel the world to 
                            directly help these communities - gaining valuable experiences.</p>
                        <p className={styles.subtitle}>Part 3: Saving the Future</p>
                        <br/>
                        <p>Since time immemorial, Indigenous people have been caretakers of the environment. 
                             And despite making up just 5% of today&apos;s world population, they still protect 80% 
                             of the Earth&apos;s biodiversity.  Their traditional culture and knowledge are key to a 
                             sustainable future for all.  Therefore, we are currently working hard to set up 
                             cultural preserves to allow for land and cultural conservation on a larger scale.</p>
                    </div>
                    <div className={styles.textSection}>
                        <h1 className={styles.title}>Partnerships and Workshops</h1>
                        <div className={styles.textDivider}></div>
                        <p className={styles.subtitle}> Paragraph about how organizations can partner with us (workshops)</p>
                        <br/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et unde ipsam ea ducimus hic, 
                            voluptatum ex deserunt tempora, asperiores nobis modi itaque quasi nisi voluptates placeat 
                            quod atque quam optio eius! Omnis, eius. Soluta, impedit eum ipsa laudantium, laborum deleniti 
                            cum corrupti quae voluptates, cupiditate at molestias adipisci excepturi minima.</p>
                    </div>
                </div>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd5BONlP9y6koiwFACn9NxcRxuGZntopbEs_y4kGDm_aHwAFQ/viewform?embedded=true" 
                width="640" height="1969" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
        </div>
        
        </>
    );
}

export default Page;
