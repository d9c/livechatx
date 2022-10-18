import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import { ThemeContextProvider } from "./contexts/ThemeContext";

import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeContextProvider>
    <Router>
      <App />
    </Router>
  </ThemeContextProvider>
);
