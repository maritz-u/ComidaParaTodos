import React from 'react';
import banderas from '../img/iconos-banderas-rrss.png';
import styles from '../Components/Compartir.module.css'

const Compartir = () => {
    return (
        <div>
            <div className={styles.compartir}>
              
                 <img src={banderas} className={styles.iconsBotton}  alt='' />     
               
            </div>
        </div>
    )

}

export default Compartir;
