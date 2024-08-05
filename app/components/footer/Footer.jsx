import React from 'react';
import styles from "./Footer.module.css"
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            
            <div className={styles.info}>
                <ul className={styles.navList}>
                    <li className={styles.navListItem}>
                        <Link className={styles.navLink} href="/">
                            Home
                        </Link>
                    </li>
                    <li className={styles.navListItem}>
                        <Link className={styles.navLink} href="/about">
                            About Us
                        </Link>
                    </li>
                    <li className={styles.navListItem}>
                        <Link className={styles.navLink} href="/contactus">
                            Contact Us
                        </Link>
                    </li>
                    <li className={styles.navListItem}>
                        <a 
                        className={`${styles.navLink} ${styles.navPrax}`} 
                        href="https://thepraxeum.com/"
                        target='_blank'>
                            The Praxeum
                        </a>
                    </li>
                </ul>
                <div className={styles.title}>
                <p>2024 Guardian Saga Support</p>
                <p>&copy; all rights reserved</p>
            </div>
                {/* <div className={styles.contact}>
                    <p>info@guardiansaga.support</p>
                    <p>385 E Taylor st Suite 2C<br/>San Jose, CA 95112</p>
                </div> */}
            </div>
        </footer>
    );
}

export default Footer;
