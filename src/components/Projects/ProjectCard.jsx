import React from "react";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({
  project: { ImgName, title, imageSrc, description, skills, code, more, downloadLink },
}) => {
  const handleMoreDetailClick = () => {
    if (title === "Data Visualization" && downloadLink) {
      // Trigger the download
      const link = document.createElement("a");
      link.href = downloadLink;
      link.download = "dataVisaulize.zip"; // Specify the default filename for the download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else if (more) {
      // Redirect to the more details page
      window.open(more, "_blank");
    }
  };

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
        <a
          href={more || "#"}
          className={styles.link}
          onClick={handleMoreDetailClick}
        >
          more detail
        </a>
      </div>
    </div>
  );
};