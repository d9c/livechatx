import styled from "styled-components";
import { Snackbar as MuiSnackbar } from "@mui/material";

export const Snackbar = styled(MuiSnackbar)`
  && {
    .MuiPaper-root {
      background-color: #ffffff;
    }
    .MuiSnackbarContent-message {
      font-family: "Inter", sans-serif;
      color: #000000;
    }
  }
`;
