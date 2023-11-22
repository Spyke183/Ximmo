import React, { useState, useEffect } from "react";
import LogoutCompte from "../components/DecoCompte/LogoutCompte";
import DeleteAnnonce from "../components/DeleteAnnonce/DeleteAnnonce";

function Profil() {
  const [userData, setUserdata] = useState([]);
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    async function getUserdata() {
      const userRequestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };
      let userResponse = await fetch(
        "https://apihackaton1.osc-fr1.scalingo.io/users/profile",
        userRequestOptions
      );
      let userData = await userResponse.json();

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
      <h2>Profil de l'utilisateur</h2>
      {userData && (
        <div>
          <p>Nom d'utilisateur: {userData.username}</p>
          <p>Email: {userData.email}</p>
        </div>
      )}

      <h2>Mes annonces</h2>
      {properties.map((property, index) => (
        <div key={index}>
          <p>Titre: {property.title}</p>
          <p>Prix: {property.price}</p>
          <p>Description: {property.description}</p>
          <p>Localisation: {property.location}</p>
          {/*  <p>Type: {property.type}</p>*/}
          {/*SUPPRIMER ANNONCE */}
          <DeleteAnnonce propertyId={property.id} />
        </div>
      ))}
      <LogoutCompte />
    </>
  );
}

export default Profil;
