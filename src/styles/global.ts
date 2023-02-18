import { createGlobalStyle } from 'styled-components';

import { ThemeType } from '../types/themeType';

const styled = { createGlobalStyle };

type Props = {
  theme: ThemeType;
};

export const GlobalStyle = styled.createGlobalStyle<Props>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme.background};
  }
`;
