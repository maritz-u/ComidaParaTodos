import React from "react";
import FlechaColor from "../../Components/FlechaColor";
import styles from "../Sumate/SumateTrabajemos.module.css";
import sumateTrabaja from "../../img/sumate-trabaja.png";
import IconOlla from "../../img/homeB2icon1.png";

const SumateTrabajemos = () => {
  return (
    <div className={styles.CajaCompleta}>
      <div className={styles.PrimerContenedor}>
        <div className={styles.PrimerContenedor1}>

          <div className={styles.BoxOlla}>
            <h3>- Súmate a nuestra red -</h3>
            <div className={styles.BoxH1Olla}>
              <div>
                <h1>¡TRABAJEMOS Y </h1>
                <h1>CREZCAMOS JUNTOS!</h1>
              </div>
              <div className={styles.BoxiconOlla}>
                <img className={styles.ImgiconOlla} src={IconOlla} alt=""></img>
              </div>
            </div>
          </div>
          <div className={styles.InputsRadio}>
            <form>
              <div className="radio">
                <label>
                  <input type="radio" value="option1" checked={true} />

      Productor
     </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="option2" />
      Transportista
     </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="option3" />
      Restaurant
     </label>
              </div>
            </form>
          </div>
        </div>
        <div className={styles.PrimerContenedor2}>
          <div className={styles.FormularioYtxto}>
            
            <p>Nombre</p>
            <input className={styles.InputTrabajemos} type="text"></input>
            <div className={styles.Contactotrabajemos} >
              <div>
            <p>Número de Contacto</p>
            <input className={styles.InputTrabajemos} type="text"></input>
            </div>
            <div>
            <p>Correo Electrónico</p>
            <input className={styles.InputTrabajemos} type="text"></input>
            </div>
            </div>
            <div >
              <div>
                <p>Sector donde quieres trabajar</p>
                <input className={styles.InputTrabajemos} type="text"></input>
              </div>
              <div>
                <p>Especificaciones/comentarios</p>
                <textarea className={styles.InputTrabajemos} type="text"></textarea>
                <br></br>
                <br></br>
                <div>
                <button className={styles.BtnTrabajar}>Quiero trabajar</button>
                 <a href=""> ¿A dónde va mi aporte?</a>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.CajaTexto}>

            <h4>
              Únete a nuestro modelo economía circular y genera mayor impacto:
</h4>

            <p> + Compromiso social</p>
            <p>+ Re activación de la actividad.</p>
            <p>+ Estabilidad económica.</p>
            <p> + Fuente de ingresos.</p>
            <p> + Fortalecimiento de sus redes</p>
            <p> + Estabilidad económica.</p>
            <p> + Fuente de ingresos.</p>
            <p> + Re activación de la actividad.</p>
            <div>
              <FlechaColor />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.SegundoContenedor} >
        <img className={styles.ImgOlla} src={sumateTrabaja} alt=""></img>
      </div>
    </div>
  );
};





export default SumateTrabajemos;
