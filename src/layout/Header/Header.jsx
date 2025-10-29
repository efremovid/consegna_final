import React from "react";
import { FaTruck } from "react-icons/fa";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <FaTruck className={styles.logo} />
        <h1 className={styles.title}>Consegna</h1>
      </div>
      <div className={styles.buttons}>
        <button className={styles.btn}>RU</button>
        <button className={styles.btn}>ENG</button>
      </div>
    </div>
  );
};

export default Header;
