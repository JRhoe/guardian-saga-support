"use client"
import React from 'react';
import styles from "./Header.module.css"
import Image from "next/image";
import bgImage from "/public/DSC02697.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Header = () => {
    const tl = gsap.timeline({delay:0.5})
    useGSAP(() => {
        tl.to("#practical", {
            x: "0",
        })
        tl.to("#powerful", {
            x: "0",
        },0.2)
        tl.to("#meaningful", {
            x: "0",
        },0.4)
    },[])

    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <figure className={styles.mainImgWrapper}>
                    <Image
                    className={styles.mainImg}
                    src={bgImage}
                    fill
                    alt="bgImage"/>
                </figure>
                {/* <div className={styles.overlay}></div> */}
                <div id="headerMain" className={styles.headerContainer}>
                    <h1 id="practical" className={styles.headerText}>Making</h1>
                    <h1 id="powerful" className={styles.headerText}>Future</h1>
                    <h1 id="meaningful" className={styles.headerText}>Guardians</h1>
                </div>
                <a href="#mission">
                    <div className={styles.scrollContainer}>
                        <div className={styles.scrollInner}></div>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Header;
