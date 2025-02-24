import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";
import App from "./Components/App";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
