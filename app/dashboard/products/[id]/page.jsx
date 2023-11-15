import React from "react";
import styles from "../../../ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleUser = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="noavatar" fill />
        </div>
        Iphone 15 pro gorib max
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <label>Product Title</label>
          <input type="text" name="Title" placeholder="Title" />
          <label>Price</label>
          <input type="number" name="price" placeholder="price" />
          <label>stock</label>
          <input type="number" name="number" placeholder="12" />
          <label>size</label>
          <input type="number" name="size" placeholder="size" />
          <label>description</label>
          <textarea name="description" placeholder="description" />
          <label>category</label>
          <select name="category" id="category">
            <option value="generel">Choose a option</option>
            <option value="kitchen">kitchen</option>
            <option value="phone">phone</option>
            <option value="computer">computer</option>
          </select>
          <button>update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUser;
