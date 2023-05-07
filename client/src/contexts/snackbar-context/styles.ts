import styled from 'styled-components';
import Snackbar from '@mui/material/Snackbar';

export const MuiSnackbar = styled(Snackbar)`
  && {
    .MuiPaper-root {
      background-color: #ffffff;
    }
    .MuiSnackbarContent-message {
      font-family: ${(props) => props.theme.fontFamily}, sans-serif;
      color: #000000;
    }
  }
`;
