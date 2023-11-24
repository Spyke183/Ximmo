import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Accueil from "./router/Accueil/Accueil.jsx";
import ErrorPage from "./error-page";
import Connexion from "./router/Connexion.jsx";
import Inscription from "./router/Inscription.jsx";
import Profil from "./router/Profil.jsx";
import Annonce from "./router/CreateAnnonce.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Accueil />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/connexion",
    element: <Connexion />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/profil",
    element: <Profil />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/annonce",
    element: <Annonce />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/inscription",
    element: <Inscription />,
    errorElement: <ErrorPage />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router} />
  </React.StrictMode>
);
