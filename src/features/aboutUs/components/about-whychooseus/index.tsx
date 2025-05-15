import React from "react";
import styles from "../about-whychooseus/styles.module.scss";
import emergency from "../../../../../public/assets/images/child.jpeg";
import Image from "next/image";

export default function AboutWhyChooseUs() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.container_image}>
          <Image
            src={emergency}
            alt="emergency"
            width={500}
            height={500}
            className={styles.emergency}
          />
          <div className={styles.why_choose}>
            <h2>Why Choose Us</h2>
            <p>
              Experience exceptional care through advanced technology, a
              compassionate team, and a commitment to personalized treatment
              plans tailored for each patient.
            </p>
            <div className={styles.check}>
                <div className={styles.check_text}>
                    <p>Expert Medical Team</p>
                </div>
                <div className={styles.check_text}>
                    <p>State-of-the-Art Facilities</p>
                </div>
                <div className={styles.check_text}>
                    <p>Comprehensive Specialty Care</p>
                </div>
                <div className={styles.check_text}>
                    <p>Patient-Centered Approach</p>
                </div>
            </div>
            <div className={styles.btn}>
                <button>Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
