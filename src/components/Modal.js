import React from "react";
import "./Modal.css";
import Delete from "./icons/baseline_delete_white_18dp.png";

const Modal = ({ modal, valueCard, useModal, useDeleteCard, deckSelected }) => {
  return (
    <React.Fragment>
      <div
        className={modal ? "md-modal-show" : "md-modal-hide"}
        onClick={useModal}
      >
        <div className="card-modal pa2">
          {deckSelected === "Custom" ? (
            <img src={Delete} alt="Delete" onClick={useDeleteCard} />
          ) : (
            <p></p>
          )}
          <p className="contend-modal noselect tc avenir f1">{valueCard}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Modal;
