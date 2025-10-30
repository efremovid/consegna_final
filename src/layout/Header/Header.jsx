import React from "react";
import { FaTruck } from "react-icons/fa";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <FaTruck className={styles.logo} />
        <h1 className={styles.title}>Consegna</h1>
      </div>
      <div className={styles.buttons}>
        <Link className={styles.btn} to="/contacts">
          Контакты
        </Link>
        <button className={styles.btn}>Услуги</button>
      </div>
    </div>
  );
};

export default Header;
