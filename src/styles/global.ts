import { createGlobalStyle } from 'styled-components';

import { Theme } from '@/types/Theme';

const styled = { createGlobalStyle };

type Props = {
  theme: Theme;
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
