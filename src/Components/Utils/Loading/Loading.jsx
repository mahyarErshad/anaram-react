import React from "react";
import styles from "./styles.module.css"

function Loading() {
  return (
    <div className={styles.container}>
      <div className={styles.first}></div>
      <div className={styles.second}></div>
      <div className={styles.third}></div>
      <div className={styles.fourth}></div>
    </div>
  );
}

export default Loading;
