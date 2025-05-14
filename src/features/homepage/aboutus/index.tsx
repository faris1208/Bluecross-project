import React from "react";
import styles from "../aboutus/styles.module.scss";

export default function HomepageAboutUs() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.about_about}>
          <p>ABOUT US</p>
          <h2>Comprehensive Care in Downtown Medical Excellence</h2>
        </div>
        <div className={styles.about_text}>
          <p>
            Bluecross Specialist Hospital is dedicated to providing high-quality
            healthcare across various medical specialties with a focus on
            patient-centered approaches and innovative treatments.
          </p>
          <p>
            Our experienced team of healthcare professionals is committed to
            ensuring that each patient receives individualized care in a
            comfortable and state-of-the-art environment.
          </p>
        </div>
        <div className={styles.btn_container}>
            <button>Read More</button>
          </div>
      </div>
    </div>
  );
}
