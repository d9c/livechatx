import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { Routes, Route, Navigate } from "react-router-dom";

import { ThemeContext } from "./contexts/ThemeContext";
import { ChatContextProvider } from "./contexts/ChatContext";
import { SnackbarContextProvider } from "./contexts/SnackbarContext";

import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { JoinRoom } from "./components/JoinRoom";
import { Chat } from "./components/Chat";
import { UserList } from "./components/UserList";

import { GlobalStyle } from "./styles/global";

import * as S from "./App.styles";

export const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme}>
      <ThemeSwitcher />
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
