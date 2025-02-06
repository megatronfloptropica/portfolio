import React from "react";
import styles from "./Education.module.css";

const timelineData = [
    { year: "2022 - Present", title: "Chulalongkorn University", content: "Faculty of Science, Major in Computer Science" },
    { year: "2018 - 2020", title: "Rajsima Witthayalai School", content: "High School Diploma in Math - Science" },
];

export const Education = () => {
    return (
        <section id="education" className={styles.container}>
            <div className={styles.header}>
                    <h2>Education</h2>
                    <p>Here is my academic journey</p>
            </div>
            <div className={styles.timeline}>
                {timelineData.map((item, index) => (
                    <div key={index} className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}>
                        <div className={styles.textbox}>
                            <h2>{item.title}</h2>
                            <small>{item.year}</small>
                            <p>{item.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
