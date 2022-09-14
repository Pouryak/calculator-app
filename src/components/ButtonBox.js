import React from "react";
import styles from "./ButtonBox.module.css";

const ButtonBox = ({ children }) => {
  return <div className={styles.box}>{children}</div>;
};

export default ButtonBox;
