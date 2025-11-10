import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styles from "./Rent.module.scss";

const Rent = () => {
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
      <div className={styles.imgcontainer}>
        <img
          className={styles.image}
          src="https://1.downloader.disk.yandex.ru/preview/386fc6843c25befc4921a05d044e33a939194644edcf7d9ecee1bcbadad9405c/inf/Z0ysSf8kyMAb0WBmCwarF7-9V9gStdHgl0gzQQNdhCTQMAC4z3VKAagcOlaxxbVZ5wCwGRgCAUJBqE-uC3riFg%3D%3D?uid=788722152&filename=КП%20недели%2044%20-%2045.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=788722152&tknv=v3&size=1920x960"
          alt=""
        />
      </div>
    </div>
  );
};

export default Rent;
