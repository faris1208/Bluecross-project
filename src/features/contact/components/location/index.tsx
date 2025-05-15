import { LocationIcon } from "@/app/components/icon.tsx";
import React from "react";
import styles from "../location/styles.module.scss";

export default function Location() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contact_wrapper}>
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
      </div>
    </div>
  );
}
