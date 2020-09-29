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
            <option className={styles.opciones} href="">  Red solidaria </option>
            <option className={styles.opciones} href="">  Nos preocupa</option>
            <option className={styles.opciones} href="">  Hambre cero (ODS) </option>
            <option className={styles.opciones} href="">  Estado actual del país </option>
            <option className={styles.opciones} href="">  Nuestro propósito </option>
            <option className={styles.opciones} href="">  Qué buscamos </option>
            <option className={styles.opciones} href="">  Qué fomentamos </option>
            <option className={styles.opciones} href="">  Quién recibe la ayuda </option>
            <option className={styles.opciones} href="">  Colaboradores </option>
            </select>
            
            <select className={styles.alternativas}>
            <option className={styles.opciones} href="">  Cómo funciona </option>
            <option className={styles.opciones} href="">  Nuestros proyectos </option>
            <option className={styles.opciones} href="">  Modelo campaña solidaria </option>
            <option className={styles.opciones} href="">  Modelo escuela para todos </option>
            <option className={styles.opciones} href="">  Testimonio </option>
            <option className={styles.opciones} href="">  Campaña solidaria </option>
            </select>
            
            <select className={styles.alternativas}>
            <option href=""> Campañas </option>
            </select>

            
            <select className={styles.alternativas}>
            <option href="">  Escuela para todos </option>
            <option className={styles.opciones} href="">  Objetivo </option>
            <option className={styles.opciones} href="">  Cómo funciona </option>
            <option className={styles.opciones} href="">  Banco de alimentos </option>
            <option className={styles.opciones} href="">  Escuelas </option>
            <option className={styles.opciones} href="">  Cómo puedo aportar </option>
            </select>

            
            <select className={styles.alternativas}>
            <option href=""> Súmate </option></select>
          </nav>
        </div>
        <div className={styles.SocialContainer}>
         <img src={FacebookC} className={styles.SocialIcon} alt= "Facebook"></img>
         <img src={InstagramC} className={styles.SocialIcon} alt= "Instagram"></img>
         <img src={TwitterC} className={styles.SocialIcon} alt= "Twitter"></img>
         <img src={mailC} className={styles.SocialIcon} alt= "Mail"></img> 
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
