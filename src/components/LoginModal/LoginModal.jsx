import React from "react";
import Connexion from "../../router/Connexion";

const LoginModal = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <Connexion />
      </div>
    </div>
  );
};

export default LoginModal;
