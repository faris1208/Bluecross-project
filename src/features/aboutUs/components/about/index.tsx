import React from "react";
import styles from "../about/styles.module.scss";
import Image from "next/image";
import emergency from "../../../../../public/assets/images/emergency.jpg";

export default function AboutAbout() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_wrapper}>
        <div className={styles.container}>
          <div className={styles.about_image}>
            <div className={styles.diagnostics_image}>
              <Image
                src={emergency}
                alt="back"
                width={400}
                height={400}
                className={styles.background_image}
              />
            </div>
          </div>
          <div className={styles.about_text}>
            <div className={styles.review_box}>
              <p>
                <span>ABOUT US</span>
              </p>
              <h2>Comprehensive Care in Downtown Medical Excellence</h2>
              <p>
                Located in the heart of downtown, Bluecross Specialist Hospital
                has earned the trust of the community as a leading medical
                facility. Our focus on cardiology, orthopedics, and neurology,
                combined with our state-of-the-art resources, enables us to
                deliver the highest standard of care and treatment to all our
                patients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
