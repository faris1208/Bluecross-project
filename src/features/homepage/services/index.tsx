import React from "react";
import styles from "../services/styles.module.scss";
import { sales } from "@/app/components/data";
import Image from "next/image";
import WhyChooseUs from "../whychooseus";
import Link from "next/link";

export default function HomepageServices() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_wrapper}>
        <div className={styles.container}>
          <div className={styles.services}>
            <p>
              <span>CORE SERVICES</span>
            </p>
            <h2>Explore Our Key Medical Specialties</h2>
            <p>
              At Bluecross Specialist Hospital, we offer a variety of medical
              services led by experts in their fields to ensure exceptional
              patient care and optional health outcomes.
            </p>
          </div>
          <div className={styles.second}>
            {sales.map((sale, index) => (
              <div className={styles.second_service} key={index}>
                <div className={styles.service_box}>
                  <Image
                    src={sale.image}
                    alt="img"
                    width={25}
                    height={25}
                    className={styles.camera}
                  />
                </div>
                <div className={styles.service_text}>
                  <h2>{sale.name}</h2>
                  <p className={styles.description}>{sale.description}</p>
                  <div className={styles.btn}>
                    <Link href={"/services"}>
                    <button>{sale.amount}</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <WhyChooseUs />
    </div>
  );
}
