import React from "react";
import styles from "../Home/HomeFooter.module.css";
import ImgColaboradores from "../../img/HomeG_logos.png";
import ImgLogo from "../../img/LogoXL.png";
import InstagramW from "../../img/InstagramIconW.png";
import TwitterW from "../../img/TwitterIconW.png"
import MailW from "../../img/mailIconW.png";
import FacebookW from "../../img/FacebookIconW.png";

const Footer = () => {
  return (
    <div className={styles.ContainerFooter}>
      <div className={styles.BoxColaboradores}>
        <div className={styles.TextoColaboradores}>
          <h3>- Agradecemos a toda nuestra red -</h3>
          <h1>NUESTRAS ALIANZAS</h1>
        </div>
        <div className={styles.ImgColaboradores}>
          <img
            className={styles.LogosColaboradores}
            src={ImgColaboradores}
            alt=""
          />
        </div>
      </div>
      <div className={styles.BoxFooter}>
        <div className={styles.ContenedorLogo}>
          <img className={styles.LogoFooter} src={ImgLogo} alt="" />
        </div>
        <div className={styles.ContainerNewsletter}>
          <p> <strong>¡Suscríbete a nuestro Newsletter!</strong></p>
          <p>Recibe información de los últimos proyectos y conoce nuestro impacto.</p>
          <div className={styles.InputBoton}>
            <input className={styles.inputNewsletter1} type="text" placeholder="Nombre"></input>
            <input className={styles.inputNewsletter2} type="text" placeholder="Email"></input>
            <button className={styles.BtnSuscribirse}>Suscribirse</button>
          </div>
        </div>
        <div className={styles.TextRRSS}>
          <h4>¡Síguenos!</h4>
          <div className={styles.BoxIconRRSS}>
            <img className={styles.IconRRSS} src={FacebookW} alt="" />

            <a href='https://www.instagram.com/comida_para_todos_cl/' target='_blank'>
              <img className={styles.IconRRSS} src={InstagramW} alt="" />
            </a>
            <a href='https://twitter.com/chilecomida' target='_blank'>
              <img className={styles.IconRRSS} src={TwitterW} alt="" />
            </a>
            <img className={styles.IconRRSS} src={MailW} alt="" />
          </div>

        </div>

      </div>
      <div className={styles.madeBy}>
        <p>© 2020, Inc. 2020. We love our users! Made by {`<ReactIvas/>`}.</p>
      </div>

    </div>

  );
};
export default Footer;
