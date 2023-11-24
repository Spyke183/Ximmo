import React, { useState } from "react";

function Inscription() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Données à envoyer
    const userData = {
      username,
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
        "https://apihackaton1.osc-fr1.scalingo.io/users/register",
        requestOptions
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Données envoyées avec succès :", data);
      } else {
        console.error("Erreur lors de l'envoi des données :", response.status);
      }
    } catch (error) {
      console.error("Erreur inattendue :", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Nom d'utilisateur:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
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
        <br />
        <button type="submit">S'inscrire</button>
      </form>
    </>
  );
}

export default Inscription;
