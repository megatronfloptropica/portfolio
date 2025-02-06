import React from "react";
import styles from "./Contact.module.css";

export const Contact =()=>{
    return (
        <footer id="contact" className={styles.container}>   
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>I'd love to hear from you—drop me a message!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src="/assets/contact/emailIcon.png" alt="Email Icon" />
                    <a href="mailto:natthamon.pro@gmail.com">natthamon.pro@gmail.com</a>
                </li>

                <li className={styles.link}>
                    <img src="/assets/contact/githubIcon.png" alt="Github Icon" />
                    <a href="https://github.com/megatronfloptropica">Github.com</a>
                </li>

                <li className={styles.link}>
                    <img src="/assets/contact/linkedinIcon.png" alt="Linkedin Icon" />
                    <a href="https://www.linkedin.com/in/natthamon-pro">Linkedin.com</a>
                </li>
            </ul>
        </footer>
    )
}