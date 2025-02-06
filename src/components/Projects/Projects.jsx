import React, { useEffect, useRef, useState } from "react";
import projects from "./projects.json";
import styles from "./Projects.module.css";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // State to track visibility
  const sectionRef = useRef(null); // Ref for the section element

  const visibleProjects = showAll ? projects : projects.slice(0, 2); // Show first 2 initially

  // Intersection Observer to detect when the section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Set visibility to true when the section is in view
          observer.unobserve(entry.target); // Stop observing once visible
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current); // Start observing the section
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current); // Cleanup observer
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.container} ${isVisible ? styles.visible : ""}`}
      id="projects"
    >
      <h2 className={styles.title}>What I've done</h2>
      <h2 className={styles.sub}>See What I've Been Working On</h2>
      <div className={styles.projects}>
        {visibleProjects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>
      <div className={styles.buttonContainer}>
        <button
          className={styles.showMoreButton}
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </section>
  );
};