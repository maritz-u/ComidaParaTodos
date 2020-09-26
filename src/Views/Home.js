import React from "react";
import styles from "../Views/Home.module.css";

const Home = () => {
  return (
    <div className={styles.containerFirstView}>
      <div className={styles.boxtextprincipal}>
        <h3>-La mejor receta para un mejor país-</h3>
      </div>
      <div className={styles.boxtextprincipal}>
        <h1>COMBATAMOS JUNTOS EL HAMBRE EN CHILE</h1>
      </div>
      <div className={styles.boxBotonesredondos} >
        <button className={styles.boxbuttonsprincipal}>
          Soy cuidadano y quiero donar
        </button>
        <button className={styles.boxbuttonsprincipal}>
          Soy una Institución pública o empresa y quiero ayuda{" "}
        </button>
        <button className={styles.boxbuttonsprincipal}>
          Soy de un restaurant, productor o transportista y necesito trabajo
        </button>
        <button className={styles.boxbuttonsprincipal}>
          Vivo en una comunidad vulnerable y necesito acceso a alimentación
        </button>
      </div>
    </div>
  );
};

export default Home;
