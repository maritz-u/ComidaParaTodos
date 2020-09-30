import React from "react";
import FlechaColor from "../Components/FlechaColor";
import styles from "../Views/HomeAportar.module.css";

const Aportar = () => {
  return (
    <div className={styles.BigContainerAportar}>
      <h3>- Sùmate a nuestra red -</h3>
      <h1>¿CÒMO APORTAR?</h1>
      <div className={styles.BoxBotones}>
        <div className={styles.CajatresBotones}>
        <button className={styles.Boton1}><a href=""><strong> $3000 = 1 Almuerzo </strong>
         Puede donar dinero y aportar con un almuerzo</a></button>
        <button className={styles.Boton2}><a href=""><strong> Dona Alimentos y huertos </strong>
         Puedes donar huertos urbanos y alimentos a la comunidad </a> </button>
        <button className={styles.Boton3}><a href=""><strong> Dona tiempo y talento </strong> 
        Puedes dar clases, capacitaciones y talleres </a></button>
        </div>  
      <div className={styles.CajatresBotones}>
        <button className={styles.Boton4}><a href=""><strong> Puedes ser colaborador </strong>
         Como Empresa-Instituciòn publica y empresa privada puedes multiplicar la donaciòn y apadrinar una comunidad </a></button>
        <button className={styles.Boton5}><a href=""><strong> Productores, restaurantes y transportistas </strong>
         Trabaja con nosotros y ambos crecemos </a></button>
        <button className={styles.Boton6}><a href=""><strong> Vives en un sector vulnerable </strong>
         Y necesitas alimentos, conocimiento y emprender </a></button>
      </div>  
      </div>
      <FlechaColor />
    </div>
  );
};

export default Aportar;
