import React from "react";
import styles from "./NotFound.module.scss";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <div className={styles.root}>
        <span className={styles.icon}>🙄</span>
        <h1 className={styles.title}>Страница не найдена!</h1>
      </div>
      <div>
        <Link to="/react-pizza">
          <button className={styles.back}>Назад</button>
        </Link>
      </div>
    </>
  );
}

export default NotFound;
