import React from "react";
import styles from "./ProjectCard.module.css";

// import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { ImgName,title, imageSrc, description, skills, code, more },
}) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <img
        src={`/assets/projects/${ImgName}`}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a href={more} className={styles.link}>
          more detial
        </a>
        {/* <a href={more} className={styles.link}>
          Source
        </a> */}
      </div>
    </div>
  );
};