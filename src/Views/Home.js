import React from "react";
import BotonFlotante from "../Components/BotonFlotante";
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
        <h1>SOMOS COMIDA PARA TODOS</h1> 
        <h1>Y TE INVITAMOS A COMBATIR</h1> 
        <h1>EL HAMBRE EN CHILE</h1>
      </div>
      <BotonFlotante />
      <Flecha />
    </div>
    
  );
};

export default Home;
