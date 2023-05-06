'use client';

import styled, { ThemeProvider } from 'styled-components';

import { ChatContextProvider } from '@/contexts/chat-context';
import { SnackbarContextProvider } from '@/contexts/snackbar-context';

import { DarkTheme } from '@/styles/themes/dark';
import { GlobalStyle } from '@/styles/global';
import '@/styles/nprogress.css';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={DarkTheme}>
      <ChatContextProvider>
        <SnackbarContextProvider>
          <Wrapper>{children}</Wrapper>
        </SnackbarContextProvider>
      </ChatContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}
