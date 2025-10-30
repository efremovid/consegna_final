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
        <h3 className={styles.cardTitle}>Наш офис</h3>
        <div className={styles.cardItem}>
          <IoNavigate className={styles.icon} />
          <a
            target="_blank"
            href="https://yandex.ru/maps/163/astana/house/dostyq_koshesi_5_2/Y0gYcgViT0UCQFtrfX1zeXpkZA==/?ll=71.422605%2C51.128671&utm_campaign=desktop&utm_medium=search&utm_source=maps&z=17"
          >
            <p>Казахстан, г. Астана, ул Достык 5/2, офис 4</p>
          </a>
        </div>
      </div>
      <div className={styles.card}>
        <h3 className={styles.cardTitle}>Связаться с нами</h3>
        <div className={styles.cardItem}>
          <FaPhone className={styles.icon} />
          <div>
            <a className={styles.link} href="tel:+77080080156">
              +7 (708) 008-01-56
            </a>
            <p className={styles.gray}>Основной номер</p>
          </div>
        </div>
        <div className={styles.cardItem}>
          <MdEmail className={styles.icon} />
          <div>
            <a className={styles.link} href="mailto:equipment@tc-consegna.ru">
              equipment@tc-consegna.ru
            </a>
            <p className={styles.gray}>Основная почта</p>
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
          <a
            target="_blank"
            href="https://t.me/thereisnourflevel"
            className={styles.iconContainer}
          >
            <RiTelegram2Line className={styles.icon} />
            <p>Telegram</p>
          </a>

          <a
            className={styles.iconContainer}
            target="_blank"
            href="https://wa.me/+77080080156"
          >
            <FaWhatsapp className={styles.icon} />
            <p>WhatsApp</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
