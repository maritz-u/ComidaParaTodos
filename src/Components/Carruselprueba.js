import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Carrusel1 from "../img/Carrusel1.png";
import Carrusel2 from "../img/Carrusel2.png";
import Carrusel3 from "../img/Carrusel3.png";
import Carrusel4 from "../img/Carrusel4.png";
import styles from "../Components/CarruselPrueba.module.css"
class DemoCarousel extends Component {
    render() {
        return (
            <Carousel className={styles.prueba} >
                <div >
                    <img src={Carrusel1} alt="" />

                </div>
                <div>
                    <img src={Carrusel2} alt="" />

                </div>
                <div>
                    <img src={Carrusel3} alt="" />

                </div>
                <div>
                    <img src={Carrusel4} alt="" />
                </div>
            </Carousel>
        );
    }
};
export default DemoCarousel; 