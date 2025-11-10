import React from "react";
import styles from "./Services.module.scss";
import { FaMoneyCheck } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { PiTruckTrailerFill } from "react-icons/pi";
import { FaWarehouse } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { FaTruckMonster } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Наши услуги</h2>
      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.card_item}>
            <FaMoneyCheck className={styles.image} />
            <h3 className={styles.subtitle}>Аренда контейнеров</h3>
          </div>
          <p className={styles.text}>
            Предлагаем в аренду контейнеры CW, IICL, NEW всех типов: 20DC /
            40HC, а также специализированное оборудование на максимально
            выгодных и гибких условиях.
          </p>
          <a className={styles.cardBtn}>Перейти к КП OneWay</a>
        </div>
        <div className={styles.card}>
          <div className={styles.card_item}>
            <FaShoppingCart className={styles.image} />
            <h3 className={styles.subtitle}>Продажа контейнеров</h3>
          </div>
          <p className={styles.text}>
            Осуществляем продажу б/у и новых контейнеров по выгодным ценам и
            различных условий оплаты по всей России и за ее пределами.
          </p>
          <Link className={styles.cardBtn} to="/sale">
            Посмотреть предложения
          </Link>
        </div>
        <div className={styles.card}>
          <div className={styles.card_item}>
            <FaWarehouse className={styles.image} />
            <h3 className={styles.subtitle}>Ответственное хранение</h3>
          </div>
          <p className={styles.text}>
            Мы предоставляем надежные услуги ответственного хранения контейнеров
            на специализированных терминалах по всему миру.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.card_item}>
            <PiTruckTrailerFill className={styles.image} />
            <h3 className={styles.subtitle}>Автоперевозки</h3>
          </div>
          <p className={styles.text}>
            Быстрые и надёжные доставки грузов по РФ и СНГ. В нашем распоряжении
            — фуры, контейнеровозы и спецтехника.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.card_item}>
            <FaTruckMonster className={styles.image} />
            <h3 className={styles.subtitle}>
              Внутрироссийские контейнерные перевозки
            </h3>
          </div>
          <p className={styles.text}>
            Организуем надёжные контейнерные перевозки по всей России — от
            крупных промышленных центров до удалённых регионов. Гарантируем
            точные сроки, прозрачную логистику и полный контроль на каждом этапе
            доставки.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.card_item}>
            <BiWorld className={styles.image} />
            <h3 className={styles.subtitle}>
              Международные контейнерные перевозки
            </h3>
          </div>
          <p className={styles.text}>
            Осуществляем международные контейнерные перевозки по ключевым
            маршрутам ЮВА, Индии и Турции. Берём на себя всю логистику,
            документы и таможенное оформление, обеспечивая безопасную и
            своевременную доставку груза.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
