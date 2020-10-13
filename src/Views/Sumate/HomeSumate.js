import React from "react";
import Header from "../../Components/Header";
import styles from "../Sumate/HomeSumate.module.css";
import FlechaColor from "../../Components/FlechaColor";
import Icon1 from "../../img/homeB2icon1.png";
import Icon2 from "../../img/homeB2icon2.png";
import Icon3 from "../../img/homeB2icon3.png";
import Icon4 from "../../img/homeB2icon4.png";
import Icon5 from "../../img/homeB2icon5.png";
import Icon6 from "../../img/homeB2icon6.png";
import SumateHuertos from "../Sumate/SumateHuertos";
import SumateTrabajemos from "../Sumate/SumateTrabajemos";
import ReactFullpage from '@fullpage/react-fullpage';


const HomeSumate = () => (
  <ReactFullpage
  //fullpage options
  licenseKey={'YOUR_KEY_HERE'}
  scrollingSpeed={1000} /* Options here */
  responsiveSlides={true}
  controlArrows={false}
  render={({ state, fullpageApi }) => {
    return (
      <ReactFullpage.Wrapper>
        <div className={[styles.BoxPadre, "section"].join(' ')} >

        <Header />
        <div className={styles.BoxTitulos}>
          <h3>- Súmate a nuestra red solidaria -</h3>
          <h1>ES HORA DE ACTUAR, ¡JUNTOS!</h1>
        </div>
     <div className={styles.ContainerTextos}>
        <div className={styles.CajaImgTextos}>
            <button className={styles.Boton1}>
            <img src={Icon1} alt=""></img>
            </button>
            <a>
          <h4> Dona $3.000 (1 almuerzo)</h4>
          <p>Aporta un almuerzo cuantas veces quieras</p>
          </a>
          <button className={styles.Boton2}>
          <img src={Icon2} alt=""></img>
          </button>
          <a>
          <h4> Dona alimentos y/o huertos urbanos</h4>
          <p>Comida que no vayas a consumir y espacios verdes</p>
          </a>
          <button className={styles.Boton3}>
          <img src={Icon3} alt=""></img>
          </button>
          <a>
          <h4>Dona tiempo y/o talento </h4>
          <p>tú puedes decidir cómo quieres colaborar</p>
          </a>
        </div>

        <div className={styles.CajaImgTextos2}>
        <button className={styles.Boton4}>
          <img src={Icon4} alt=""></img>
          </button>
          <a>
          <h4>Multiplica la ganancia y apadrina</h4>
          <p>para instituciones y empresas públicas o privadas</p>
          </a>
          <button className={styles.Boton5}>
          <img src={Icon5} alt=""></img>
          </button>
          <a>
          <h4>Trabajemos y crezcamos juntos </h4>
          <p>productores, transportistas y restaurantes</p>
         </a>
          <button className={styles.Boton6}>
          <img src={Icon6} alt=""></img>
          </button>
          <a>
          <h4> Recibe nuestro almuerzo solidario </h4>
          <p> vives en una comunidad vulnerable </p>
          </a>
        </div>
        </div>
         <FlechaColor/>
         </div>
   
         <div className={"section"}>
            <SumateHuertos/>
          </div>
          <div className={"section"}>
           <SumateTrabajemos />
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);


export default HomeSumate;
