import React from "react";
import LogoXL from "../img/logocolorXL.png";
import  styles from './LogoXL.module.css';
const BigLogo = () => {
    return(
        
        <div className={styles.LogoXL}>
            <img src={LogoXL} ></img>
     
        </div>
        
    );
};

export default BigLogo;