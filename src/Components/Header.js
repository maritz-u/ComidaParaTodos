import React from "react";
import BigLogo from "./LogoXL";
import styles from './Header.module.css';
import FacebookC from '../img/FacebookIcon.png';
import InstagramC from '../img/InstagramIcon.png';
import TwitterC from '../img/TwitterIcon.png';
import mailC from '../img/mailIcon.png';


const Header = () => {
  return (
    <div className={styles.containerHeader}>
      <div className={styles.logonav}>
        <BigLogo />
        <div className={styles.navbar}>
          <nav>
            <select className={styles.alternativas}>
            <option href="">  Red solidaria </option></select>
            <select className={styles.alternativas}>
            <option href="">  Cómo funciona </option></select>
            <select className={styles.alternativas}>
            <option href="">  Campañas </option></select>
            <select className={styles.alternativas}>
            <option href="">  Escuela para todos </option></select>
            <select className={styles.alternativas}>
            <option href="">  Súmate </option></select>
          </nav>
        </div>
        <div className={styles.SocialContainer}>
         <img src={FacebookC} alt= "Facebook"></img>
         <img src={InstagramC} alt= "Instagram"></img>
         <img src={TwitterC} alt= "Twitter"></img>
         <img src={mailC} alt= "Mail"></img> 
        </div>
        <div>
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
