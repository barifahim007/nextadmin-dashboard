import React from "react";
import styles from "../../../../app/ui/dashboard/users/addUser/addUser.module.css";
const AddProducts = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" name="username" placeholder="username" required />
        <input type="email" name="email" placeholder="email" required />
        <input
          type="password"
          name="password"
          placeholder="password"
          required
        />
        <input type="phone" name="Phone" placeholder="Phone" />
        <select name="isAdmin" id="isAdmin">
          <option value={false} selected>
            Is Admin?
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select name="isActive" id="isActive">
          <option value={true} selected>
            Is Active?
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>

        <textarea
          name="address"
          id="address"
          rows="16"
          placeholder="address"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProducts;
