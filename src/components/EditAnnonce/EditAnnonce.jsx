import React, { useState } from "react";

function EditAnnonce({ annonce, onCancel, onUpdate }) {
  const [editedAnnonce, setEditedAnnonce] = useState(annonce);

  const handleUpdate = (e) => {
    e.preventDefault();
    onUpdate(editedAnnonce);
  };

  return (
    <div>
      <h3>Modifier l'annonce</h3>
      <form onSubmit={handleUpdate}>
        <label>Titre: </label>
        <input
          type="text"
          value={editedAnnonce.title}
          onChange={(e) =>
            setEditedAnnonce({ ...editedAnnonce, title: e.target.value })
          }
        />
        {/* Ajoutez ici des champs pour les autres propriétés de l'annonce */}
        <button type="submit">Enregistrer</button>
        <button type="button" onClick={onCancel}>
          Annuler
        </button>
      </form>
    </div>
  );
}

export default EditAnnonce;
