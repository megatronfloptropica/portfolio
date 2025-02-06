import React from "react";
import styles from "./About.module.css";

 export const About =()=>{
    return (
        <section id="about" className={styles.container}  >
            <span className={styles.title}>Who am I ?</span>
            <span className={styles.description}>I am a computer science student at Chulalongkorn University from Thailand who is interested in programming, software development, machine learning and data analytics. </span>
            <div className={styles.bars}>
                <div className={styles.bar}>
                    <img src="/assets/about/uxui.png" alt="UXUI" className={styles.barImg} />
                        <div className={styles.barText}> 
                        <h2>UX/UI Design</h2>
                        <p>My interest in UX/UI design comes from its ability to make digital products intuitive, efficient, and visually appealing. Good design improves usability, engagement, and accessibility, ensuring that users can navigate and interact with applications seamlessly.</p>
                    </div>
                </div>

                <div className={styles.bar}>
                    <img src="/assets/about/sw.png" alt="softwareDev" className={styles.barImg} />
                        <div className={styles.barText}> 
                        <h2>Software Development</h2>
                        <p>I'm interested in software development because it blends creativity with problem-solving, allowing for impactful solutions and continuous learning in a fast-evolving field.</p>
                    </div>
                </div>

                <div className={styles.bar}>
                    <img src="/assets/about/data.png" alt="data" className={styles.barImg} />
                    <div className={styles.barText}>
                        <h2>Data Analytics and Machine Learning</h2>
                        <p>I'm passionate about data analytics and machine learning because they enable data-driven insights and the development of intelligent systems, offering solutions to complex problems and opportunities for innovation.</p>
                    </div>
                </div>
            </div>
            
        </section>
    );
 };