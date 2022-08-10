import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";

import * as S from "./App.styles";

import { Chat } from "./components/Chat";
import { JoinRoom } from "./components/JoinRoom";
import { UserList } from "./components/UserList";

import { ChatContext } from "./contexts/ChatContext";
import { SnackbarContextProvider } from "./contexts/SnackbarContext";

import { DarkTheme } from "./styles/themes/dark";
import { GlobalStyle } from "./styles/global";

export const App = () => {
  const { showChat } = useContext(ChatContext);

  return (
    <ThemeProvider theme={DarkTheme}>
      <SnackbarContextProvider>
        <S.Container>
          {showChat ? (
            <S.Content>
              <Chat />
              <UserList />
            </S.Content>
          ) : (
            <JoinRoom />
          )}
        </S.Container>
      </SnackbarContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
};
