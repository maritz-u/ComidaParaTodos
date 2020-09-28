import React from 'react';
import styles from  './BotonCompartirDonar.module.css';
import img from '../img/RRSSIconW.png'



const BotonFlotante = ()=> {

    return (
        <div className={styles.cajaFlotante}>
         <img src= {img} className={styles.btnFloatRedes}/>
         <button className={styles.btnFloatDonar} >Donar un almuerzo</button>

        </div>
    )
}
export default BotonFlotante;
