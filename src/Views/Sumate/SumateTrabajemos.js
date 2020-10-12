import React from "react";
import FlechaColor from "../../Components/FlechaColor";
import styles from "../Sumate/SumateTrabajemos.module.css";
import sumateTrabaja from "../../img/sumate-trabaja.png";
import IconOlla from "../../img/homeB2icon1.png";

const SumateTrabajemos = () => {
  return (
    <div className={styles.CajaCompleta}>
      <div className={styles.PrimerContenedor}>
        <h3>- Súmate a nuestra red -</h3>
        <h1>¡Trabajemos y crezcamos juntos!</h1>
      </div>

    
      <button className={styles.BtnTrabajar}>Quiero trabajar</button>
      <div className={styles.CajaTexto}>
        {/* <div className={styles.BoxHolder}>
        <input className={styles.input1} type="text">Nombre </input>
        <input className={styles.input2} type="text">Télefono de contacto </input>
        <input className={styles.input3} type="text">Correo electrónico </input>
        <input className={styles.input4} type="text"> Sector donde quieres trabajar </input>
        <input className={styles.input5} type="text">Especificaciones/comentarios </input>
      </div> */}
      <h4>  
          Únete a nuestro modelo economía circular y genera mayor impacto:
        </h4>

        <p> + Compromiso social</p>
        <p>+ Re activación de la actividad.</p>
        <p>+ Estabilidad económica.</p>
        <p> + Fuente de ingresos.</p>
        <p> + Fortalecimiento de sus redes</p>
        <p> + Estabilidad económica.</p>
        <p> + Fuente de ingresos.</p>
        <p> + Re activación de la actividad.</p>
      </div>

      <a href=""> ¿A dónde va mi aporte?</a>
      <FlechaColor />
      <div>
      <img src={sumateTrabaja} alt=""></img>
       </div>
    <img src={IconOlla} alt=""></img>
</div>
 
  );
};

export default SumateTrabajemos;
