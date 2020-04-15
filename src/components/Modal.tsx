import React, { Fragment } from "react";
import "./Modal.css";
import Delete from "./icons/baseline_delete_white_18dp.png";

type props = {
  value: string | number;
  deckSelected: string;
  useDeleteCard: () => void;
};

const Modal: React.FC<props> = ({ value, deckSelected, useDeleteCard }) => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default Modal;
