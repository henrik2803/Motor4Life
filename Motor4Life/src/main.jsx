import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/global.css";
import "./styles/variables.css";
import "./styles/toast.css";
import { ThemeProvider } from "./context/ThemeContext";
import { ReviewProvider } from "./context/ReviewContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <ReviewProvider>
        <App />
      </ReviewProvider>
    </ThemeProvider>
  </React.StrictMode>
);