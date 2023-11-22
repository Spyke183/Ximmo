import React, { useState, useEffect } from "react";

function Profil() {
  // États pour les champs de saisie ("VIDE")
  const [userData, setUserdata] = useState([]);
  useEffect(() => {
    async function getUserdata() {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };
      let response = await fetch(
        "https://apihackaton1.osc-fr1.scalingo.io/users/profile",
        requestOptions
      );
      let data = await response.json();

      if (Object.keys(data).length !== 0) {
        setUserdata(data);
      }
    }

    getUserdata();
  }, []);
  const handleLogout = () => {
    //déconnexion en supp. token du localStorage
    localStorage.removeItem("token");
    //recharger page
    window.location.reload();
  };
  // Ne pas afficher le contenu si l'utilisateur n'est pas connecté
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
      <button onClick={handleLogout}>Déconnexion</button>
    </>
  );
}
export default Profil;
