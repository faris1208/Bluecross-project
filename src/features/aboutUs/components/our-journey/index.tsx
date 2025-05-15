import React from "react";
import styles from "../our-journey/styles.module.scss";
import dia from "../../../../../public/assets/images/orthopedic.jpg"
import surgery from "../../../../../public/assets/images/surgery.jpg"
import Image from "next/image";

export default function OurJourney() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_wrapper}>
        <div className={styles.container}>
          <div className={styles.services}>
            <p>
              <span>OUR JOURNEY</span>
            </p>
            <h2>Years of Dedicated Service</h2>
            <p>
              With years of experience,Bluecross Specialist Hospital has built a
              reputation for excellence in medical care and compassionate
              patience service across various specialities.
            </p>
          </div>
          <div className={styles.reputation_container}>
            <div className={styles.reputation_text}>
              <h2>Established Reputation</h2>
              <p>
                {" "}
                Since our inception, Bluecross Specialist Hospital has been
                recognized for its commitment to quality care, boasting a team
                of experienced professionals dedicated to enhancing patient
                health outcome.{" "}
              </p>
              <div className={styles.dia_image}>
                <Image
                src={dia}
                alt="dia"
                width={300}
                height={300}
                className={styles.dia_container}
                 />
              </div>
            </div>
            <div className={styles.reputation_text}>
              <h2>Community Engagement</h2>
              <p>
                We actively engage with the community through health seminars
                and outreach programs, improving awreness about health issues
                and providing neccessary support for patients and families.
              </p>
              <div className={styles.dia_image}>
              <Image
                src={surgery}
                alt="dia"
                width={300}
                height={300}
                className={styles.dia_container}
                 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
