import React from "react";
import styles from "../services/styles.module.scss";
import { sales } from "@/app/components/data";

export default function ServicesServices() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_wrapper}>
        <div className={styles.container}>
          <div className={styles.services}>
            <p>
              <span>CORE SERVICES</span>
            </p>
            <h2>Explore Our Key Medical Specialties</h2>
          </div>
          <div className={styles.second}>
            {sales.map((sale, index) => (
              <div className={styles.second_service} key={index}>
                <div className={styles.service_box}>
                {sale.image}
                </div>
                <div className={styles.service_text}>
                  <h2>{sale.name}</h2>
                  <p className={styles.description}>{sale.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
