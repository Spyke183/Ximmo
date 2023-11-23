import React from "react";
import LogoutCompte from "../DecoCompte/LogoutCompte";
import "../Navbarfolder/Navbar.css";

function Navbar() {
  const isUserLoggedIn = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <>
      <div className="contenu_navbar">
        <div className="navbar">
          <div className="logo">XIMMO</div>
          <div className="menu">
            <a href="/">Accueil</a>
            {isUserLoggedIn && <a href="/profil">Mes annonces (offres)</a>}
            {isUserLoggedIn ? (
              <>
                <a href="#" onClick={handleLogout}>Se déconnecter</a>
              </>
            ) : (
              <>
                <a href="/connexion">Se connecter</a>
              </>
            )}
          </div>
        </div>
      </div> 
    </>
  );
}

export default Navbar;