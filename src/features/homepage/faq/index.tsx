"use client"
import React, { useState } from "react";
import styles from "../faq/styles.module.scss";
import { faq } from "@/app/components/data";

export default function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_wrapper}>
        <div className={styles.container}>
          <div className={styles.review_box}>
            <p>
              <span>FAQS</span>
            </p>
            <h2>Answers to Your Most Common Healthcare Questions</h2>
            <p>
            Find helpful information regarding our services, treatments, insurance, and anything else you need to know about Bluecross Specialist Hospital.
            </p>
          </div>
          <div className={styles.accordion}>
          {faq.map((faq, index) => (
            <div key={index} className={styles.accordion_item}>
              <button
                className={styles.accordion_header}
                onClick={() => toggleAccordion(index)}
              >
                <span>{faq.answer}</span>
                {openIndex === index ? <span>-</span> : <span>+</span>}
              </button>
              {openIndex === index && (
                <p className={styles.accordion_content}>{faq.review}</p>
              )}
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
}
