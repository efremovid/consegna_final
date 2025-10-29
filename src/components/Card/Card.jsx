import React from "react";
import Slider from "../Slider/Slider";
import styles from "./Card.module.scss";

const Card = ({ containerInfo }) => {
  const images = containerInfo?.images
    ? containerInfo.images.split(",").map((url) => url.trim()).filter(Boolean)
    : [];

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <p>Наименование: {containerInfo.name}</p>
        <p>Стоимость: {containerInfo.price}</p>
      </div>

      {images.length > 0 ? (
        <Slider images={images} />
      ) : (
        <p className={styles.noImages}>Изображения отсутствуют</p>
      )}
    </div>
  );
};

export default Card;
