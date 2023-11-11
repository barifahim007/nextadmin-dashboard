import React from "react";
import styles from "./paginations.module.css";
const Paginations = () => {
  return (
    <div className={styles.container}>
      <button className={styles.button} disabled>
        previous
      </button>
      <button className={styles.button}>next</button>
    </div>
  );
};

export default Paginations;
