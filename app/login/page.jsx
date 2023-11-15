import React from "react";
import styles from "../ui/login/Login.module.css";

const login = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <label> Login</label>
        <input type="email" placeholder="email" required />
        <input
          type="password"
          name="password"
          placeholder="password"
          required
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default login;
