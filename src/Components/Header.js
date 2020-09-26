import React from "react";
import BigLogo from "./LogoXL";
import styles from './Header.module.css';


const Header = () => {
  return (
    <div className={styles.containerHeader}>
      <div className={styles.logonav}>
        <BigLogo />

        <div className={styles.navbar}>
          <nav>
            <a href="">  Red solidaria </a>
            <a href="">  Cómo funciona </a>
            <a href="">  Impacto de la red </a>
            <a href="">  2030 para todos </a>
            <a href="">  Se parte de la red </a>
          </nav>
        </div>
        <div className={styles.BtnDonar}>
          <button>Dona un almuerzo</button>
          <button>¿Necesitas Trabajo?</button>
        </div>
      </div>
      <div className={styles.boxtextprincipal}>

        <h3>-La mejor receta para un mejor país-</h3>

        <h1>COMBATAMOS JUNTOS EL HAMBRE EN CHILE</h1>
      </div>
      <div className={styles.boxbuttonsprincipal}>
        <button>Soy cuidadano y quiero donar</button>
        <button>Soy una Institución pública o empresa y quiero ayuda </button>
        <button>Soy de un restaurant, productor o transportista y necesito trabajo</button>
        <button>Vivo en una comunidad vulnerable y necesito acceso a alimentación</button>
      </div>

    </div>
  );
};

export default Header;
