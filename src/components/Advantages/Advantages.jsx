import React from "react";
import styles from "./Advantages.module.scss";
import { FaCheck } from "react-icons/fa";

const Advantages = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Наши преимущества</h2>
      <div className={styles.card}>
        <FaCheck className={styles.image} />
        <p className={styles.text}>Надежный сервис</p>
      </div>
      <div className={styles.card}>
        <FaCheck className={styles.image} />
        <p className={styles.text}>Выгодные условия оплаты</p>
      </div>
      <div className={styles.card}>
        <FaCheck className={styles.image} />
        <p className={styles.text}>Быстрое реагирование</p>
      </div>
      <div className={styles.card}>
        <FaCheck className={styles.image} />
        <p className={styles.text}>Гибкий подход</p>
      </div>
    </div>
  );
};

export default Advantages;
