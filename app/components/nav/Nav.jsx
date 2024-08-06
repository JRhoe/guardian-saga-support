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
                    <div className={`${styles.navListItem} ${styles.dropdownLink}`}>
                        <a href="/#ourStory" className={styles.navLink}>Our Story</a>
                        <div className={styles.dropdownWrapper}>
                            <Link href="/about" className={styles.navLink}>About Us</Link>
                        </div>
                    </div>
                    <div className={styles.navListItem}>
                        <Link href="/ourwork" className={styles.navLink}>Our Work</Link>
                    </div>
                    <div className={`${styles.navListItem} ${styles.dropdownLink}`}>
                        <Link href="/timeline" className={styles.navLink}>Our Impact</Link>
                        <div className={styles.dropdownWrapper}>
                            <div className={styles.dropListItem}><Link href="/timeline" className={styles.navLink}>Timeline</Link></div>
                            <div className={styles.dropListItem}><Link href="" className={styles.navLink}>Blog</Link></div>
                        </div>
                    </div>
                    <div className={`${styles.navListItem} ${styles.dropdownLink}`}>
                        <p className={styles.navLink}>Your Support</p>
                        <div className={styles.dropdownWrapper}>
                            <div className={styles.dropListItem}><a href="https://www.paypal.com/donate/?hosted_button_id=MYEANUWFB5PYC" target='_blank' className={styles.navLink}>Donate</a></div>
                            <div className={styles.dropListItem}><Link href="/volunteer" className={styles.navLink}>Volunteer</Link></div>
                            <div className={styles.dropListItem}><Link href="/partnership" className={styles.navLink}>Partnership</Link></div>
                            <div className={styles.dropListItem}><a href="/about#contact" className={styles.navLink}>Contact Us</a></div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;
