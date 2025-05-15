import React from "react";
import styles from "../reviews/styles.module.scss";
import { reviews, reviewsTwo } from "@/app/components/data";
import { StarIcon } from "@/app/components/icon.tsx";

export default function AboutUsReviews() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.review}>
          <div className={styles.review_box}>
            <p>
              <span>REVIEWS</span>
            </p>
            <h2>What Our Patients Are Saying</h2>
            <p>
              Read testimonials from our patients who have received exceptional
              care at Bluecross Specialist Hospital, highlighting their positive
              experiences and outcomes.
            </p>
          </div>
          <div className={styles.second}>
            {reviews.map((review, index) => (
              <div className={styles.second_service} key={index}>
                <StarIcon />
                <p>{review.review}</p>
                <h4>{review.name}</h4>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.review_two}>
          <div className={styles.second}>
            {reviewsTwo.map((review, index) => (
              <div className={styles.second_service} key={index}>
                <StarIcon />
                <p>{review.review}</p>
                <h4>{review.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
