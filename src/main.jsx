import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import { LoginProvider } from "./context/LoginContext";
import { CartProvider } from "./context/CartContext"; // ✅

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LoginProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </LoginProvider>
  </React.StrictMode>
);
