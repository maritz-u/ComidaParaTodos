import React from "react";
import FlechaColor from "../../Components/FlechaColor";
import styles from "../Home/HomeAportar.module.css";
import icon1 from '../../img/homeB2icon1.png';
import icon2 from '../../img/homeB2icon2.png';
import icon3 from '../../img/homeB2icon3.png';
import icon4 from '../../img/homeB2icon4.png';
import icon5 from '../../img/homeB2icon5.png';
import icon6 from '../../img/homeB2icon6.png';
import HeaderSolid from "../../Components/HeaderSolid";
import Compartir from '../../Components/Compartir';



const Aportar = () => {
  return (
  
    <div className={styles.BigContainerAportar}>
       <HeaderSolid />
      <div className={styles.cajaTextos}>
        <div className={styles.cajaTextos12}>
      <h3>- Súmate a nuestra red -</h3>
      <h1>¿CÓMO APORTAR?</h1>
     </div>
      </div>
      <div className={styles.BoxBotones}>

        <div className={styles.CajatresBotones}>

          <button className={styles.Boton1}>
            <img src={icon2} alt='' />
            <a href="">
              <h4> $3000 = 1 Almuerzo </h4>
              <p>Puede donar dinero y aportar con un almuerzo</p>
            </a>
          </button>

          <button className={styles.Boton2}>
            <img src={icon3} alt='' />
            <a href="">
              <h4> Dona Alimentos y huertos </h4>
              <p>Puedes donar huertos urbanos y alimentos a la comunidad</p>
            </a>
          </button>

          <button className={styles.Boton3}>
            <img src={icon4} alt='' />
            <a href="">
              <h4> Dona tiempo y talento </h4>
              <p>Puedes dar clases, capacitaciones y talleres</p>
            </a>
          </button>

        </div>

        <div className={styles.CajatresBotones}>

          <button className={styles.Boton4}>
            <img src={icon6} alt='' />
            <a href="">
              <h4> Puedes ser colaborador </h4>
              <p>Como Empresa-Instituciòn publica y empresa privada puedes multiplicar la donaciòn y apadrinar una comunidad</p>
            </a>
          </button>

          <button className={styles.Boton5}>
            <img src={icon1} alt='' />
            <a href="">
              <h4> Productores, restaurantes y transportistas </h4>
              <p>Trabaja con nosotros y ambos crecemos</p>
            </a>
          </button>

          <button className={styles.Boton6}>
            <img src={icon5} alt='' />
            <a href=""><h4> Vives en un sector vulnerable </h4>
              <p>Y necesitas alimentos, conocimiento y emprender </p>
            </a>
          </button>
         
        </div>
        <br></br>
        
        <div className={styles.FlechaAportar}>
        <FlechaColor />
        </div>
      
        </div>
        <div className={styles.CompartirSocial}>
        <Compartir />
            </div>
       

    </div>
    
  );
};

export default Aportar;
