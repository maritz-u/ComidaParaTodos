import React from "react";
import BotonFlotante from "../Components/BotonFlotante";
import styles from "../Views/Home.module.css";
import Flecha from "../Components/Flecha";
import Proposito from "./HomeProposito";
import Aportar from "./HomeAportar";
import Carrusel from "./HomeCarrusel";
import Campañas from "./HomeCampañas";
import Proyectos from "./HomeProyectos";
import Footer from "./HomeFooter";
import Header from "../Components/Header";

const Home = () => {
  return (
    <div>
      <div className={styles.containerFirstView}>
        <Header />
        <div className={styles.boxtextprincipal}>
          <h3> - La mejor receta para un mejor país - </h3>
          <h1>SOMOS COMIDA PARA TODOS</h1>
          <h1>Y TE INVITAMOS A COMBATIR</h1>
          <h1>EL HAMBRE EN CHILE</h1>
          <BotonFlotante />
      </div>
      <div className={styles.btnFloat}>
        
        </div>
        <div className={styles.flecha}>
          <Flecha />
        </div>
      </div>
      <Proposito />
      <Aportar />
      <Carrusel />
      <Campañas />
      <Proyectos />
      <Footer />
    </div>
  );
};

export default Home;
