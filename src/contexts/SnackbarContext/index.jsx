import React, { createContext, useState } from "react";

export const SnackbarContext = createContext({});

import * as S from "./styles";

export const SnackbarContextProvider = ({ children }) => {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
  });

  const handleClose = (e, reason) => {
    if (reason === "clickaway") return;
    setSnackbar({
      open: false,
      message: "",
    });
  };

  return (
    <SnackbarContext.Provider value={{ snackbar, setSnackbar }}>
      {children}
      <S.Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        message={snackbar.message}
      />
    </SnackbarContext.Provider>
  );
};
