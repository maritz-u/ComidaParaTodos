import React from 'react';
import styles from  './BotonCompartirDonar.module.css';



const BotonFlotante = ()=> {

    return (
        <div className={styles.cajaFlotante}>
            <button> <img></img></button>
            <button className={styles.btnFloatDonar} >Donar un almuerzo</button>

        </div>
    )
}
export default BotonFlotante;
