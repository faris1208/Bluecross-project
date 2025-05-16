import React from "react";
import styles from "../contact-hero/styles.module.scss";
import Image from "next/image";
import background from "../../../../../public/assets/images/new_woman.jpeg";

export default function ContactHero() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.hero_wrapper}>
        <div className={styles.container}>
          <div className={styles.review_box}>
            <p>
              <span>GET IN TOUCH</span>
            </p>
            <h2>Contact Bluecross Specialist Hospital Today</h2>
            <p>
            We&apos;re here to assist you with your healthcare needs and answer any questions you may have about our services.
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
