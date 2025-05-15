import React from "react";
import styles from "../about-hero-section/styles.module.scss";
import Image from "next/image";
import background from "../../../../../public/assets/images/diagnostics.jpg";

export default function AboutHero() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.hero_wrapper}>
        <div className={styles.container}>
          <div className={styles.review_box}>
            <p>
              <span>WELCOME</span>
            </p>
            <h2>Discover Bluecross Specialist Hospital&apos;s Commitment</h2>
            <p>
              At Bluecross Specialist Hospital, we pride ourselves on delivering
              exceptional healthcare with advanced technology and a
              compassionate approach tailored to every patient&apos;s unique
              needs.
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
