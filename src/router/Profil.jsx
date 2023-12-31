import React, { useState, useEffect } from "react";
import LogoutCompte from "../components/DecoCompte/LogoutCompte";
import DeleteAnnonce from "../components/DeleteAnnonce/DeleteAnnonce";
import "./profil.css";

function Profil() {
  const [userData, setUserdata] = useState([]);
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    async function getUserdata() {
      const RequestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };
      let Response = await fetch(
        "https://apihackaton1.osc-fr1.scalingo.io/users/profile",
        RequestOptions
      );
      let userData = await Response.json();

      if (Object.keys(userData).length !== 0) {
        setUserdata(userData);
      }
    }

    async function getProperties() {
      const propertiesRequestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };
      let propertiesResponse = await fetch(
        "https://apihackaton1.osc-fr1.scalingo.io/get-my-properties",
        propertiesRequestOptions
      );
      let propertiesData = await propertiesResponse.json();

      if (Array.isArray(propertiesData)) {
        setProperties(propertiesData);
      }
    }

    getUserdata();
    getProperties();
  }, []);

  if (!localStorage.getItem("token")) {
    return null;
  }

  return (
    <>
      <div className="header">
        <div className="title">Profil de l'utilisateur</div>
        {userData && (
          <div>
            <p>Nom d'utilisateur: {userData.username}</p>
            <p>Email: {userData.email}</p>
          </div>
        )}
      </div>

      <div className="card">
        <h2>Mes annonces</h2>
        {properties.map((property, index) => (
          <div key={index}>
            <p>Titre: {property.title}</p>
            <p>Prix: {property.price}</p>
            <p>Description: {property.description}</p>
            <p>Localisation: {property.location}</p>
            <div>
              <h4>Images:</h4>
              {property.images.map((image, imageIndex) => (
                <img key={imageIndex} src={image} alt={`Image ${imageIndex}`} />
              ))}
            </div>
            <DeleteAnnonce propertyId={property.id} />
          </div>
        ))}
      </div>
      <LogoutCompte />
    </>
  );
}

export default Profil;
