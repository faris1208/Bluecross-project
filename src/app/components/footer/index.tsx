import React from "react";
import styles from "../footer/styles.module.scss";
import woman from "../../../../public/assets/images/diagnostics.jpg";
import Image from "next/image";
import Link from "next/link";

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
                <Link href={"/contact"}>
              <button>Get Started</button>
              </Link>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.last_footer}>
        <div className={styles.footer}>
            <ul>
                <li>
                  <Link className={styles.footer_link} href={"/"}>Home</Link>
                </li>
                <li>
                <Link className={styles.footer_link} href={"/about-us"}>About Us</Link>
                </li>
                <li>
                <Link className={styles.footer_link} href={"/services"}>Services</Link>
                </li>
                <li>
                <Link className={styles.footer_link} href={"/contact"}>Contact</Link>
                </li>
            </ul>
            <p>Copyright 2025</p>
        </div>
      </div>
    </div>
  );
}
