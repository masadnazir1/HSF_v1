import React from "react";
import styles from "./PageHeader.module.css";

const PageHeader = ({ title, description, image }) => {
  return (
    <section
      className={styles.headerSection}
      style={{ backgroundImage: `url(${image?.src || image})` }}
    >
      <div className={styles.overlay}>
        <div className={styles.textContent}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
