"use client";

import React, { useEffect, useState } from "react";
import styles from "../counter/styles.module.scss";

interface StatItem {
  value: number | string;
  label: string;
  suffix?: string;
}

const StatsCounter = () => {
  const [counters, setCounters] = useState<StatItem[]>([
    { value: 0, label: "Happy Clients", suffix: "K" },
    { value: 0, label: "Years of Experience", suffix: "+" },
    { value: 0, label: "Patient Satisfaction Rate", suffix: "%" },
    { value: 0, label: "Online Review", suffix: "-Star" },
  ]);

  const targetValues = [5, 15, 98, 5]; 

  useEffect(() => {
    const duration = 2000; 
    const interval = 16; 
    const steps = duration / interval;

    const animations = targetValues.map((target, index) => {
      const stepValue = target / steps;
      let currentStep = 0;
      let currentValue = 0;

      const timer = setInterval(() => {
        currentStep++;
        currentValue += stepValue;

        if (currentStep >= steps) {
          currentValue = target;
          clearInterval(timer);
        }

        setCounters((prev) => {
          const newCounters = [...prev];
          newCounters[index].value = Math.floor(currentValue);
          return newCounters;
        });
      }, interval);

      return timer;
    });

    return () => animations.forEach((timer) => clearInterval(timer));
  }, [targetValues]);

  return (
    <div className={styles.wrapper}>
        <div className={styles.container}>
      <div className={styles.statsContainer}>
        {counters.map((stat, index) => (
          <div key={index} className={styles.statItem}>
            <div className={styles.statValue}>
              <p>
                {stat.value}
                {stat.suffix}
              </p>
            </div>
            <div className={styles.statLabel}>
              <p>{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default StatsCounter;
