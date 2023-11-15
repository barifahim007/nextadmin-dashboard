import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../ui/dashboard/products/products.module.css";
import Search from "../../ui/dashboard/search/Search";
import Paginations from "../paginations/paginations";

const ProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="search for a products .." />
        <Link href="/dashboard/products/add">
          <button className={styles.addNewButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created at</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.products}>
                <Image
                  src="/noproduct.jpg"
                  alt="noavatar"
                  width={40}
                  height={40}
                  className={styles.productimage}
                />
                Iphone
              </div>
            </td>
            <td>IPhone 15 pro maxi</td>
            <td>$1400</td>
            <td>12.3.23</td>
            <td>inStock</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/products/test">
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
              <div className={styles.products}>
                <Image
                  src="/noproduct.jpg"
                  alt="noavatar"
                  width={40}
                  height={40}
                  className={styles.productimage}
                />
                Iphone
              </div>
            </td>
            <td>IPhone 15 pro maxi</td>
            <td>$1400</td>
            <td>12.3.23</td>
            <td>inStock</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/products/test">
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
              <div className={styles.products}>
                <Image
                  src="/noproduct.jpg"
                  alt="noavatar"
                  width={40}
                  height={40}
                  className={styles.productimage}
                />
                Iphone
              </div>
            </td>
            <td>IPhone 15 pro maxi</td>
            <td>$1400</td>
            <td>12.3.23</td>
            <td>inStock</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/products/test">
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

export default ProductPage;
