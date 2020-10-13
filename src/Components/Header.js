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
          <nav>

            <select className={styles.alternativas}>
              <option className={styles.opciones} value='all'>  Red solidaria </option>
              <option className={styles.opciones} value=''>  Nos preocupa</option>
              <option className={styles.opciones} value=''>  Situación país</option>
              <option className={styles.opciones} value=''>  Nuestra receta </option>
              <option className={styles.opciones} value=''>  Quién recibe la ayuda  </option>
              <option className={styles.opciones} value=''>  Proyectos</option>
              <option className={styles.opciones} value=''>  Alianzas </option>
            </select>



            <select className={styles.alternativas}>
              <option className={styles.opciones} value=''> Campañas </option>
              <option className={styles.opciones} value=''> Campaña de emergencia </option>
              <option className={styles.opciones} value=''> Navidad para todos </option>
              <option className={styles.opciones} value=''> Año nuevo para todos </option>
            </select>



            <select className={styles.alternativas}>
              <option className={styles.opciones} value=''>  Proyectos </option>
              <option className={styles.opciones} value=''>  Banco de alimentos </option>
              <option className={styles.opciones} value=''>  Escuela de comida para todos </option>
            </select>





            <select className={styles.alternativas}>
              <option className={styles.opciones} value=''>  Testimonios </option>
              <option className={styles.opciones} value=''>  Testimonios </option>
              <option className={styles.opciones} value=''>  Prensa </option>
              <option className={styles.opciones} value=''>  Registro del impacto </option>
            </select>



            <select className={styles.alternativas}>
              <option className={styles.opciones} value='' > Súmate  </option>
              <Link to='/sumate' className={styles.opciones}>Red Solidaria </Link>

              <option className={styles.opciones} value=''> Soy una empresa  </option>
              <option className={styles.opciones} value=''> Soy transportista </option>
              <option className={styles.opciones} value=''> Soy un restaurant </option>
              <option className={styles.opciones} value=''> Soy productor</option>
              <option className={styles.opciones} value=''> Vivo en un sector</option>

            </select>

          </nav>
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
        <div>
          <button className={styles.BtnDonar}>
            <a href="https://yodono.cl/proyecto/207/CultivaComidaparaTods"
              target="_blank" >
              Quiero aportar
               </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
