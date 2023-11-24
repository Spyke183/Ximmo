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
  // États pour champs de saisie (VIDE ;-) )
  const [filterPrice, setFilterPrice] = useState("");
  const [filterTitle, setFilterTitle] = useState("");

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

      //filtre prix
      if (filterPrice !== "") {
        propertiesData = propertiesData.filter(
          (property) => property.price <= parseInt(filterPrice)
        );
      }

      //filtre titre
      if (filterTitle !== "") {
        const keyword = filterTitle.toLowerCase();
        propertiesData = propertiesData.filter((property) =>
          property.title.toLowerCase().includes(keyword)
        );
      }

      setProperties(propertiesData);
    }

    getProperties();
    // change contenu filtre lorsque valeur change
  }, [filterPrice, filterTitle]);

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
      <div className="filtre">
        {" "}
        {/* Zone de filtre par prix */}
        <div>
          <label htmlFor="filterPrice">Filtrer par prix maximum :</label>
          <input
            type="number"
            id="filterPrice"
            value={filterPrice}
            onChange={(e) => setFilterPrice(e.target.value)}
          />
        </div>
        {/* Zone de filtre par titre */}
        <div>
          <label htmlFor="filterTitle">Filtrer par titre :</label>
          <input
            type="text"
            id="filterTitle"
            value={filterTitle}
            onChange={(e) => setFilterTitle(e.target.value)}
          />
        </div>
      </div>

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
            <p>Email: {property.email}</p>
            Description:{" "}
            {property.description.length > 40
              ? `${property.description.slice(0, 40)}...`
              : property.description}
            <p>Localisation: {property.location}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Root;
