import React, { useState } from "react";
import "./Cartas.css";
import Modal from "./Modal.js";

function Cartas({ value }) {
  const [modal, setModal] = useState(false);

  const useModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className="carta grow center ma1">
        <p
          id="cardRender"
          onClick={useModal}
          value={value}
          className="noselect avenir dtc v-mid  tc w4 f1"
        >
          {value}
        </p>
      </div>
      <div className="">
        <Modal modal={modal} valueCard={value} useModal={useModal} />
      </div>
    </>
  );
}

export default Cartas;
