import React from "react";
import styles from "./transactions.module.css";
import Image from "next/image";
import noavatar from "../../../../public/noavatar.png";

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}> Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src={noavatar}
                  width={40}
                  height={40}
                  alt="noavatart"
                  className={styles.userImage}
                />
                Jone Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                pending
              </span>
            </td>
            <td>20.11.23</td>
            <td> $30.00</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src={noavatar}
                  width={40}
                  height={40}
                  alt="noavatart"
                  className={styles.userImage}
                />
                Leo Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>done</span>
            </td>
            <td>20.11.13</td>
            <td> $32.00</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src={noavatar}
                  width={40}
                  height={40}
                  alt="noavatart"
                  className={styles.userImage}
                />
                Robart Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>
                cancelled
              </span>
            </td>
            <td>20.11.22</td>
            <td> $40.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
