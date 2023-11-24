import React from "react";
import "../Navbarfolder/Navbar.css";

function Navbar(props) {
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
            {props.isUserLoggedIn && (
              <a href="/profil">Mes annonces (offres)</a>
            )}
            {props.isUserLoggedIn ? (
              <>
                <a href="#" onClick={handleLogout}>
                  Se déconnecter
                </a>
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
