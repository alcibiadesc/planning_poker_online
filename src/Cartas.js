import React from "react";
import "./Cartas.css";



function Cartas({value}) {
  return (

    <main  className="carta grow center ma1">
        <p id="cardRender" className="noselect avenir dtc v-mid  tc w4 f1">{value}</p>
    </main>

  );
}




export default Cartas;
