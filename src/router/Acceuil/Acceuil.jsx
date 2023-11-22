import React from "react";
import "./Acceuil.css";

export default function Root() {
  return (
    <>
      <div className="header">
        <div className="title">
          {" "}
          Moteur de recherche pour <span classNameName="blue-text">
            louer
          </span>{" "}
          ou <span classNameName="blue-text">acheter</span>
        </div>
        <div className="btn-annonce"> Déposer une annonce</div>
      </div>
    </>
  );
}
