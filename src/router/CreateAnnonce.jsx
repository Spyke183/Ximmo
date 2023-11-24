import React, { useState } from "react";
import "./profil.css";
import { ToastContainer } from "react-toastify";
import toastUtils from "../components/toastUtils/ToastUtils";

function Annonce() {
  // États pour champs de saisie (VIDE ;-) )
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [images, setImages] = useState([]);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(
    localStorage.getItem("token") !== null
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isUserLoggedIn) {
      console.log(
        "L'utilisateur n'est pas connecté. Redirection vers la page de connexion."
      );
      return;
    }

    // Données à envoyer a l'API
    const annonceData = {
      title,
      price,
      description,
      location,
      images,
      email,
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify(annonceData),
    };

    try {
      const response = await fetch(
        "https://apihackaton1.osc-fr1.scalingo.io/create-properties",
        requestOptions
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Annonce ajoutée avec succès :", data);

        // Stocker les données uti. en local
        toastUtils("success", "Annonce ajoutée avec succès");

        // Afficher un toast de con.
        setTimeout(() => {
          window.location.href = "/";
        }, 4000);
      } else {
        console.error("Erreur lors de l'ajout de l'annonce :", response.status);

        // Afficher un toast erreur
        toastUtils("error", "Erreur lors de l'ajout de l'annonce");
      }
    } catch (error) {
      console.error("Erreur inattendue :", error);

      // Afficher un toast erreur
      toastUtils("error", "Erreur inattendue");
    }
  };

  const handleImageChange = (e) => {
    const selectedImages = Array.from(e.target.files).map((file) =>
      URL.createObjectURL(file)
    );
    setImages(selectedImages);
  };

  return (
    <>
      {isUserLoggedIn && (
        <>
          <h2>Ajouter une annonce</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Titre:
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
            <br />
            <label>
              Prix:
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </label>

            <label>
              Email:
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <br />
            <label>
              Description:
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
            <br />
            <label>
              Localisation:
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </label>
            <br />
            <label>
              Image (lien) :
              <input
                type="text"
                value={imageLink}
                onChange={(e) => setImageLink(e.target.value)}
              />
            </label>
            <br />
            <button
              className="btn-annonce"
              type="button"
              onClick={() => {
                setImages([...images, imageLink]);
                setImageLink("");
              }}
            >
              Ajouter l'image
            </button>
            <br />
            <label>
              Images ajoutées :
              {images.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`Image ${index}`} />
                </div>
              ))}
            </label>
            <br />
            <button className="btn-annonce" type="submit">
              Ajouter l'annonce
            </button>
          </form>
        </>
      )}
      <ToastContainer />
    </>
  );
}

export default Annonce;
