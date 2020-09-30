import React from 'react';
import BotonComoAportar from '../Components/BotonComoAportar';
import Flecha from '../Components/Flecha';
import Header from '../Components/Header';
import styles from "../Views/HomeProposito.module.css";

const Proposito = () => {
    return (
        <div className={styles.cajaSegundaPantalla}>
            <div>
                <Header />
            </div>
            <div >
                <div>
                    <h3> - Comida para todos - </h3>
                    <h1>PROPÓSITO</h1>
                </div>
                <div>
                    <p>
                        Somos una plataforma solidaria que nace de la unión de organizaciones sociales, que busca salvaguardar la Seguridad
                        Alimentaria. Conectamos, colaboramos y generamos asociatividad entre los actores, de manera intersectorial,
                        como fórmula para el desarrollo con la comunidad de programas sociales de impacto colectivo. a través de:
                </p>
                </div>
                <div>
                    <p> Generar y distribuir alimentación a quienes más lo necesitan a raíz de las contingencias.</p>
                    <p>Educar en materias de alimentación saludable, para fomenter la mejora de calidad de vida.</p>
                    <p>Capacitar en materias de gastronomía a las comunidades y de esta manera generar oportunidades.</p>
                </div>
            </div>
            <div>
                <BotonComoAportar />
            </div>
            <div>
                Image
            </div>

            <div>
                <Flecha />
            </div>
        </div>
    )
}

export default Proposito;