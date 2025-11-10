import React from "react";
import Form from "../Form/Form";
import styles from "./PageForm.module.scss";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const PageForm = () => {

  return (
    <div className={styles.container}>
      <div className={styles.group}>
        <Link className={styles.back}  to="/sale">
          <FaArrowLeft />
          {"Назад к предложениям"}
        </Link>
        <Form />
      </div>
    </div>
  );
};

export default PageForm;
