import { StrictMode } from "react"; //helps catch common issues while developing
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx"; //main app component

createRoot(document.getElementById("root")).render( //to find root in html and tells React to render
  <StrictMode>
    <App />
  </StrictMode>
);
