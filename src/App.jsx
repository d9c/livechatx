import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import * as S from "./App.styles";

import { Chat } from "./components/Chat";
import { UserList } from "./components/UserList";
import { JoinRoom } from "./components/JoinRoom";

import { SnackbarContextProvider } from "./contexts/SnackbarContext";

import { ChatContextProvider } from "./contexts/ChatContext";

import { DarkTheme } from "./styles/themes/dark";
import { GlobalStyle } from "./styles/global";

export const App = () => {
  const [showChat, setShowChat] = useState(false);

  return (
    <ThemeProvider theme={DarkTheme}>
      <ChatContextProvider>
        <SnackbarContextProvider>
          <S.Container>
            {showChat ? (
              <S.Content>
                <Chat />
                <UserList />
              </S.Content>
            ) : (
              <JoinRoom setShowChat={setShowChat} />
            )}
          </S.Container>
        </SnackbarContextProvider>
      </ChatContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
};
