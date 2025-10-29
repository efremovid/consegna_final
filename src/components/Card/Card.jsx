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
        <p><span>Наименование:</span>{" "}{containerInfo.name}</p>
        <p><span>Локация:</span>{" "}{containerInfo.location}</p>
        <p><span>Стоимость:</span>{" "}{containerInfo.price}</p>
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
