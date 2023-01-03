import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import OurProvider from "./context/context";
import AuthProvider from "./context/authContext";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>

  <BrowserRouter>
    <AuthProvider>
      <OurProvider>
        <App />
      </OurProvider>
    </AuthProvider>
  </BrowserRouter>

  // </React.StrictMode>
);
