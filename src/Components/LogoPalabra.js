import React from "react";
import LogoXL from "../img/logocolorS.png";
import  styles from './LogoXL.module.css';
const LogoPalabra = () => {
    return(
        
        <div className={styles.LogoXL}>
            <img src={LogoXL} style={{height:"65px", width:"100px", paddingTop:"7px", paddingLeft:"7px"}} ></img>
     
        </div>
        
    );
};

export default LogoPalabra;