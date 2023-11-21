import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Acceuil from "./router/Acceuil.jsx";
import ErrorPage from "./error-page";
import Connexion from "./router/Connexion.jsx";
import Inscription from "./router/Inscription.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Acceuil />,
    errorElement: <ErrorPage />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router} />
    <Connexion />
    <Inscription />
  </React.StrictMode>
);
