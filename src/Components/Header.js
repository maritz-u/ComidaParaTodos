import React from "react";
import BigLogo from "./LogoXL";
import styles from './Header.module.css';
import InstagramC from '../img/InstagramIcon.png';
import TwitterC from '../img/TwitterIcon.png';
import mailC from '../img/mailIcon.png';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.containerHeader}>
      <div className={styles.logonav}>
        <div className={styles.Cajalogo}>
          <BigLogo />
        </div>

        <div className={styles.navbar}>
          <ul className={styles.menuPrincipal}>         
              <li className= {styles.enlacePrincipal}> Red Solidaria
              <ul className={styles.alternativas}>
                <li className={styles.opciones} value=''> Qué nos preocupa </li>
                <li className={styles.opciones} value=''> Situación País </li>
                <li className={styles.opciones} value=''> Nuestra receta </li>
                <li className={styles.opciones} value=''> Quién recibe la ayuda </li>
                <li className={styles.opciones} value=''> Proyectos </li>
                <li className={styles.opciones} value=''> Alianzas </li>
              </ul>
            </li>
         
              <li className= {styles.enlacePrincipal}> Campañas
              <ul className={styles.alternativas}>
                <li className={styles.opciones} value=''> Campaña de emergencia </li>
                <li className={styles.opciones} value=''> Navidad para todos </li>
                <li className={styles.opciones} value=''> Año nuevo para todos </li>
              </ul>
            </li>

              <li className= {styles.enlacePrincipal}> Proyectos
              <ul className={styles.alternativas}>
                <li className={styles.opciones} value=''> Banco de alimentos </li>
                <li className={styles.opciones} value=''> Escuela de comida para todos </li>
              </ul>
            </li>

              <li className= {styles.enlacePrincipal}> Testimonios
              <ul className={styles.alternativas}>
                <li className={styles.opciones} value=''> Relatos </li>
                <li className={styles.opciones} value=''> Prensa/Redes sociales </li>
              </ul>
            </li>
          
              <li className= {styles.enlacePrincipal}> Súmate
              <ul className={styles.alternativas}>
                <li className={styles.opciones} value=''> Donar un almuerzo </li>
                <li className={styles.opciones} value=''> Donar alimentos </li>
                <li className={styles.opciones} value=''> Donar huertos urbanos </li>
                <li className={styles.opciones} value=''> Donar capacitaciones </li>
                <li className={styles.opciones} value=''> Dona tu talento </li>
                <li className={styles.opciones} value=''> Multiplica la donación y apadrina una comunidad </li>
                <li className={styles.opciones} value=''> Trabaja con nosotros </li>
                <li className={styles.opciones} value=''> Recibe la ayuda </li>
              </ul>
            </li>
          </ul>
        </div>
       
        <div className={styles.SocialContainer}>
          <a href='https://www.instagram.com/comida_para_todos_cl/' target='_blank'>
            <img src={InstagramC} className={styles.SocialIcon} alt="Instagram" />
          </a>
          <a href='https://twitter.com/chilecomida' target='_blank'>
            <img src={TwitterC} className={styles.SocialIcon} alt="Twitter" />
          </a>
          <img src={mailC} className={styles.SocialIcon} alt="Mail"></img>
        </div>

        <button className={styles.BtnDonar}>
            <a href="https://yodono.cl/proyecto/207/CultivaComidaparaTods"
              target="_blank" >
              Donar un almuerzo
               </a>
          </button>
      </div>
    </div>
  );
};

export default Header;
