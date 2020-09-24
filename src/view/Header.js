import React from "react";
import LogoXL from "./LogoXL";

const Header = () => {
  return (
    <div className= "containerHeader">
      <LogoXL/>
      <div className="navbar">
        <nav>
          <a href="">  Red solidaria </a>
          <a href="">  Cómo funciona </a>
          <a href="">  Impacto de la red </a>
          <a href="">  2030 para todos </a>
          <a href="">  Se parte de la red </a>
        </nav>
      </div>
      <div className="BtnDonar">
          <button>Dona un almuerzo</button>
      </div>
    </div>
  );
};

export default Header;
