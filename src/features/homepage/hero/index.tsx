import React from "react";
import styles from "../hero/styles.module.scss";
import { LocationIcon } from "@/app/components/icon.tsx";

export default function HeroHomepage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.hero_wrapper}>
        <div className={styles.container}></div>
        <div className={styles.background}>
          <div className={styles.overlay}></div>
        </div>
      </div>
      <div className={styles.hero_box}>
        <div className={styles.hero_text}>
          <p>
            <span>QUALITY CARE</span>
          </p>
          <h1>Exceptional Healthcare Tailored Just for You</h1>
          <p>
            At Bluecross Specialist Hospital, we are dedicated to providing
            advanced medical care with compassion and personalized treatment for
            all our patients.
          </p>
          <div className={styles.hero_btn}>
            <button className={styles.btn_one}>Get Started</button>
            <button className={styles.btn_two}>+2349096529942</button>
          </div>
        </div>
      </div>
      <div className={styles.location_container}>
        <div className={styles.location_box}>
          <div className={styles.location_location}>
            <LocationIcon className={styles.locate_img} />
            <div className={styles.location_text}>
              <h3>Location</h3>
              <p>48 Ijaiye Rd, Ogba, Ikeja 101232, Lagos</p>
            </div>
          </div>
          <div className={styles.location_location}>
            <LocationIcon className={styles.locate_img} />
            <div className={styles.location_text}>
              <h3>Phone Number</h3>
              <p>+2349096529942</p>
            </div>
          </div>
          <div className={styles.location_location}>
            <LocationIcon className={styles.locate_img} />
            <div className={styles.location_text}>
              <h3>Working Hour</h3>
              <p>Mon to Sat: 8 AM to 6 PM</p>
              <p>Sunday: 8 AM to 6</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.location_container_two}>
        <div className={styles.location_box}>
          <div className={styles.location_location}>
            <LocationIcon className={styles.locate_img} />
            <div className={styles.location_text}>
              <h3>Location</h3>
              <p>48 Ijaiye Rd, Ogba, Ikeja 101232, Lagos</p>
            </div>
          </div>
          <div className={styles.location_location}>
            <LocationIcon className={styles.locate_img} />
            <div className={styles.location_text}>
              <h3>Phone Number</h3>
              <p>+2349096529942</p>
            </div>
          </div>
          <div className={styles.location_location}>
            <LocationIcon className={styles.locate_img} />
            <div className={styles.location_text}>
              <h3>Working Hour</h3>
              <p>Mon to Sat: 8 AM to 6 PM</p>
              <p>Sunday: 8 AM to 6</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
