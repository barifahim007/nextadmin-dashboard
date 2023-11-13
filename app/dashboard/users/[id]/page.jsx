import React from "react";
import styles from "../../../ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleUser = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="noavatar" fill />
        </div>
        Jone Doe
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <label>User Name</label>
          <input type="text" name="userName" placeholder="name" />
          <label>Eamil</label>
          <input type="email" name="email" placeholder="email" />
          <label>Password</label>
          <input type="password" name="password" placeholder="password" />
          <label>Phone</label>
          <input type="number" name="phone" placeholder="phone" />
          <label>Address</label>
          <textarea name="Adress" placeholder="Address" />
          <label>is Admin?</label>
          <select name="isAdmin">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <label>is Active?</label>
          <select name="isActive">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <button>update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUser;
