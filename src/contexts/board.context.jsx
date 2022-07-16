import { boardDefault } from "../components/Letter";

import { createContext, useState, useEffect } from "react";

export const BoardContext = createContext();

const BoardProvider = ({ children }) => {
  const [board, setBoard] = useState(boardDefault);

  const value = { board, setBoard };
  return (
    <BoardContext.Provider value={value}>{children}</BoardContext.Provider>
  );
};

export default BoardProvider;
