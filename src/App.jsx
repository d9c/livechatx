import React, { useContext } from "react";

import { Chat } from "./components/Chat";
import { JoinRoom } from "./components/JoinRoom";

import { ChatContext } from "./contexts/ChatContext";

import * as C from "./App.styles";

import GlobalStyle from "./styles/global";

export const App = () => {
  const { showChat } = useContext(ChatContext);

  return (
    <C.Container>
      {showChat ? <Chat /> : <JoinRoom />}
      <GlobalStyle />
    </C.Container>
  );
};
