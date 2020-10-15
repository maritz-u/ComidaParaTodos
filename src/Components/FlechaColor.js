import React from "react";
import FlechaC from "../img/flechaIconC.png";
import styles from "../Components/Flecha.module.css";
const FlechaColor = () => {
  return (
    <div>
      <img className={styles.Flecha} src={FlechaC} alt=""></img>
    </div>
  );
};

export default FlechaColor;