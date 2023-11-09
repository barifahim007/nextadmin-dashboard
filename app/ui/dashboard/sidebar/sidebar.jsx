import React from "react";
import styles from "../sidebar/sidebar.module.css";
import menuItems from "./menuItem";
import MenuLink from "./menuLink/menuLlink";
import Image from "next/image";
import noavatart from "./../../../../public/noavatar.png";

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.userContainer}>
        <Image
          className={styles.userProfile}
          src={noavatart}
          width={50}
          height={50}
          alt="noavatar"
        />
        <div className={styles.userDetails}>
          <span className={styles.userTitle}>Ehsanul Bari Fahim</span>
          <span className={styles.userRole}>Adminstrator</span>
        </div>
      </div>

      <ul className={styles.list}>
        {menuItems.map((category) => (
          <li key={category.title}>
            <span className={styles.category}>{category.title}</span>
            {category.items.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
