import React from "react";

function LogoutCompte() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return <button onClick={handleLogout}>Déconnexion</button>;
}

export default LogoutCompte;
