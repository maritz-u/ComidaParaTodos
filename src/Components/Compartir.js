import React from 'react';
import banderas from '../img/banderas.png';
import compartir from '../img/compartir.png';
import styles from '../Components/Compartir.module.css'

const Compartir = () => {
    return (
        <div>
            <div className={styles.compartir}>
              
                    <img src={banderas} className={styles.iconsBotton}  alt='' />
                    <img src={compartir} alt='' className={styles.iconSize}  />
               
            </div>
        </div>
    )

}

export default Compartir;
