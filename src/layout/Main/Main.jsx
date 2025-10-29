import React from "react";
import Form from "../../components/Form/Form";
import styles from "./Main.module.scss";
import Services from "../../components/Services/Services";
import Advantages from "../../components/Advantages/Advantages";
import About from "../../components/About/About";

const Main = () => {
  return (
    <div className={styles.container}>
      <About />
      <Services />
      <Advantages />
      <Form />
    </div>
  );
};

export default Main;
