import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Acceuil from "./router/Acceuil.jsx";
import ErrorPage from "./error-page";

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
  </React.StrictMode>
);
