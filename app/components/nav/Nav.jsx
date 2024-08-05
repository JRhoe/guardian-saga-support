import React from 'react';
import styles from "./Nav.module.css"
import Link from 'next/link';

const Nav = () => {
    return (
        <div className={styles.navHolder}>
            <nav className={styles.nav}>
                <div className={styles.logo}>
                    <Link href="/" className={styles.logoLink}>Guardian Saga Support</Link>
                </div>
                <div className={styles.navList}>
                    <div className={`${styles.navListItem} ${styles.storyLink}`}>
                        <a href="/#ourStory" className={styles.navLink}>Our Story</a>
                        <div className={styles.storyDropdown}>
                            <Link href="/about" className={styles.navLink}>About Us</Link>
                        </div>
                    </div>
                    <div className={styles.navListItem}>
                        <Link href="/ourwork" className={styles.navLink}>Our Work</Link>
                    </div>
                    <div className={styles.navListItem}>
                        <Link href="/" className={styles.navLink}>Our Impact</Link>
                    </div>
                    <div className={styles.navListItem}>
                        <a href="https://www.paypal.com/donate/?hosted_button_id=MYEANUWFB5PYC" target='_blank' className={styles.navLink}>Your Support</a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;
