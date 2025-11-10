import React from "react";
import styles from "./Footer.module.scss";
import { FaPhone, FaRegCopyright, FaTruck } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>

          <h1 className={styles.title}>Consegna</h1>
                  <img className={styles.logo} src="/public/favicon.png" alt="" />
        </div>

        <div className={styles.contacts}>
          <div className={styles.contact}>
            <FaPhone className={styles.icon} />
            <a className={styles.link} href="tel:+77080080156">
              +7 (708) 008-01-56
            </a>
          </div>
          <div className={styles.contact}>
            <IoMdMail className={styles.icon} />
            <a className={styles.link} href="mailto:equipment@tc-consegna.ru">
              equipment@tc-consegna.ru
            </a>
          </div>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.copyright}>
        <FaRegCopyright />
        <p>Consegna. Все права защищены</p>
      </div>
    </div>
  );
};

export default Footer;


