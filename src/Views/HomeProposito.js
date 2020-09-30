import React from "react";
import BotonComoAportar from "../Components/BotonComoAportar";
import styles from "../Views/HomeProposito.module.css";
import homeBinfo from "../img/homeBinfo.png";
import homeBIcon from "../img/homeBIcon.png";
import homeBIconB from "../img/homeBIconB.png";
import homeBIconC from "../img/homeBIconC.png";
import FlechaColor from "../Components/FlechaColor";

const Proposito = () => {
  return (
    <div className={styles.cajaSegundaPantalla}>
      <div className={styles.boxPropositoText}>
        <div className={styles.text1}>
          <h3> - Comida para todos - </h3>
          <h1>PROPÓSITO</h1>
        </div>
        <div className={styles.text2}>
          <p>
            Somos una plataforma solidaria que nace de la unión de
            organizaciones sociales, que busca salvaguardar la Seguridad
            Alimentaria. Conectamos, colaboramos y generamos asociatividad entre
            los actores, de manera intersectorial, como fórmula para el
            desarrollo con la comunidad de programas sociales de impacto
            colectivo. a través de:
          </p>
        </div>
        <div className={styles.text3}>
          <p>
          <img src={homeBIcon} alt="" />
            Generar y distribuir alimentación a quienes más lo necesitan a raíz
            de las contingencias.
          </p>
          <p>
          <img src={homeBIconB} alt="" />
            Educar en materias de alimentación saludable, para fomenter la
            mejora de calidad de vida.
          </p>
          <p>
          <img src={homeBIconC} alt="" />
            Capacitar en materias de gastronomía a las comunidades y de esta
            manera generar oportunidades.
          </p>
        </div>
       

        <div>
          <BotonComoAportar />
        </div>
      </div>

      <div className={styles.contenedorImagenXL}>
        <img className={styles.imagenxL} src={homeBinfo} alt="" />
      </div>

      <div>
        <FlechaColor />
      </div>
    </div>
  );
};

export default Proposito;
