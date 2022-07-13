import React, { useContext } from "react";

import { Chat } from "./components/Chat";
import { JoinRoom } from "./components/JoinRoom";

import { ChatContext } from "./contexts/ChatContext";

import * as Styled from "./App.styles";

export const App = () => {
  const { showChat } = useContext(ChatContext);

  return (
    <Styled.Container>{showChat ? <Chat /> : <JoinRoom />}</Styled.Container>
  );
};
