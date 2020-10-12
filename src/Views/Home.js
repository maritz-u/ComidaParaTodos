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
import ReactFullpage from '@fullpage/react-fullpage'; 
import HomeSumate from "../Views/SumateHuertos";


const Home = () => (
  <ReactFullpage
    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000} /* Options here */
    responsiveSlides={true}
    controlArrows={false}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className={[styles.containerFirstView, "section"].join(' ')} >
            <Header />
            <div className={styles.boxtextprincipal}>
              <h3> - La mejor receta para un mejor país - </h3>
              <h1>SOMOS COMIDA PARA TODOS</h1>
              <h1>Y TE INVITAMOS A COMBATIR</h1>
              <h1>EL HAMBRE EN CHILE</h1>
              <div className={styles.btncomofunciona}>
              <BotonFlotante />
              </div>
            </div>
            <div className={styles.Flechaprimerapantalla}>
              <Flecha />
            </div>
          </div>
          <div className={"section"}>
            <Proposito />
          </div>
          <div className={"section"}>
            <Aportar />
          </div>
          <Carrusel />
          <div className={"section"}>
            <Campañas />
          </div>
          <div className={"section"}>
            <Proyectos />
          </div>
          <div className={"section"}>
            <Footer />
          </div>
          <div className={"section"}>
            <HomeSumate/>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Home;

