import React from "react";
import styles from "../Home/HomeProyectos.module.css";
import icon1 from "../../img/HomeF_banco.png";
import icon2 from "../../img/HomeF_escuela.png";
import FlechaColor from "../../Components/FlechaColor";
import HeaderSolid from "../../Components/HeaderSolid";
import CompartirBlanco from "../../Components/CompartirBlanco";


const Proyectos = () => {
  return (
    <div className={styles.ContainerProyectos}>
      <HeaderSolid />
      <div className={styles.CajatextoUno}>
        <h3>- Proyectos 2030 -</h3>
        <div className={styles.TextoImagen}>
          <div className={styles.TextH1}>
            <h1>BANCO DE </h1>
            <h1>ALIMENTOS</h1>
          </div>
          <div className={styles.IconImg}>
            <img src={icon1} className={styles.imgIcon} />
          </div>
        </div>
        <div className={styles.TextoLargo}>
          <p> Desarrollaremos el Banco de Alimentos Comida para </p>
          <p>Todos, basado en los principios de la logística inversa,</p>
          <p> enfocado en los hogares como donantes y prestando </p>
          <p> servicios de RSE a las empresas distribuidoras B2C / </p>
          <p>B2B de alimentos.</p>
        </div>

        <div className={styles.cajaBtn}>
          <button className={styles.btnProyectos}>Ver Proyecto </button>
          <div className={styles.FlechaCarrusel}>
            <FlechaColor />
          </div>
        </div>
      </div>

      <div className={styles.CajatextoDos}>
        <h3>- Proyectos 2030 -</h3>
        <div className={styles.TextoImagen}>
          <div className={styles.TextH2}>
            <h1>ESCUELA </h1>
            <h1>PARA TODOS</h1>
          </div>
          <div className={styles.IconImg}>
            <img src={icon2} className={styles.imgIcon} />
          </div>
        </div>
        <div className={styles.TextoLargo}>
          <p> Las Escuelas Comida para Todos, contarán con huertos </p>
          <p>comunitarios. Diseñados para poder educar en alimentación </p>
          <p>saludable, abastecer a la comunidad, generar encuentro e </p>
          <p>inclusión y reforzar soberanía y seguridad alimentaria como</p>
          <p> respuesta a la crisis socioambiental existente.</p>
        </div>

        <div className={styles.cajaBtn}>
          <button className={styles.btnProyectos}>Ver Proyecto </button>
        </div>
      <CompartirBlanco />
      </div>
    </div>
  );
};
export default Proyectos;
