import { boardDefault } from "../components/Letter";

import { createContext } from "react";

const BoardContext = createContext(boardDefault);

const BoardProvider = () => {
  const value = {};
  return <BoardContext.Provider value={value}></BoardContext.Provider>;
};

export default BoardProvider;
