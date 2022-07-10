import React, { useContext } from "react";

import { Chat } from "./components/Chat";
import { JoinRoom } from "./components/JoinRoom";

import { ChatContext } from "./contexts/ChatContext";

import "./styles/app.scss";

export const App = () => {
  const { showChat } = useContext(ChatContext);

  return <div className="app">{showChat ? <Chat /> : <JoinRoom />}</div>;
};
