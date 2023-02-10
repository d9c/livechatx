import styled from 'styled-components';
import Snackbar from '@mui/material/Snackbar';

export const MuiSnackbar = styled(Snackbar)`
  && {
    .MuiPaper-root {
      background-color: #ffffff;
    }
    .MuiSnackbarContent-message {
      font-family: 'Inter', sans-serif;
      color: #000000;
    }
  }
`;
