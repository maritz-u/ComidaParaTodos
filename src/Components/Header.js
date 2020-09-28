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
        <div>
          {/* <button className={styles.BtnDonar}>Dona un almuerzo</button> */}
          <button className={styles.BtnDonar}>
            <a href="https://yodono.cl/proyecto/207/CultivaComidaparaTods"
              target="_blank" >
              Dona un Almuerzo
               </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
