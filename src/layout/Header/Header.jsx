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
          Мы — транспортно-логистическая компания, которая предлагает своим
          клиентам отличный сервис и надежные решения. Наш многолетний опыт
          работы в сфере контейнерных перевозок позволяет нам глубоко понимать
          стоящие перед вами задачи и эффективно справляться с ними. Мы
          осознаем, что успех вашего бизнеса напрямую зависит от надежности и
          эффективности логистических процессов, и поэтому стремимся стать вашим
          надежным партнером на этом пути.
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
