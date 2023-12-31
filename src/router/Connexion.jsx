import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import toastUtils from "../components/toastUtils/ToastUtils";

function Connexion() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

        // Stocker les données uti. en local

        localStorage.setItem("token", data.token);

        // Afficher un toast de con.
        toastUtils("success", "Connexion réussie");
        setTimeout(() => {
          //utilisation window.location pour refresh navbar
          window.location.href = "/";
        }, 4000);
      } else {
        console.error("Erreur lors de la connexion :", response.status);

        // Afficher un toast erreur
        toastUtils("error", "Erreur lors de la connexion");
      }
    } catch (error) {
      console.error("Erreur inattendue :", error);

      // Afficher un toast erreur
      toastUtils("error", "Erreur inattendue");
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
        <ToastContainer />
      </div>
    </>
  );
}

export default Connexion;
