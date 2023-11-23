import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LoginModal from "../../components/LoginModal/LoginModal";
import "./Accueil.css";

const Root = () => {
  const [properties, setProperties] = useState([]);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(
    localStorage.getItem("token") !== null
  );

  useEffect(() => {
    async function getProperties() {
      const propertiesRequestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
      let propertiesResponse = await fetch(
        "https://apihackaton1.osc-fr1.scalingo.io/properties",
        propertiesRequestOptions
      );
      let propertiesData = await propertiesResponse.json();

      setProperties(propertiesData);
    }

    getProperties();
  }, []);

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
        {isUserLoggedIn ? (
          <Link to="/annonce" className="btn-annonce">
            Déposer une annonce
          </Link>
        ) : (
          <div className="btn-annonce" onClick={() => setShowLoginModal(true)}>
            Déposer une annonce
          </div>
        )}
      </div>
      {showLoginModal && (
        <LoginModal
          onClose={() => setShowLoginModal(false)}
          onLoginSuccess={handleLoginSuccess}
        />
      )}
      {properties.map((property, index) => (
        <div className="card" key={index}>
          {property.images && (
            <div className="card-img">
              {property.images.map((image, imageIndex) => (
                <img key={imageIndex} src={image} alt={`Image ${imageIndex}`} />
              ))}
            </div>
          )}
          <div className="Contenu">
            <p>Titre: {property.title}</p>
            <p>Prix: {property.price}</p>
            <p>Description: {property.description}</p>
            <p>Localisation: {property.location}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Root;
