import React from "react";
import BigLogo from "./LogoXL";
import styles from './Header.module.css';
import InstagramC from '../img/InstagramIcon.png';
import TwitterC from '../img/TwitterIcon.png';
import mailC from '../img/mailIcon.png';


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
                <option className={styles.opciones} href="">  Red solidaria </option>
                <option className={styles.opciones} href="">  Nos preocupa</option>
                <option className={styles.opciones} href="">  Situación país</option>
                <option className={styles.opciones} href="">  Nuestra receta </option>
                <option className={styles.opciones} href="">  Quién recibe la ayuda  </option>
                <option className={styles.opciones} href="">  Proyectos</option>
                <option className={styles.opciones} href="">  Alianzas </option>
              </select>
        

         
              <select className={styles.alternativas}>
                <option className={styles.opciones} href=""> Campañas </option>
                <option className={styles.opciones} href=""> Campaña de emergencia </option>
                <option className={styles.opciones} href=""> Navidad para todos </option>
                <option className={styles.opciones} href=""> Año nuevo para todos </option>
              </select>
          

           
              <select className={styles.alternativas}>
                <option className={styles.opciones} href="">  Proyectos </option>
                <option className={styles.opciones} href="">  Banco de alimentos </option>
                <option className={styles.opciones} href="">  Escuela de comida para todos </option>
              </select>
        



           
              <select className={styles.alternativas}>
                <option className={styles.opciones} href="">  Testimonios </option>
                <option className={styles.opciones} href="">  Testimonios </option>
                <option className={styles.opciones} href="">  Prensa </option>
                <option className={styles.opciones} href="">  Registro del impacto </option>
              </select>
    

          
              <select className={styles.alternativas}>
                <option className={styles.opciones} href=""> Súmate </option>
                <option className={styles.opciones} href=""> Soy una empresa  </option>
                <option className={styles.opciones} href=""> Soy transportista </option>
                <option className={styles.opciones} href=""> Soy un restaurant </option>
                <option className={styles.opciones} href=""> Soy productor</option>
                <option className={styles.opciones} href=""> Vivo en un sector</option>

              </select>
          
          </nav>
        </div>
        <div className={styles.SocialContainer}>
          
          <a href='https://www.instagram.com/comida_para_todos_cl/' target='_blank'>
            <img src={InstagramC} className={styles.SocialIcon} alt="Instagram"  />
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
              Dona un Almuerzo
               </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
