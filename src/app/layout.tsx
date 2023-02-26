'use client';

import { ThemeProvider } from 'styled-components';

import StyledComponentsRegistry from '@/lib/registry';

import { ChatContextProvider } from '@/contexts/ChatContext';
import { SnackbarContextProvider } from '@/contexts/SnackbarContext';

import { DarkTheme } from '@/styles/themes/dark';
import { GlobalStyle } from '@/styles/global';
import '@/styles/nprogress.css';

import * as S from './layout.styles';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={DarkTheme}>
            <ChatContextProvider>
              <SnackbarContextProvider>
                <S.Wrapper>{children}</S.Wrapper>
              </SnackbarContextProvider>
            </ChatContextProvider>
            <GlobalStyle />
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
