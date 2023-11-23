import React, { useState } from "react";
import { Link } from "react-router-dom"; // Ajoutez cette ligne pour utiliser le composant Link

function Connexion() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };

    try {
      const response = await fetch(
        "https://apihackaton1.osc-fr1.scalingo.io/users/login",
        requestOptions
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Connexion réussie :", data.token);

        // Stocker les données utilisateur en local
        localStorage.setItem("token", data.token);
      } else {
        console.error("Erreur lors de la connexion :", response.status);
      }
    } catch (error) {
      console.error("Erreur inattendue :", error);
    }
  };

  return (
    <>
      <div className="connexion-modal">
        <div className="header-modal">Se connecter</div>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <label>
            Mot de passe:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button className="btn-annonce" onClick={handleSubmit}>
            Se connecter
          </button>
        </form>
        <p>
          Pas encore de compte ? <Link to="/inscription">S'inscrire</Link>
        </p>
      </div>
    </>
  );
}

export default Connexion;
