import React from "react";
import Carrusel1 from "../../img/Carrusel1.png";
import Carrusel2 from "../../img/Carrusel2.png";
import Carrusel3 from "../../img/Carrusel3.png";
import Carrusel4 from "../../img/Carrusel4.png";

const Carrusel = () => {
    return (
        <div className={"section"} >
            
            <div className={"slide"}>
                <img src={Carrusel1} style={{height: "100vh", width: "100vw"}} alt="" />
            </div>
            <div className={"slide"}>
                <img src={Carrusel2} style={{height: "100vh", width: "100vw"}} alt="" />
            </div>
            <div className={"slide"}>
                <img src={Carrusel3} style={{height: "100vh", width: "100vw"}} alt="" />
            </div>
            <div className={"slide"}>
                <img src={Carrusel4} style={{height: "100vh", width: "100vw"}} alt="" />
            </div>
        </div>
    );
};

export default Carrusel;