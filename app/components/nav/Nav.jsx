import React from 'react';
import styles from "./Nav.module.css"
import Link from 'next/link';
import MenuMobile from '../ui/menuMobile/MenuMobile';

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
                            {/* <div className={styles.dropListItem}><Link href="" className={styles.navLink}>Blog</Link></div> */}
                        </div>
                    </div>
                    <div className={`${styles.navListItem} ${styles.dropdownLink}`}>
                        <Link href="/volunteer"className={styles.navLink}>Your Support</Link>
                        <div className={styles.dropdownWrapper}>
                            <div className={styles.dropListItem}><a href="https://www.paypal.com/donate/?hosted_button_id=MYEANUWFB5PYC" target='_blank' className={styles.navLink}>Donate</a></div>
                            <div className={styles.dropListItem}><Link href="/volunteer" className={styles.navLink}>Volunteer</Link></div>
                            {/* <div className={styles.dropListItem}><Link href="/partnership" className={styles.navLink}>Partnership</Link></div> */}
                            <div className={styles.dropListItem}><a href="/about#contact" className={styles.navLink}>Contact Us</a></div>
                        </div>
                    </div>
                </div>
                {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" /> */}
            </nav>
            <div className={styles.mobileMenu}>
                <MenuMobile/>
            </div>
        </div>
    );
}

export default Nav;
