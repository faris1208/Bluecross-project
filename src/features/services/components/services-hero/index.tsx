import React from "react";
import styles from "../services-hero/styles.module.scss";
import Image from "next/image";
import background from "../../../../../public/assets/images/gynecologist.jpg";

export default function ServicesHero() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.hero_wrapper}>
        <div className={styles.container}>
          <div className={styles.review_box}>
            <p>
              <span>OUR SERVICES</span>
            </p>
            <h2>Comprehensive Medical Services Tailored for You</h2>
            <p>
            Experience top-notch healthcare with personalized treatment plans designed to meet your unique medical needs at Bluecross Specialist Hospital.
            </p>
          </div>
        </div>
        <div className={styles.background}>
          <div className={styles.diagnostics_image}>
            <Image
              src={background}
              alt="back"
              width={500}
              height={500}
              className={styles.background_image}
            />
            <div className={styles.overlay}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
