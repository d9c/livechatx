import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";

import { Chat } from "./components/Chat";
import { JoinRoom } from "./components/JoinRoom";

import { ChatContext } from "./contexts/ChatContext";

import * as S from "./App.styles";

import { DarkTheme } from "./styles/themes/dark";
import { GlobalStyle } from "./styles/global";

export const App = () => {
  const { showChat } = useContext(ChatContext);

  return (
    <ThemeProvider theme={DarkTheme}>
      <S.Container>
        {showChat ? <Chat /> : <JoinRoom />}
        <GlobalStyle />
      </S.Container>
    </ThemeProvider>
  );
};
