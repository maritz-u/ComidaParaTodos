import React from 'react';
import Header from '../../Components/Header';
import styles from '../../Views/Relatos/HomeRelatos.module.css';


const HomeRelatos = ()=> {
return (

<div className={styles.containerPrincipal}>
    <Header />
    <div className={styles.containerUno}>
    <h3> - El Relato Detrás de la Red -</h3>
    <h1>RELATOS DE NUESTRA RED</h1> 
    </div>
    <div className={styles.containerDos}>
     
    <h3>les presentamos el relato que hay detrás de    </h3>
    <h3> Un plato bueno, que genera empleo, fomenta    </h3>
    <h3> la educación y fortalece a las comunidades.   </h3>
    <div>
        <p> Rafael Rincón Magro Director de Comida para todos </p>
    </div>
    </div>

</div>

)

}

export default HomeRelatos;