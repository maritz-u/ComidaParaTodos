import React from "react";
import BotonFlotante from "../../Components/BotonFlotante";
import styles from "../Home/Home.module.css";
import Flecha from "../../Components/Flecha";
import Proposito from "../Home/HomeProposito";
import Aportar from "../Home/HomeAportar";
import Carrusel from "../Home/HomeCarrusel";
import Campañas from "../Home/HomeCampañas";
import Proyectos from "../Home/HomeProyectos";
import Footer from "../Home/HomeFooter";
import Header from "../../Components/Header";
import ReactFullpage from '@fullpage/react-fullpage';
import { Link } from "react-router-dom";
import Compartir from "../../Components/Compartir";


const Home = () => (
  <ReactFullpage
    //fullpage options
    licenseKey={'YOUR_KEY_HERE'}
    scrollingSpeed={1000} /* Options here */
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
              {/* <ul>
                <li>
                  <Link to='/sumate' className={styles.opciones}>Red Solidaria </Link>
                </li>
                <li>
                  <Link to='/sumate'> bla</Link>
                </li>
              </ul> */}
              <div className={styles.btncomofunciona}>
                <BotonFlotante />
              </div>
            </div>
            <div className={styles.Flechaprimerapantalla}>
              <Flecha />
            </div>
            <div>
            <Compartir />
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
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Home;

