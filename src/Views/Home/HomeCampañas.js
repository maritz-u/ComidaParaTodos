import React from "react";
import styles from "../Home/HomeCampañas.module.css";
import FotoCaballero from "../../img/hombre-02.png";
import BotonComoAportar from "../../Components/BotonComoAportar";
import FlechaColor from "../../Components/FlechaColor";
import HeaderSolid from "../../Components/HeaderSolid";
import Compartir from '../../Components/Compartir';


const Campañas = () => {
  return (
    <div className={styles.CajaquintaPantalla}>
      <HeaderSolid />
      <div className={styles.Cajatextos}>
        <h3>- Campañas en curso -</h3>
        <h1>CAMPAÑA SOLIDARIA</h1>
        <h1>DE EMERGENCIA</h1>
        <div className={styles.TextoLargo}>
          <p>Continuamos con el desarrollo de la campaña solidaria de</p>
          <p>emergencia que convoque a la ciudadanía y empresariado,</p>
          <p>que fomente la asistencia en la emergencia a las comunidades</p>
          <p>más necesitadas y la re activación económica.</p>
          <br></br>
        </div>
        <div className={styles.CifrasCampaña}>
          <div className={styles.CifrasCampaña1}>
            <h1>160.000</h1>
            <h3>Almuerzos recaudados</h3>

            <h1>81.675</h1>
            <h3>Almuerzos entregados</h3>
          </div>
          <div className={styles.CifrasCampaña2}>
            <h1>15</h1>
            <h3>Comedores sociales en 12 comunas</h3>

            <h1>7</h1>
            <h3>Hogares de adulto mayor en todo Chile</h3>
          </div>
        </div>

        <div className={styles.cajaBotonFlecha2}>
          <BotonComoAportar />
          <div className={styles.BoxFlecha2}>
            <FlechaColor />
          </div>
        </div>
      </div>
      <div className={styles.CajaImgCaballero}>
        <img className={styles.ImgCaballero} src={FotoCaballero} alt=""></img>
        <div className={styles.BotonCompartir}>
        <Compartir />
            </div>
      </div>

    </div>
  );
};
export default Campañas;
