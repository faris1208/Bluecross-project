import React from "react";
import styles from "../ourwork/styles.module.scss";
import gyn from "../../../../public/assets/images/gynecologist.jpg";
import ort from "../../../../public/assets/images/orthopedic.jpg";
import child from "../../../../public/assets/images/child.jpeg";
import surgery from "../../../../public/assets/images/surgery.jpg";
import Image from "next/image";

export default function OurWork() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_wrapper}>
        <div className={styles.container}>
          <div className={styles.review_box}>
            <p>
              <span>Our Work</span>
            </p>
            <h2>Explore Our State-of-the-Art Facilities and Services</h2>
            <p>
              Discover the advanced technology and welcoming environment at
              Bluecross Specialist Hospital through our vibrant gallery
              showcasing patient care and facilities.
            </p>
          </div>
          <div className={styles.image_grid}>
            <div className={styles.top_left}>
              <Image src={gyn} alt="Gyn" fill className={styles.image} />
            </div>
            <div className={styles.top_right}>
              <Image src={ort} alt="Ortho" fill className={styles.image} />
            </div>
            <div className={styles.bottom_left}>
              <Image
                src={surgery}
                alt="Surgery"
                fill
                className={styles.image}
              />
            </div>
            <div className={styles.bottom_right}>
              <Image src={child} alt="Child" fill className={styles.image} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
