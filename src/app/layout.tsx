'use client';

import styled, { ThemeProvider } from 'styled-components';

import { ChatContextProvider } from '@/contexts/ChatContext';
import { SnackbarContextProvider } from '@/contexts/SnackbarContext';

import { DarkTheme } from '@/styles/themes/dark';
import { GlobalStyle } from '@/styles/global';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={DarkTheme}>
          <ChatContextProvider>
            <SnackbarContextProvider>
              <Wrapper>{children}</Wrapper>
            </SnackbarContextProvider>
          </ChatContextProvider>
          <GlobalStyle />
        </ThemeProvider>
      </body>
    </html>
  );
}
