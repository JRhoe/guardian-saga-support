import React from 'react';
import styles from "./Nav.module.css"
import Link from 'next/link';

const Nav = () => {
    return (
        <div className={styles.navHolder}>
            <nav className={styles.nav}>
                <div className={styles.logo}>
                    Guardian Saga Support
                </div>
                <ul className={styles.navList}>
                    <li className={styles.navListItem}>
                        <Link href="/" className={styles.navLink}>Home</Link>
                    </li>
                    <li className={styles.navListItem}>
                        <Link href="/" className={styles.navLink}>About Us</Link>
                    </li>
                    <li className={styles.navListItem}>
                        <Link href="/partnerships" className={styles.navLink}>Partnership</Link>
                    </li>
                    <li className={styles.navListItem}>
                        <Link href="/" className={styles.navLink}>Articles</Link>
                    </li>
                    <li className={styles.navListItem}>
                        <Link href="/" className={styles.navLink}>Contact Us</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;
