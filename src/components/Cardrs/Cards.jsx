import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Preloader from "../Preloader/Preloader";
import styles from "./Cards.module.scss";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Cards = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = () => {
      fetch("https://6862c75696f0cc4e34baf165.mockapi.io/containers")
        .then((response) => response.json())
        .then((data) => setCards(data))
        .catch((error) => console.error("Ошибка загрузки:", error))
        .finally(() => setIsLoading(false));
    };
    fetchCards();
  }, []);

  console.log(cards);

  return (
    <div className={styles.main}>
      <Link to="/" className={styles.back}>
        <FaArrowLeft />
        {"Вернуться на главную"}
      </Link>

      <h2 className={styles.title}>Актуальные объявления</h2>
      {isLoading ? (
        <Preloader />
      ) : cards.length === 0 ? (
        <p className={styles.text}>В настоящее время ничего не продаётся</p>
      ) : (
        <div className={styles.container}>
          {cards.map((el) => (
            <Card containerInfo={el} />
          ))}
        </div>
      )}
      <p>Если вас заинтерсеовали наши предложения - <Link className={styles.linkTo} to="/form">перейдите к заполнению формы обратной связи!</Link> </p>
    </div>
  );
};

export default Cards;
