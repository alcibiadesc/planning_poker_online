import React from "react";
import "./Cartas.css";

function Cartas({ value }) {

const useCardValue = (event) => {
    console.log(value);
}

  return (
    <>
    <div className="carta grow center ma1">
      <p
        id="cardRender"
        onClick={useCardValue}
        value={value}
        className="noselect avenir dtc v-mid  tc w4 f1"
      >
        {value}
      </p>
    </div>
    </>

  );
}

export default Cartas;
