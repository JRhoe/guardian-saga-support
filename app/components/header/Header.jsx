"use client"
import React from 'react';
import styles from "./Header.module.css"
import Image from "next/image";
import bgImage from "/public/DSC02697.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Header = () => {
    const tl = gsap.timeline()
    useGSAP(() => {
        tl.from("#headerMain", {
            x: 0,
        })
        tl.from("#practical", {
            x: "-100vw",
        })
        tl.from("#powerful", {
            x: "-100vw",
        })
        tl.from("#meaningful", {
            x: "-100vw",
        })
    },[])

    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <figure className={styles.mainImgWrapper}>
                    <Image
                    className={styles.mainImg}
                    src={bgImage}
                    fill
                    alt="wiers"/>
                </figure>
                <div id="headerMain" className={styles.headerContainer}>
                    <h1 id="practical" className={styles.headerText}>Practical.</h1>
                    <h1 id="powerful" className={styles.headerText}>Powerful.</h1>
                    <h1 id="meaningful" className={styles.headerText}>Meaningful.</h1>
                </div>
            </div>
        </div>
    );
}

export default Header;
