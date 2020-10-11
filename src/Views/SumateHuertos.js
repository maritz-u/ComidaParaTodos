import React from "react";
import FlechaColor from "../Components/FlechaColor";
import styles from "../Views/SumateHuertos.module.css";
const SumateHuertos = () => {
    return (
        <div className={styles.ContainerHuerto}>
            <div className={styles.BoxHuerto1}>
                <div className={styles.TextoHuerto} >
                    <h3>- Súmate a Nuestra red -</h3>
                    <div className={styles.TextoImagenHuerto}>
                        <div className={styles.TextH1}>
                            <h1>DONA HUERTOS</h1>
                        </div>
                    </div>

                </div>
                <div className={styles.FormularioHuerto}>

                    <p>Nombre</p>
                    <input type="text" name="nombre"></input>

                    <p>Número de Contacto</p>
                    <input type="text" name="apellidos"></input>

                    <p>Correo Electrónico</p>
                    <input type="text" name="nacionalidad"></input>
                    <div>
                        <p>Ubicación del huerto urbano</p>
                        <input type="text" name="nacionalidad"></input>
                        <p>Metros Cuadrados</p>
                        <input type="text" name="nacionalidad"></input>
                    </div>
                    <p>Especificaciones</p>
                    <input type="text" name="nacionalidad"></input>
                </div>
                <div className={styles.BtonHuerto}>
                    <div></div>
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
                    <p>Te contactaremos para coordinar la</p>
                    <p>entrega y contarte más del proceso.</p>

                </div>
                <div className={styles.FlecchaHuerto}>
                    <FlechaColor/>
                </div>
            </div>
            <div className={styles.BoxHuerto3}>
                <div className={styles.ImgHuerto}></div>
            </div>







        </div>
    );
};

export default SumateHuertos;