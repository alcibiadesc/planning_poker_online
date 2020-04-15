import React from "react";
import "./Modal.css";
import Delete from "./icons/baseline_delete_white_18dp.png";

type props = {
  value: string | number;
  deckSelected: string;
  useDeleteCard: any;
};

const Modal = ({ value, deckSelected, useDeleteCard }: props) => {
  return (
    <React.Fragment>
      <div className="md-modal-show">
        <div className="card-modal pa2">
          {deckSelected === "Custom" ? (
            <img src={Delete} alt="Delete" onClick={useDeleteCard} />
          ) : (
            <p className="pa2"> </p>
          )}
          <p className="contend-modal noselect tc avenir f1">{value}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Modal;
