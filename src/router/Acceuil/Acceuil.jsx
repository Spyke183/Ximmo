import React, { useState } from "react";
import Annonce from "../../router/CreateAnnonce";
import LoginModal from "../../components/LoginModal/LoginModal";
import "./Acceuil.css";

const Root = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(
    localStorage.getItem("token") !== null
  );

  const handleLoginSuccess = () => {
    setIsUserLoggedIn(true);
    setShowLoginModal(false);
  };

  return (
    <>
      <div className="header">
        <div className="title">
          Moteur de recherche pour <span className="blue-text">louer</span> ou{" "}
          <span className="blue-text">acheter</span>
        </div>
        {!isUserLoggedIn ? (
          <div
            className="btn-annonce"
            onClick={() =>
              isUserLoggedIn ? <Annonce /> : setShowLoginModal(true)
            }
          >
            Déposer une annonce
          </div>
        ) : (
          <Annonce />
        )}
      </div>
      {showLoginModal && (
        <LoginModal
          onClose={() => setShowLoginModal(false)}
          onLoginSuccess={handleLoginSuccess}
        />
      )}
    </>
  );
};

export default Root;
