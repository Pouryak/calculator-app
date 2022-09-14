import React from "react";
import styles from "./Screen.module.css";

const Screen = ({ value }) => {
  return (
    <div className={styles.screen}>
      <h2 className={styles.result}>{value}</h2>
    </div>
  );
};

export default Screen;
