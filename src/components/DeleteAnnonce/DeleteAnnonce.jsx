import React from "react";
import "../../router/profil.css";

function DeleteAnnonce({ propertyId }) {
  const handleDelete = async () => {
    const deleteRequestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };

    try {
      let deleteResponse = await fetch(
        `https://apihackaton1.osc-fr1.scalingo.io/delete-properties/${propertyId}`,
        deleteRequestOptions
      );

      if (deleteResponse.ok) {
        console.log("Nice ça fonctionne");
      } else {
        console.error("La suppression de l'annonce a échoué.");
      }
    } catch (error) {
      console.error("Erreur lors de la suppression de l'annonce:", error);
    }
  };

  return (
    <button className="btn-annonce" onClick={handleDelete}>
      Supprimer l'annonce
    </button>
  );
}

export default DeleteAnnonce;
