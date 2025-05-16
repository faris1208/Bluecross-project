import React from 'react'
import styles from "../image/styles.module.scss"
import vacine from "../../../../public/assets/images/diagnostics.jpg"
import check from "../../../../public/assets/images/checkup.jpg"
import Image from 'next/image'

export default function CheckUpImage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Image 
        src={check}
        alt='check'
        width={500}
        height={500}
        className={styles.check_image}
        />
        <div className={styles.vaccine}>
          <Image 
          src={vacine}
          alt='vacine'
          width={200}
          height={100}
          className={styles.vacine_image}
          />
        </div>
      </div>
    </div>
  )
}
