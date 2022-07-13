import React from "react";
import ReactDOM from "react-dom/client";

import { ChatContextProvider } from "./contexts/ChatContext";

import { App } from "./App";

import "./styles/global.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChatContextProvider>
    <App />
  </ChatContextProvider>
);
