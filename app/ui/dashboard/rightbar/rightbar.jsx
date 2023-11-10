import React from "react";
import styles from "./rightbar.module.css";
import Image from "next/image";
import { MdArrowCircleRight, MdPlayCircle } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContent}>
          <Image
            src="/astronaut.png"
            alt="astronaut"
            fill
            className={styles.bgimg}
          />
        </div>
        <div className={styles.text}>
          <h1 className={styles.textTitle}>available now</h1>
          <h2 className={styles.textSecTitle}>
            How to use new version of admin dashboard.
          </h2>
          <span className={styles.textspan}> takes 4 minutes to learn</span>
          <p className={styles.textpara}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore,
            beatae.
          </p>
          <button className={styles.button}>
            <MdPlayCircle />
            watch
          </button>
        </div>
      </div>
      {/* second div */}
      <div className={styles.item}>
        <div className={styles.text}>
          <h1 className={styles.textTitle}>Comming soon</h1>
          <h2 className={styles.textSecTitle}>
            new server actions are available partial pre-rendering is comming up
          </h2>
          <span className={styles.textspan}> boost your productivity</span>
          <p className={styles.textpara}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore,
            beatae.
          </p>
          <button className={styles.button}>
            <MdArrowCircleRight />
            learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
