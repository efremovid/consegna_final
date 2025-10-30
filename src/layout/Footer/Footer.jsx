import React from "react";
import styles from "./Footer.module.scss";
import { FaPhone, FaRegCopyright, FaTruck } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <FaTruck className={styles.logo} />
          <h1 className={styles.title}>Consegna</h1>
        </div>
        <div className={styles.contacts}>
          <div className={styles.contact}>
            <FaPhone className={styles.icon} />
            <a className={styles.link} href="tel:+79876543210">
              +7 (987) 654-32-10
            </a>
          </div>
          <div className={styles.contact}>
            <IoMdMail className={styles.icon} />
            <a className={styles.link} href="mailto:vash_email@yandex.ru">
              vash_email@yandex.ru
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

// {
/* <div className={styles.item}>
  <div className={styles.contact}>
    <FaPhone className={styles.icon} />
    <a className={styles.link} href="tel:+79876543210">
      +7 (987) 654-32-10
    </a>
  </div>
  <div className={styles.contact}>
    <IoMdMail className={styles.icon} />
    <a className={styles.link} href="mailto:vash_email@yandex.ru">
      vash_email@yandex.ru
    </a>
  </div>
  <div className={styles.contact}>
    <IoNavigate className={styles.icon} />
    <a className={styles.link} href="mailto:vash_email@yandex.ru">
     Казахстан, г. Астана, ул Достык 5/2, офис 4
    </a>
  </div>
  <div className={styles.contact}>
    <IoNavigate className={styles.icon} />
    <a className={styles.link} href="mailto:vash_email@yandex.ru">
     Россия, г. Можайск, ул Переяслав-Хмельницкого, д. 36, офис 7
    </a>
  </div>
  <div className={styles.icons}>
    <a href="">
      <FaTelegram className={styles.icon} />
    </a>
    <a href="">
      <IoLogoWhatsapp className={styles.icon} />
    </a>
    <a href="">
      <FaInstagram className={styles.icon} />
    </a>
  </div>
</div>
<div className={styles.line}></div>
<div className={styles.copyright}>
  <FaRegCopyright />
  <p>Consegna. Все права защищены</p>
</div> */
// }

// <div className={styles.main}>
//   <div className={styles.address}>
//     <a className={styles.link} href="">
//       Казахстан, г. Астана, ул Достык 5/2, офис 4
//     </a>
//     <a className={styles.link} href="">
//       Россия, г. Можайск, ул Переяслав-Хмельницкого, д. 36, офис 7
//     </a>
//   </div>
//   <div className={styles.title_container}>
//     <h2 className={styles.title}>CONSEGNA</h2>
//     <div className={styles.icons}>
//       <a href="">
//         <FaTelegram className={styles.icon} />
//       </a>
//       <a href="">
//         <IoLogoWhatsapp className={styles.icon} />
//       </a>
//       <a href="">
//         <FaInstagram className={styles.icon} />
//       </a>
//     </div>
//   </div>
//   <div className={styles.contacts}>
//     <div className={styles.contact}>
//       <FaPhone className={styles.icon} />
//       <a className={styles.link} href="tel:+79876543210">
//         +7 (987) 654-32-10
//       </a>
//     </div>
//     <div className={styles.contact}>
//       <IoMdMail className={styles.icon} />
//       <a className={styles.link} href="mailto:vash_email@yandex.ru">
//         vash_email@yandex.ru
//       </a>
//     </div>
//   </div>
// </div>

// <div className={styles.line}></div>
// <div className={styles.copyright}>
//   <FaRegCopyright />
//   <p>Consegna. Все права защищены</p>
// </div>
