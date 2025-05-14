import React from "react";
import styles from "../footer/styles.module.scss";
import woman from "../../../../public/assets/images/diagnostics.jpg";
import Image from "next/image";

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_wrapper}>
        <div className={styles.container}>
          <div className={styles.footer_image}>
            <Image
              src={woman}
              alt="woman"
              // fill
              width={400}
              height={400}
              className={styles.woman}
            />
          </div>
          <div className={styles.services}>
            <div className={styles.services_footer}>
              <p>
                <span>JOIN US</span>
              </p>
              <h2>Experience The Best in Medical Care Today</h2>
              <p>
                Connect with us learn more about our services and how we can help you achieve your health goals.
              </p>
              <div className={styles.btn}>
              <button>Get Started</button>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.last_footer}>
        <div className={styles.footer}>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
            <p>Copyright 2025</p>
        </div>
      </div>
    </div>
  );
}
