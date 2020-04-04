import React from "react";
import "./Cartas.css";



function Cartas(props) {
  return (
    <div className="grow center ma1">
        <p id="cardRender" className="avenir dtc v-mid  tc w4 f1">{props.value}</p>
    </div>

  );
}

export default Cartas;
