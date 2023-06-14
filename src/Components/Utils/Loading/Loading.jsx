import React from "react";
import styles from "./styles.module.css";

function Loading() {
  return (
    <div className={styles.container}>
      <div className={`${styles.first} ${styles.dash}`}></div>
      <div className={`${styles.second} ${styles.dash}`}></div>
      <div className={`${styles.third} ${styles.dash}`}></div>
      <div className={`${styles.fourth} ${styles.dash}`}></div>
    </div>
  );
}

export default Loading;
