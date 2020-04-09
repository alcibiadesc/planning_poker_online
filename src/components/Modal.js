import React from "react";
import "./Modal.css";

const Modal = ({ modal, valueCard, useModal }) => {
  return (
    <React.Fragment>
      <div
        className={modal ? "md-modal-show" : "md-modal-hide"}
        onClick={useModal}
      >
        <div className="card-modal">
          <p className="contend-modal noselect tc avenir f1">{valueCard}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Modal;
