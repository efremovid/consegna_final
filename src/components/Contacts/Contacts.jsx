import React from "react";
import styles from "./Contacts.module.scss";
import { FaArrowLeft } from "react-icons/fa";
import { IoNavigate } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io5";
import { RiTelegram2Line } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Contacts = () => {

      const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className={styles.container}>
      <button onClick={handleGoBack} className={styles.back}>
        <FaArrowLeft />
        {"Вернуться на главную"}
      </button>
      <h2 className={styles.title}>Контактная информация</h2>
      <div className={styles.card}>
        <h3 className={styles.cardTitle}>Наши офисы</h3>
        <div className={styles.cardItem}>
          <IoNavigate className={styles.icon} />
          <p>Казахстан, г. Астана, ул Достык 5/2, офис 4</p>
        </div>
        <div className={styles.cardItem}>
          <IoNavigate className={styles.icon} />
          <p>Россия, г. Можайск, ул Переяслав-Хмельницкого, д. 36, офис 7</p>
        </div>
      </div>
      <div className={styles.card}>
        <h3 className={styles.cardTitle}>Связаться с нами</h3>
        <div className={styles.cardItem}>
          <FaPhone className={styles.icon} />
          <div>
            <p>89123456978</p>
            <p className={styles.gray}>Основной номер</p>
          </div>
        </div>
        <div className={styles.cardItem}>
          <FaPhone className={styles.icon} />
          <div>
            <p>89123456978</p>
            <p className={styles.gray}>Вспомогательный номер</p>
          </div>
        </div>
        <div className={styles.cardItem}>
          <MdEmail className={styles.icon} />
          <div>
            <p>consegna-aka@rus.ru</p>
            <p className={styles.gray}>Основная почта</p>
          </div>
        </div>
        <div className={styles.cardItem}>
          <MdEmail className={styles.icon} />
          <div>
            <p>consegna-aka@rus.ru</p>
            <p className={styles.gray}>Вспомогательная почта</p>
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <h3 className={styles.cardTitle}>Месседжеры и социальные сети</h3>
        <p>
          Для быстрой связи вы можете использовать наши месседжеры и социальные
          сети:
        </p>
        <div className={styles.icons}>
          <div className={styles.iconContainer}>
            <IoLogoInstagram className={styles.icon} />
            <p>Instagram</p>
          </div>
          <div className={styles.iconContainer}>
            <RiTelegram2Line className={styles.icon} />
            <p>Telegram</p>
          </div>
          <div className={styles.iconContainer}>
            <FaWhatsapp className={styles.icon} />
            <p>WhatsApp</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;

<MdEmail />;
