import React from "react";
import Form from "../../components/Form/Form";
import styles from "./Main.module.scss";
import Services from "../../components/Services/Services";
import Advantages from "../../components/Advantages/Advantages";

const Main = () => {
  return (
    <div className={styles.container}>
      <Services />
      <Advantages />
      <Form />
    </div>
  );
};

export default Main;
