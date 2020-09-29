import React from "react";
import BotonFlotante from "../Components/BotonCompartirDonar";
import styles from "../Views/Home.module.css";
import Header from '../Components/Header';
import Flecha from "../Components/Flecha";

const Home = () => {
  return (
    
    <div className={styles.containerFirstView}>
      <Header/>
      <div className={styles.boxtextprincipal}>
        <h3> La mejor receta para un mejor país </h3>
      </div>
      <div className={styles.boxtextprincipal}>
        <h1>SOMOS COMIDA PARA TODOS Y TE INVITAMOS A COMBATIR EL HAMBRE EN CHILE</h1>
      </div>
      <BotonFlotante />
      <Flecha />
    </div>
    
  );
};

export default Home;
