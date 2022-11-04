import React from "react";
import "./Modal.css";
import Listado from "./Listado"

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1></h1>
        </div>
        <div className="body">
          <Listado/>
          <p></p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Salir
          </button>
         
        </div>
      </div>
    </div>
  );
}

export default Modal;
