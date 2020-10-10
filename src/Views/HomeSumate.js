import React from "react";
import SumateHuertos from "../Views/SumateHuertos";
import SumateTrabajemos from "../Views/SumateTrabajemos";

const HomeSumate = () => {
  return (
    <div>
      <div>
        <SumateHuertos />
      </div>
      <div>
        <SumateTrabajemos />
      </div>
    </div>
  );
};

export default HomeSumate;
