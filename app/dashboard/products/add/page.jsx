import React from "react";
import styles from "../../../ui/dashboard/products/addProducts/addproducts.module.css";

const AddProducts = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" name="title" placeholder="title" required />
        <select name="category" id="category">
          <option value="generel">Choose a option</option>
          <option value="kitchen">kitchen</option>
          <option value="phone">phone</option>
          <option value="computer">computer</option>
        </select>
        <input type="number" name="price" placeholder="price" required />
        <input type="number" name="stock" placeholder="stock" />
        <input type="text" name="color" placeholder="color" />
        <input type="text" name="size" placeholder="size" />
        <textarea
          name="desc"
          id="desc"
          rows="16"
          placeholder="Description"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProducts;
