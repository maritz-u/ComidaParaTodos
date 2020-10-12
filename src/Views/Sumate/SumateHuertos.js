import React from "react";
import FlechaColor from "../../Components/FlechaColor";
import styles from "../Sumate/SumateHuertos.module.css";
import FotoHuertos from "../../img/sumate-huertos.png";
import IconoHuerto1 from "../../img/homeB2icon4.png";
const SumateHuertos = () => {
    return (
        <div className={styles.ContainerHuerto}>
            <div className={styles.BoxHuerto1}>
                <div className={styles.TextoHuerto} >
                    <h3>- Súmate a Nuestra red -</h3>
                    <div className={styles.TextoImagenHuerto}>
                        <div className={styles.TextH1huerto}>
                            <h1>DONA HUERTOS</h1>
                            <div className={styles.TextoIconoHuerto} >
                            <img className={styles.IconoHuerto} src={IconoHuerto1} alt="" />
                            </div>
                        </div>
                    </div>

                </div>
                <div className={styles.FormularioHuerto}>

                    <p>Nombre</p>
                    <input className={styles.InputHuerto} type="text"></input>

                    <p>Número de Contacto</p>
                    <input className={styles.InputHuerto} type="text"></input>

                    <p>Correo Electrónico</p>
                    <input className={styles.InputHuerto} type="text" ></input>
                    <div className={styles.HuertoHubicacion}>
                        <div>
                            <p>Ubicación del huerto urbano</p>
                            <input className={styles.InputHuerto} type="text"></input>
                        </div>
                        <div>
                            <p>Metros Cuadrados</p>
                            <input className={styles.InputHuerto} type="text"></input>
                        </div>
                    </div>
                    <p>Especificaciones</p>
                    <input className={styles.InputHuerto} type="text"></input>
                </div> 
                <br></br>
                <div className={styles.BtonHuerto}>
                    <div>
                        <button className={styles.btnDonarH}>Donar un huerto</button>
                    </div>
                    <div>¿Dónde va mi aporte?</div>
                </div>
            </div>
            <div className={styles.BoxHuerto2} >
                <div className={styles.TextoHuerto2}>
                    <p>Las Escuelas Comida para Todos,</p>
                    <p>contarán con huertos comunitarios.</p>
                    <p>Diseñados para poder educar en</p>
                    <p>alimentación saludable, abastecer a la </p>
                    <p>comunidad, generar encuentro e </p>
                    <p>inclusión y reforzar soberanía y</p>
                    <p>seguridad alimentaria como respuesta</p>
                    <p>a la crisis socioambiental existente.</p>
                    <br></br>
                    <p>Puedes aportar con espacios verdes,</p>
                    <p>¡únete a nuestra red!</p>
                    <br></br>
                    <p><strong>Te contactaremos para coordinar la</strong></p>
                    <p><strong>entrega y contarte más del proceso.</strong></p>

                </div>
                <div className={styles.FlechaHuerto}>
                    <FlechaColor />
                </div>
            </div>
            <div className={styles.BoxHuerto3}>
                <div className={styles.ImgHuerto}>
                    <img className={styles.SumaHuerto} src={FotoHuertos} alt="" />
                </div>
            </div>
        </div>
    );
};

export default SumateHuertos;