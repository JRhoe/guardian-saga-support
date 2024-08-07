"use client"
import React, { useState } from 'react';
import styles from "./MenuMobile.module.css"
import Link from 'next/link';

const MenuMobile = () => {

    const [isOpen, setisOpen] = useState(false)

    function changeMenu(menu){
        document.getElementById("main").classList.remove(styles.activeSection)
        document.getElementById(menu).classList += ` ${styles.activeSection}`
        document.getElementById("backBtn").style = "display: block"
    }

    function backBtnFn() {
        document.getElementById("story").classList.remove(styles.activeSection)
        document.getElementById("impact").classList.remove(styles.activeSection)
        document.getElementById("help").classList.remove(styles.activeSection)
        document.getElementById("main").classList += ` ${styles.activeSection}`
        document.getElementById("backBtn").style = "display: none"
    }

    function toggleMenu() {
        setisOpen((prev) => !prev)
        !isOpen ?
        document.getElementsByTagName("html")[0].classList += " stopScroll"
        : document.getElementsByTagName("html")[0].classList.remove("stopScroll")
    }

    return (
        <>
            <nav className={styles.nav}>
                <div className={styles.logo}>
                    <Link href="/" className={styles.logoLink}
                    onClick={() => {
                        setisOpen(false)
                        document.getElementsByTagName("html")[0].classList.remove("stopScroll")
                    }}>Guardian Saga Support</Link>
                </div>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
                <button 
                className={styles.hamburger}
                onClick={toggleMenu}
                ><span className="material-symbols-outlined">menu</span></button>
                {isOpen &&
                    <div className={styles.menuContainer}>
                        <button 
                        id="backBtn" 
                        className={styles.backbtn}
                        onClick={backBtnFn}><span className="material-symbols-outlined">arrow_back_ios</span></button>
                        <div id="main" className={`${styles.main} ${styles.activeSection}`}>
                            <div className={styles.navList}>
                                <div className={styles.dropdownLink} onClick={() => changeMenu("story")}>
                                    <h1 className={`${styles.navListItem}`}>Our Story</h1>
                                    <span className="material-symbols-outlined">arrow_forward_ios</span>
                                </div>
                                <div className={styles.dropdownLink}>
                                    <Link href="/ourwork" className={`${styles.navListItem}`}
                                    onClick={toggleMenu}>Our Work</Link>
                                </div>
                                <div className={styles.dropdownLink} onClick={() => changeMenu("impact")}>
                                    <h1 className={`${styles.navListItem}`}>Our Impact</h1>
                                    <span className="material-symbols-outlined">arrow_forward_ios</span>
                                </div>
                                <div className={styles.dropdownLink} onClick={() => changeMenu("help")}>
                                    <h1 className={`${styles.navListItem}`}>Your Help</h1>
                                    <span className="material-symbols-outlined">arrow_forward_ios</span>
                                </div>
                            </div>
                        </div>
                        <div id="story" className={`${styles.main}`}>
                            <div className={styles.navList}>
                                <a href="/#ourStory" className={`${styles.navListItem}`}
                                onClick={toggleMenu}>Our Story</a>
                                <Link href="/about" className={`${styles.navListItem}`}
                                onClick={toggleMenu}>About Us</Link>
                            </div>
                        </div>
                        <div id="impact" className={`${styles.main}`}>
                            <div className={styles.navList}>
                                <Link href="/timeline" className={`${styles.navListItem}`}
                                onClick={toggleMenu}>Timeline</Link>
                            </div>
                        </div>
                        <div id="help" className={`${styles.main}`}>
                            <div className={styles.navList}>
                                <a 
                                    href="https://www.paypal.com/donate/?hosted_button_id=MYEANUWFB5PYC" 
                                    target='_blank' 
                                    className={`${styles.navListItem}`}
                                    onClick={toggleMenu}>Donate
                                </a>
                                <Link href="/volunteer" className={`${styles.navListItem}`}
                                onClick={toggleMenu}>Volunteer</Link>
                                <a href="/about#ourStory" className={`${styles.navListItem}`}
                                onClick={toggleMenu}>Contact Us</a>
                            </div>
                        </div>
                    </div>
                }
            </nav>
        </>
    );
}

export default MenuMobile;
