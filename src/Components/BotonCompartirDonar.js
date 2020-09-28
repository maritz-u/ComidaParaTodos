import React from 'react';
import styles from  './BotonCompartirDonar.module.css';



const BotonFlotante = ()=> {

    return (
        <div className={styles.cajaFlotante}>
            <button className={styles.btnFloatRedes}>Compartir</button>
            <button className={styles.btnFloatDonar} >Donar un almuerzo</button>

        </div>
    )
}
export default BotonFlotante;