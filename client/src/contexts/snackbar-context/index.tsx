'use client';

import { createContext, useState } from 'react';

import * as S from './styles';

type Snackbar = {
  open: boolean;
  message: string;
};

type ContextValues = {
  snackbar: Snackbar;
  setSnackbar: React.Dispatch<React.SetStateAction<Snackbar>>;
};

type Props = {
  children: React.ReactNode;
};

const initialValues = {
  snackbar: {
    open: false,
    message: '',
  },
  setSnackbar: () => {},
};

export const SnackbarContext = createContext<ContextValues>(initialValues);

export const SnackbarContextProvider = ({ children }: Props) => {
  const [snackbar, setSnackbar] = useState(initialValues.snackbar);

  const handleClose = (e: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') return;
    setSnackbar({
      open: false,
      message: '',
    });
  };

  return (
    <SnackbarContext.Provider value={{ snackbar, setSnackbar }}>
      {children}
      <S.MuiSnackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        message={snackbar.message}
      />
    </SnackbarContext.Provider>
  );
};
