import React from "react";
import ReactDOM from "react-dom/client";
import { GeneratorApp } from "./components/GeneratorApp";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GeneratorApp />
  </React.StrictMode>,
);
