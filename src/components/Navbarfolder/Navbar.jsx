import React from "react";
import "../Navbarfolder/Navbar.css";

function Navbar() {
  return (
    <>
      <div className="contenu_navbar">
        <div className="navbar">
          <div className="logo">XIMMO</div>
          <div className="menu">
            <div className="btn-annonce"> Déposer une annonce</div>
            <a href="/">Accueil</a>
            <a href="/profil">Mes annonces (offres)</a>
            <a href="#">Se déconnecter</a>
            <a href="#">Se connecter</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
