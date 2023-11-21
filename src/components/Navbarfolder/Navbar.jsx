import React from "react";
import "../Navbarfolder/Navbar.css";

function Navbar() {
  return (
    <>
      <div class="contenu_navbar">
        <div class="navbar">
          <div class="logo">XIMMO</div>
          <div class="menu">
            <div class="btn-annonce"> Déposer une annonce</div>
            <a href="#">Nous contacter</a>
            <a href="#">Mes annonces (offres)</a>
            <a href="#">Se déconnecter</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
