import React from "react";
import { ThemeProvider } from "styled-components";
import { Routes, Route, Navigate } from "react-router-dom";

import { Chat } from "./components/Chat";
import { UserList } from "./components/UserList";
import { JoinRoom } from "./components/JoinRoom";

import { ChatContextProvider } from "./contexts/ChatContext";
import { SnackbarContextProvider } from "./contexts/SnackbarContext";

import { DarkTheme } from "./styles/themes/dark";
import { GlobalStyle } from "./styles/global";

import * as S from "./App.styles";

export const App = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <ChatContextProvider>
        <SnackbarContextProvider>
          <S.Container>
            <Routes>
              <Route path="/" element={<JoinRoom />} />
              <Route
                path="/chat"
                element={
                  <S.ChatContainer>
                    <Chat />
                    <UserList />
                  </S.ChatContainer>
                }
              />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </S.Container>
        </SnackbarContextProvider>
      </ChatContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
};
