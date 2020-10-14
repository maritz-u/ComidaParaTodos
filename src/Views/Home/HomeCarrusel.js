import React from "react";
import Header from "../../Components/Header";
import Carrusel1 from "../../img/carrusel1b.png";
import Carrusel2 from "../../img/carrusel2b.png";
import Carrusel3 from "../../img/carrusel3b.png";
import Carrusel4 from "../../img/carrusel4b.png";
import Compartir from '../../Components/Compartir';



const Carrusel = () => {
    return (

        <div className={"section"} >
            <Header />
            <div className={"slide"}>
                <img src={Carrusel1} style={{ height: "100vh", width: "100%" }} alt="" />
                <div style={{ zIndex: "2000", paddingTop: "42.5%", marginLeft: "90.5%" }}>
                    <Compartir />
                </div>
            </div>
            <div className={"slide"}>
                <img src={Carrusel2} style={{ height: "100vh", width: "100%" }} alt="" />
                <div style={{ zIndex: "2000", paddingTop: "42.5%", marginLeft: "90.5%" }}>
                    <Compartir />
                </div>
            </div>
            <div className={"slide"}>
                <img src={Carrusel3} style={{ height: "100vh", width: "100%" }} alt="" />
                <div style={{ zIndex: "2000", paddingTop: "42.5%", marginLeft: "90.5%" }}>
                    <Compartir />
                </div>
            </div>
            <div className={"slide"}>
                <img src={Carrusel4} style={{ height: "100vh", width: "100%" }} alt="" />
                <div style={{ zIndex: "2000", paddingTop: "42.5%", marginLeft: "90.5%" }}>
                    <Compartir />
                </div>
            </div>


        </div>
    );
};

export default Carrusel;