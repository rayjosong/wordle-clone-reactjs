import { createContext, useState } from "react";

const KeyboardProvider = ({ children }) => {
  return (
    <KeyboardContext.KeyboardProvider value={value}>
      {children}
    </KeyboardContext.KeyboardProvider>
  );
};
