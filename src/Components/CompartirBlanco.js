import React from 'react';
import styles from '../Components/CompartirBlanco.module.css'
import BanderasBlanco from "../img/icon-banderas-rrss-blanco.png";


const CompartirBlanco = () => {
    return (
        <div>
            <div className={styles.compartir}>
              
                 <img src={BanderasBlanco} className={styles.iconsBotton}  alt='' />     
               
            </div>
        </div>
    )

}

export default CompartirBlanco;