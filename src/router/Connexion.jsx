import React, { useState } from "react";

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
        console.log("Connexion réussie :", data);

        // Vous pouvez gérer le résultat de la connexion ici, par exemple, en redirigeant l'utilisateur vers une autre page.
      } else {
        console.error("Erreur lors de la connexion :", response.status);
        // Vous pouvez également gérer les erreurs ici, par exemple, en affichant un message d'erreur à l'utilisateur.
      }
    } catch (error) {
      console.error("Erreur inattendue :", error);
    }
  };

  return (
    <>
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
        <br />
        <button type="submit">Se connecter</button>
      </form>
    </>
  );
}

export default Connexion;
