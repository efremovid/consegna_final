import React from "react";
import { FaTruck } from "react-icons/fa";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container1}>
        <div className={styles.titleContainer}>
          <FaTruck className={styles.logo} />
          <h1 className={styles.title}>Consegna</h1>
        </div>
        <button className={styles.btn}>ru / eng</button>
      </div>
      <div className={styles.container}>
        <h2 className={styles.title}>Надежная логистика для вашего бизнеса</h2>
        <p className={styles.text}>
          ЛогистикПро — ваш надежный партнер в сфере логистики и грузоперевозок.
          Мы предлагаем комплексные решения для бизнеса любого масштаба,
          обеспечивая своевременную доставку и сохранность грузов.
        </p>
        <div className={styles.btns}>
          <button className={styles.button}>Наши услуги</button>
          <button className={styles.button}>Связаться с нами</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
