import React from "react";
import styles from "./Hero.module.css";

export const Hero = ()=>{
    return(
        <section id="home" className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Hello!
                </h1>
                <p className={styles.description}>
                Welcome to my portfolio – showcasing my work, skills, and passion!
                </p>
                <a href="mailto:natthamon.pro@gmail.com"className={styles.contactBtn}>
                    Contact Me
                </a>
            </div>
            <img 
                src="/assets/hero/yy.png" 
                alt = "Hero image of me"
                className ={styles.heroImg }/>
                <div className={styles.topBlur}/>
                <div className={styles.bottomBlur}/>
        </section>
    );
};