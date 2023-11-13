import React from "react";
import styles from "../../ui/dashboard/users/users.module.css";
import Search from "../../ui/dashboard/search/Search";
import Link from "next/link";
import Image from "next/image";
import Paginations from "../paginations/paginations";

const UserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="search for a user .." />
        <Link href="/dashboard/users/add">
          <button className={styles.addNewButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created at</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt="noavatar"
                  width={40}
                  height={40}
                  className={styles.image}
                />
                Jone Doe
              </div>
            </td>
            <td>fahim@gmail.com</td>
            <td>12.11.23</td>
            <td>admin</td>
            <td>active</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/users/test">
                  <button className={`${styles.button} ${styles.view}`}>
                    view
                  </button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>
                  delete
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt="noavatar"
                  width={40}
                  height={40}
                  className={styles.image}
                />
                Leo Doe
              </div>
            </td>
            <td>leodoe@gmail.com</td>
            <td>21.01.23</td>
            <td>admin</td>
            <td>active</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/users/test">
                  <button className={`${styles.button} ${styles.view}`}>
                    view
                  </button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>
                  delete
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt="noavatar"
                  width={40}
                  height={40}
                  className={styles.image}
                />
                Robart Doe
              </div>
            </td>
            <td>robartdoe@gmail.com</td>
            <td>13.10.23</td>
            <td>admin</td>
            <td>active</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/users/test">
                  <button className={`${styles.button} ${styles.view}`}>
                    view
                  </button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>
                  delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Paginations />
    </div>
  );
};

export default UserPage;
