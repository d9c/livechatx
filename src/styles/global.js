import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle({
  "*": {
    margin: "0",
    padding: "0",
    boxSizing: "border-box",
  },
  body: {
    backgroundColor: (props) => props.theme.background,
  },
});
