import React from "react";
import styles from "../conatct-form/styles.module.scss";

export default function ContactForm() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.form_wrapper}>
        <div className={styles.form_box}>
          <div className={styles.form_text}>
            <div className={styles.review_box}>
              <p>
                <span>REACHT OUT</span>
              </p>
              <h2>Connect with Our Team</h2>
              <p>
              Fill out the form below, and our dedicated staff will get back to you promptly to assist with your inquiries.
              </p>
            </div>
          </div>
          <form action="" className={styles.form_form}>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea name="message" id="" placeholder="message"></textarea>
            <div className={styles.btn}>
              <button>Send Now</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
