import React from "react";

function DeleteAnnonce({ propertyId, onDelete }) {
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
        onDelete();
      } else {
        console.error("La suppression de l'annonce a échoué.");
      }
    } catch (error) {
      console.error("Erreur lors de la suppression de l'annonce:", error);
    }
  };

  return <button onClick={handleDelete}>Supprimer l'annonce</button>;
}

export default DeleteAnnonce;
