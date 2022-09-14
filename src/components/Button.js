import React from "react";
import styles from "./Button.module.css";

const Button = ({ type, value, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${styles["button"]} ${styles[`${type}`]}`}
    >
      {value}
    </button>
  );
};

export default Button;
