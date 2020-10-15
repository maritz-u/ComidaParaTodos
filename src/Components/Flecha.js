import React from "react";
import FlechaW from "../img/flechaIconW.png";
import styles from "../Components/Flecha.module.css";
const Flecha = () => {
  return (
    <div>
      <img className= {styles.Flecha} src={FlechaW} alt=""></img>
    </div>
  );
};

export default Flecha;
